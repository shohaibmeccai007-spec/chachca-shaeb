import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

// Configure transport using environment variables
// Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, COMPANY_EMAIL
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/lead', async (req, res) => {
  const { fullName, companyName, phoneNumber, companyEmail } = req.body || {};
  if (!fullName || !companyName || !phoneNumber || !companyEmail) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const toAddress = process.env.COMPANY_EMAIL || 'contact@flable.ai';
    await transporter.sendMail({
      from: `Flable.ai Website <${process.env.SMTP_USER}>`,
      to: toAddress,
      subject: 'New Demo Request (Flable.ai)',
      text: `New lead\nName: ${fullName}\nCompany: ${companyName}\nPhone: ${phoneNumber}\nEmail: ${companyEmail}`,
      html: `<h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${companyEmail}</p>`
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Server listening on :${port}`);
});
