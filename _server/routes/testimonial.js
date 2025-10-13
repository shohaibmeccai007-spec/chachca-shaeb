const express = require('express');
const router = express.Router();

// Mock testimonials data - in production, this would come from a database
const testimonials = [
  {
    _id: '1',
    text: "Flable's AI CMO has revolutionized our marketing operations. We've seen a 40% increase in ROAS and 60% reduction in manual work. The platform's intelligence is unmatched.",
    author: "Alex Kumar",
    role: "Head of Growth",
    company: "MYOP",
    avatar: "AK",
    rating: 5,
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    _id: '2',
    text: "As an education platform, we needed sophisticated marketing automation. Flable delivered beyond expectations with their AI-driven approach, increasing our student acquisition by 45%.",
    author: "Priya Sharma",
    role: "Marketing Director",
    company: "Edureka",
    avatar: "PS",
    rating: 5,
    createdAt: '2024-01-10T00:00:00Z'
  }
];

// GET /api/testimonial - Get all testimonials
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: testimonials
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching testimonials',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// POST /api/testimonial - Create testimonial (admin only)
router.post('/', (req, res) => {
  try {
    const { text, author, role, company, avatar, rating } = req.body;

    if (!text || !author || !role || !company) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: text, author, role, company'
      });
    }

    const newTestimonial = {
      _id: (testimonials.length + 1).toString(),
      text,
      author,
      role,
      company,
      avatar: avatar || author.split(' ').map(n => n[0]).join(''),
      rating: rating || 5,
      createdAt: new Date().toISOString()
    };

    testimonials.push(newTestimonial);

    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: newTestimonial
    });

  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

module.exports = router;
