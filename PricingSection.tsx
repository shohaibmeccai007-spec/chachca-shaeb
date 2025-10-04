import React from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'From $299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI marketing',
      features: [
        'Up to $5K monthly ad spend',
        '2 AI agents (Creative + Performance)',
        'Basic integrations (Meta Ads, Google Ads)',
        'Email support',
        'Basic reporting dashboard',
        '7-day free trial'
      ],
      popular: false,
      color: 'border-gray-200',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: 'From $799',
      period: '/month',
      description: 'Ideal for growing businesses with multiple campaigns',
      features: [
        'Up to $25K monthly ad spend',
        'All 5 AI agents included',
        'Full integrations (Shopify, HubSpot, Zoho)',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom dashboard',
        '14-day free trial',
        'Dedicated account manager'
      ],
      popular: true,
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited ad spend',
        'All AI agents + custom configurations',
        'All integrations + custom APIs',
        '24/7 phone & chat support',
        'Custom reporting & analytics',
        'White-label options',
        '30-day free trial',
        'Dedicated success team',
        'SLA guarantees',
        'Custom training & onboarding'
      ],
      popular: false,
      color: 'border-purple-500',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a full-featured trial at no cost. No credit card required. Cancel anytime during the trial period.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What integrations are included?',
      answer: 'All plans include Meta Ads and Google Ads. Professional and Enterprise plans include Shopify, HubSpot, Zoho, and Shiprocket.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any plan. You only pay the monthly subscription cost.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include our core AI agents and 24/7 optimization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book-demo"
                className={`w-full ${plan.buttonColor} text-white py-4 rounded-xl text-lg font-bold transition-colors transform hover:scale-105 duration-200 shadow-lg flex items-center justify-center space-x-2`}
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <Zap className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see the difference AI can make for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200 shadow-lg"
              >
                Book a Demo
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105 duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;