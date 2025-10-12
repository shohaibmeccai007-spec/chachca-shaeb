import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Building, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          preferredDate: '',
          preferredTime: ''
        });
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-pink-50 via-white to-violet-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-6 py-3 mb-8">
              <Calendar className="h-5 w-5 text-pink-600" />
              <span className="text-sm font-medium text-gray-700">Book Your Demo</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="brand-text">Ready to Transform Your Marketing?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Schedule a personalized demo and discover how Flable AI can revolutionize your marketing results
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <ScrollReveal variant="zoom">
            <div className="glass-card rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building className="inline h-4 w-4 mr-2" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Tell us about your marketing challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 resize-none"
                    placeholder="What marketing challenges are you facing? What results are you hoping to achieve?"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700 font-medium">
                      Demo request submitted successfully! We'll contact you within 24 hours.
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <span className="text-red-700 font-medium">
                      Something went wrong. Please try again or contact us directly.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neo cursor-hover text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Scheduling Demo...' : 'Schedule My Demo'}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="brand-text">What to Expect</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Get a personalized walkthrough of how Flable AI can transform your marketing results
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Personalized Strategy',
                    description: 'Custom analysis of your current marketing setup and growth opportunities'
                  },
                  {
                    icon: '📊',
                    title: 'Live Demo',
                    description: 'See Flable AI in action with your actual data and use cases'
                  },
                  {
                    icon: '💡',
                    title: 'Expert Insights',
                    description: 'Get recommendations from our AI marketing specialists'
                  },
                  {
                    icon: '🚀',
                    title: 'Implementation Plan',
                    description: 'Clear roadmap for integrating AI into your marketing workflow'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="brand-text">Free Consultation</span>
                </h4>
                <p className="text-gray-600 mb-4">
                  No commitment required. This is a completely free consultation to help you understand how AI can transform your marketing.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
