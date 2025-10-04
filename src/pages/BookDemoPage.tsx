import React, { useState } from 'react';
import { CheckCircle, Calendar, User, Building, Phone, Mail } from 'lucide-react';

const BookDemoPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    companyEmail: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call to send email
    try {
      // In a real implementation, you would send this data to your backend
      // which would then email the details to your company email
      console.log('Demo request submitted:', formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Our team will contact you shortly to schedule your personalized demo.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-blue-800 font-medium">
              📧 A confirmation email has been sent to {formData.companyEmail}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Flable.ai can transform your marketing with AI-powered optimization and 24/7 campaign management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="h-4 w-4 inline mr-2" />
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Company Email *
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  required
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your company email"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? 'Submitting...' : 'Book a Demo'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              By submitting this form, you agree to our privacy policy and terms of service.
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect in Your Demo</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Personalized AI CMO strategy for your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Live walkthrough of agent capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">ROI projection based on your current spend</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Custom onboarding timeline</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-900 mb-3">⏰ Demo Details</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• 30-45 minute session</li>
                <li>• Screen sharing & live examples</li>
                <li>• Q&A with our AI marketing experts</li>
                <li>• No commitment required</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="text-lg font-bold text-green-900 mb-3">🎯 Results You Can Expect</h4>
              <ul className="space-y-2 text-green-800">
                <li>• +35% increase in conversions</li>
                <li>• 60% reduction in ad waste</li>
                <li>• 24/7 automated optimization</li>
                <li>• Complete marketing transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoPage;