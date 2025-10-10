const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: [true, 'Blog excerpt is required'],
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Blog content is required']
  },
  heroImage: {
    type: String,
    required: [true, 'Hero image is required']
  },
  author: {
    name: {
      type: String,
      required: [true, 'Author name is required']
    },
    avatar: String,
    bio: String
  },
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['AI Marketing', 'Growth', 'Analytics', 'Automation', 'Strategy', 'Case Study']
  },
  featured: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  readTime: {
    type: Number,
    default: 5
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  }
}, {
  timestamps: true
});

// Create slug from title before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// Calculate read time based on content
blogSchema.pre('save', function(next) {
  if (this.isModified('content')) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  next();
});

// Index for better search performance
blogSchema.index({ title: 'text', content: 'text', tags: 'text' });
blogSchema.index({ published: 1, publishedAt: -1 });
blogSchema.index({ category: 1 });
blogSchema.index({ slug: 1 });

module.exports = mongoose.model('Blog', blogSchema);
