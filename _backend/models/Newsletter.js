const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name cannot exceed 200 characters']
  },
  interests: [{
    type: String,
    enum: ['AI Marketing', 'Analytics', 'Automation', 'Growth', 'Case Studies', 'Product Updates']
  }],
  status: {
    type: String,
    enum: ['subscribed', 'unsubscribed', 'bounced', 'complained'],
    default: 'subscribed'
  },
  source: {
    type: String,
    default: 'website'
  },
  ipAddress: String,
  userAgent: String,
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  unsubscribedAt: Date,
  lastEmailSent: Date
}, {
  timestamps: true
});

// Index for better query performance
newsletterSchema.index({ email: 1 });
newsletterSchema.index({ status: 1 });
newsletterSchema.index({ subscribedAt: -1 });

module.exports = mongoose.model('Newsletter', newsletterSchema);
