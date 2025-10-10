const express = require('express');
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Subscribe to newsletter
router.post('/subscribe', [
  body('email').isEmail().withMessage('Valid email is required'),
  body('firstName').optional().trim().isLength({ max: 50 }),
  body('lastName').optional().trim().isLength({ max: 50 }),
  body('company').optional().trim().isLength({ max: 200 }),
  body('interests').optional().isArray()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, firstName, lastName, company, interests } = req.body;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        // Reactivate subscription
        existingSubscriber.status = 'subscribed';
        existingSubscriber.firstName = firstName;
        existingSubscriber.lastName = lastName;
        existingSubscriber.company = company;
        existingSubscriber.interests = interests;
        existingSubscriber.subscribedAt = new Date();
        existingSubscriber.unsubscribedAt = null;
        await existingSubscriber.save();
      } else {
        return res.status(400).json({ 
          success: false, 
          message: 'Email is already subscribed' 
        });
      }
    } else {
      // Create new subscription
      const newsletter = new Newsletter({
        email,
        firstName,
        lastName,
        company,
        interests,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      });

      await newsletter.save();
    }

    // Send welcome email (if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();
        
        const welcomeEmail = {
          from: process.env.SMTP_USER,
          to: email,
          subject: 'Welcome to Flable.ai Newsletter! 🚀',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6366f1;">Welcome to Flable.ai!</h2>
              <p>Hi ${firstName || 'there'},</p>
              <p>Thank you for subscribing to our newsletter! You'll now receive:</p>
              <ul>
                <li>Latest AI marketing insights</li>
                <li>Case studies and success stories</li>
                <li>Product updates and new features</li>
                <li>Exclusive tips and strategies</li>
              </ul>
              <p>We're excited to help you transform your marketing with AI!</p>
              <p>Best regards,<br>The Flable Team</p>
              <hr>
              <p><small>You can unsubscribe anytime by clicking the link in our emails.</small></p>
            </div>
          `
        };

        await transporter.sendMail(welcomeEmail);
      } catch (emailError) {
        console.error('Welcome email failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    res.status(201).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe to newsletter',
      error: error.message 
    });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email } = req.body;

    const subscriber = await Newsletter.findOne({ email });
    if (!subscriber) {
      return res.status(404).json({ 
        success: false, 
        message: 'Email not found in our records' 
      });
    }

    subscriber.status = 'unsubscribed';
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    res.json({ 
      success: true, 
      message: 'Successfully unsubscribed from newsletter' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to unsubscribe',
      error: error.message 
    });
  }
});

// Get all subscribers (admin only)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const status = req.query.status;

    const query = {};
    if (status) query.status = status;

    const subscribers = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Newsletter.countDocuments(query);

    res.json({
      success: true,
      data: subscribers,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get subscriber stats (admin only)
router.get('/stats', async (req, res) => {
  try {
    const total = await Newsletter.countDocuments();
    const subscribed = await Newsletter.countDocuments({ status: 'subscribed' });
    const unsubscribed = await Newsletter.countDocuments({ status: 'unsubscribed' });
    const bounced = await Newsletter.countDocuments({ status: 'bounced' });

    res.json({
      success: true,
      data: {
        total,
        subscribed,
        unsubscribed,
        bounced,
        activeRate: total > 0 ? ((subscribed / total) * 100).toFixed(2) : 0
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
