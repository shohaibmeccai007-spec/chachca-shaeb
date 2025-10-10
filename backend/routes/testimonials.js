const express = require('express');
const { body, validationResult } = require('express-validator');
const Testimonial = require('../models/Testimonial');
const router = express.Router();

// Get all published testimonials
router.get('/', async (req, res) => {
  try {
    const featured = req.query.featured;
    const industry = req.query.industry;
    const limit = parseInt(req.query.limit) || 10;

    const query = { published: true };
    if (featured === 'true') query.featured = true;
    if (industry) query.industry = industry;

    const testimonials = await Testimonial.find(query)
      .sort({ order: 1, createdAt: -1 })
      .limit(limit);

    res.json({ success: true, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get featured testimonials
router.get('/featured', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ 
      published: true, 
      featured: true 
    })
    .sort({ order: 1, createdAt: -1 })
    .limit(6);

    res.json({ success: true, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create new testimonial (admin only)
router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('role').notEmpty().withMessage('Role is required'),
  body('company').notEmpty().withMessage('Company is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5')
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

    const testimonial = new Testimonial(req.body);
    await testimonial.save();

    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update testimonial (admin only)
router.put('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({ 
        success: false, 
        message: 'Testimonial not found' 
      });
    }

    res.json({ success: true, data: testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete testimonial (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ 
        success: false, 
        message: 'Testimonial not found' 
      });
    }

    res.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
