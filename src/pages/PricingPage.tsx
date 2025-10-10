import React from 'react';
import { Check, Star, Zap, Crown, Building, Shield, Phone } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Custom',
      period: '',
      description: 'Perfect for small businesses getting started with AI marketing',
      features: [
        '1-2 Marketing Channels',
        'Basic AI Agents (Creative, Performance)',
        'Weekly Reporting',
        'Email Support',
        'Up to $10K Ad Spend',
        'Basic Integrations'
      ],
      popular: false,
      cta: 'Book a Demo'
    },
    {
      name: 'Professional',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'Ideal for growing businesses ready to scale',
      features: [
        '3-5 Marketing Channels',
        'All AI Agents Included',
        'Daily Reporting & Analytics',
        'Priority Support',
        'Up to $50K Ad Spend',
        'Advanced Integrations',
        'Custom Dashboards',
        'A/B Testing Suite'
      ],
      popular: true,
      cta: 'Book a Demo'
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited Marketing Channels',
        'Custom AI Agent Development',
        'Real-time Reporting',
        'Dedicated Account Manager',
        'Unlimited Ad Spend',
        'Custom Integrations',
        'White-label Options',
        'SLA Guarantees'
      ],
      popular: false,
      cta: 'Book a Demo'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business size and marketing goals. All plans include our core AI CMO technology.
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>30-day money back guarantee</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-500 transform scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/book-demo"
                  className={`w-full block py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">GDPR compliant, SOC 2 certified, and bank-level security for all your data.</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support from our team of AI marketing specialists.</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Setup</h3>
              <p className="text-gray-600">Get up and running in minutes with our automated onboarding process.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can I see results?</h3>
              <p className="text-gray-600">Most clients see improvements in campaign performance within 7-14 days of setup.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I need custom integrations?</h3>
              <p className="text-gray-600">Our Enterprise plan includes custom integrations. For other plans, custom work is available for an additional fee.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-blue-100 mb-8">Join hundreds of businesses already using Flable.ai</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200 shadow-lg">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;