const express = require('express');
const router = express.Router();

// Mock blog data - in production, this would come from a database
const blogs = [
  {
    _id: '1',
    title: 'How AI is Revolutionizing D2C Marketing',
    slug: 'ai-revolutionizing-d2c-marketing',
    excerpt: 'Exploring the transformative power of AI in direct-to-consumer marketing strategies.',
    content: 'Full blog content here...',
    author: { name: 'Flable AI Team' },
    category: 'AI Marketing',
    publishedAt: '2024-01-15T00:00:00Z',
    readTime: '5 min read',
    image: '/assets/blog-1.jpg',
    tags: ['AI Marketing', 'D2C', 'Automation']
  },
  {
    _id: '2',
    title: 'Case Study: 340% ROAS Increase with AI-Powered Campaign Optimization',
    slug: 'case-study-340-roas-increase',
    excerpt: 'Deep dive into how MYOP achieved remarkable results using Flable AI.',
    content: 'Full case study content here...',
    author: { name: 'Alex Kumar' },
    category: 'Case Study',
    publishedAt: '2024-01-10T00:00:00Z',
    readTime: '7 min read',
    image: '/assets/blog-2.jpg',
    tags: ['Case Study', 'ROAS', 'Optimization']
  }
];

// GET /api/blog - Get all blog posts
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// GET /api/blog/:id - Get single blog post
router.get('/:id', (req, res) => {
  try {
    const blog = blogs.find(b => b._id === req.params.id || b.slug === req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

module.exports = router;
