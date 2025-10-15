const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

// Google Sheets configuration
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(
  /\\n/g,
  "\n"
);

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "sales@flable.ai";

// Initialize Google Sheets
const initializeGoogleSheets = async () => {
  if (
    !GOOGLE_SHEET_ID ||
    !GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !GOOGLE_PRIVATE_KEY
  ) {
    console.log(
      "Google Sheets not configured. Skipping spreadsheet integration."
    );
    return null;
  }

  try {
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Create or get the bookings sheet
    let sheet;
    try {
      sheet = doc.sheetsByTitle["Bookings"];
    } catch (error) {
      // Create the sheet if it doesn't exist
      sheet = await doc.addSheet({
        title: "Bookings",
        headerValues: [
          "Timestamp",
          "Name",
          "Email",
          "Company",
          "Phone",
          "Preferred Date",
          "Preferred Time",
          "Message",
          "Source",
        ],
      });
    }

    return sheet;
  } catch (error) {
    console.error("Error initializing Google Sheets:", error);
    return null;
  }
};

// Add booking to Google Sheets
const addBookingToSheet = async (bookingData) => {
  try {
    const sheet = await initializeGoogleSheets();
    if (!sheet) {
      console.log("Google Sheets not available, skipping spreadsheet entry");
      return;
    }

    await sheet.addRow({
      Timestamp: bookingData.timestamp,
      Name: bookingData.name,
      Email: bookingData.email,
      Company: bookingData.company,
      Phone: bookingData.phone || "",
      "Preferred Date": bookingData.preferredDate,
      "Preferred Time": bookingData.preferredTime,
      Message: bookingData.message || "",
      Source: bookingData.source || "website",
    });

    console.log("Booking added to Google Sheets successfully");
  } catch (error) {
    console.error("Error adding booking to Google Sheets:", error);
  }
};

// Send email notification
const sendEmailNotification = async (bookingData) => {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.log("Email not configured. Skipping email notification.");
    return;
  }

  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Demo Booking Request - ${bookingData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Demo Booking Request</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${bookingData.name}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Company:</strong> ${bookingData.company}</p>
            <p><strong>Phone:</strong> ${
              bookingData.phone || "Not provided"
            }</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Demo Preferences</h3>
            <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${bookingData.preferredTime}</p>
          </div>
          
          ${
            bookingData.message
              ? `
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${bookingData.message}</p>
          </div>
          `
              : ""
          }
          
          <div style="background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #3730a3;"><strong>Next Steps:</strong> Please contact the client within 24 hours to confirm the demo appointment.</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This booking was submitted on ${new Date(
              bookingData.timestamp
            ).toLocaleString()}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
};

// POST /api/booking - Create new booking
router.post("/", async (req, res) => {
  try {
    const bookingData = req.body;

    // Validate required fields
    if (
      !bookingData.name ||
      !bookingData.email ||
      !bookingData.company ||
      !bookingData.preferredDate ||
      !bookingData.preferredTime
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, email, company, preferredDate, preferredTime",
      });
    }

    // Add timestamp if not provided
    if (!bookingData.timestamp) {
      bookingData.timestamp = new Date().toISOString();
    }

    // Add to Google Sheets (async, don't wait)
    addBookingToSheet(bookingData).catch((error) => {
      console.error("Google Sheets error (non-blocking):", error);
    });

    // Send email notification (async, don't wait)
    sendEmailNotification(bookingData).catch((error) => {
      console.error("Email notification error (non-blocking):", error);
    });

    res.status(200).json({
      success: true,
      message: "Booking request submitted successfully",
      data: {
        id: Date.now(), // Simple ID generation
        timestamp: bookingData.timestamp,
      },
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    });
  }
});

// GET /api/booking - Get all bookings (admin only)
router.get("/", async (req, res) => {
  try {
    // In production, add authentication here
    const sheet = await initializeGoogleSheets();
    if (!sheet) {
      return res.status(503).json({
        success: false,
        message: "Google Sheets not configured",
      });
    }

    const rows = await sheet.getRows();
    const bookings = rows.map((row) => ({
      id: row.rowNumber,
      timestamp: row.get("Timestamp"),
      name: row.get("Name"),
      email: row.get("Email"),
      company: row.get("Company"),
      phone: row.get("Phone"),
      preferredDate: row.get("Preferred Date"),
      preferredTime: row.get("Preferred Time"),
      message: row.get("Message"),
      source: row.get("Source"),
    }));

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    });
  }
});

module.exports = router;
