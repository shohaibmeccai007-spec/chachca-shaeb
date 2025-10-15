const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "sales@flable.ai";

// Send email notification
const sendEmailNotification = async (contactData) => {
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
      subject: `New Contact Form Submission - ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Company:</strong> ${
              contactData.company || "Not provided"
            }</p>
            <p><strong>Phone:</strong> ${
              contactData.phone || "Not provided"
            }</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This message was submitted on ${new Date(
              contactData.timestamp
            ).toLocaleString()}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Contact email notification sent successfully");
  } catch (error) {
    console.error("Error sending contact email notification:", error);
  }
};

// POST /api/contact - Submit contact form
router.post("/", async (req, res) => {
  try {
    const contactData = req.body;

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, email, message",
      });
    }

    // Add timestamp if not provided
    if (!contactData.timestamp) {
      contactData.timestamp = new Date().toISOString();
    }

    // Send email notification (async, don't wait)
    sendEmailNotification(contactData).catch((error) => {
      console.error("Contact email notification error (non-blocking):", error);
    });

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      data: {
        id: Date.now(),
        timestamp: contactData.timestamp,
      },
    });
  } catch (error) {
    console.error("Contact submission error:", error);
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

module.exports = router;
