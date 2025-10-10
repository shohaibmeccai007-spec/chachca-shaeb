const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
    maxlength: [100, 'Role cannot exceed 100 characters']
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true,
    maxlength: [200, 'Company name cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Testimonial content is required'],
    trim: true,
    maxlength: [1000, 'Testimonial cannot exceed 1000 characters']
  },
  avatar: {
    type: String,
    default: null
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  featured: {
    type: Boolean,
    default: false
  },
  verified: {
    type: Boolean,
    default: false
  },
  industry: {
    type: String,
    trim: true,
    maxlength: [100, 'Industry cannot exceed 100 characters']
  },
  results: {
    metric: String,
    value: String,
    description: String
  },
  published: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for better query performance
testimonialSchema.index({ featured: 1, published: 1, order: 1 });
testimonialSchema.index({ company: 1 });
testimonialSchema.index({ industry: 1 });

module.exports = mongoose.model('Testimonial', testimonialSchema);
