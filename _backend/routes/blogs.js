const express = require('express');
const { body, validationResult } = require('express-validator');
const Blog = require('../models/Blog');
const router = express.Router();

// Get all published blogs with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const search = req.query.search;
    const featured = req.query.featured;

    const query = { published: true };
    
    if (category) query.category = category;
    if (featured === 'true') query.featured = true;
    if (search) {
      query.$text = { $search: search };
    }

    const blogs = await Blog.find(query)
      .select('-content') // Exclude full content for list view
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: blogs,
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

// Get single blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ 
      slug: req.params.slug, 
      published: true 
    });

    if (!blog) {
      return res.status(404).json({ 
        success: false, 
        message: 'Blog post not found' 
      });
    }

    // Increment view count
    blog.views += 1;
    await blog.save();

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get related blogs
router.get('/:slug/related', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ 
        success: false, 
        message: 'Blog post not found' 
      });
    }

    const relatedBlogs = await Blog.find({
      _id: { $ne: blog._id },
      published: true,
      $or: [
        { category: blog.category },
        { tags: { $in: blog.tags } }
      ]
    })
    .select('-content')
    .limit(3)
    .sort({ publishedAt: -1 });

    res.json({ success: true, data: relatedBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create new blog (admin only - add auth middleware later)
router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('excerpt').notEmpty().withMessage('Excerpt is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('heroImage').notEmpty().withMessage('Hero image is required'),
  body('author.name').notEmpty().withMessage('Author name is required'),
  body('category').isIn(['AI Marketing', 'Growth', 'Analytics', 'Automation', 'Strategy', 'Case Study'])
    .withMessage('Invalid category')
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

    const blog = new Blog(req.body);
    await blog.save();

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update blog (admin only)
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({ 
        success: false, 
        message: 'Blog not found' 
      });
    }

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete blog (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ 
        success: false, 
        message: 'Blog not found' 
      });
    }

    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
