const express = require('express');
const router = express.Router();

// Mock newsletter subscribers - in production, this would be stored in a database
let subscribers = [];

// POST /api/newsletter/subscribe - Subscribe to newsletter
router.post('/subscribe', (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Valid email address is required'
      });
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return res.status(200).json({
        success: true,
        message: 'Email already subscribed to newsletter'
      });
    }

    // Add to subscribers list
    subscribers.push(email);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        email: email,
        subscribedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// GET /api/newsletter/subscribers - Get all subscribers (admin only)
router.get('/subscribers', (req, res) => {
  try {
    // In production, add authentication here
    res.status(200).json({
      success: true,
      data: subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching subscribers',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

module.exports = router;
