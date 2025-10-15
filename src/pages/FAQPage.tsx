import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Settings, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Zap,
      questions: [
        {
          q: 'How do I get started with Flable.ai?',
          a: 'Simply book a demo with our team. We\'ll walk you through the platform, understand your marketing goals, and create a customized onboarding plan. The entire setup process typically takes 1-2 business days.'
        },
        {
          q: 'What integrations do you support?',
          a: 'We support all major marketing platforms including Meta Ads, Google Ads, Shopify, HubSpot, Zoho, and Shiprocket. We can also build custom integrations for Enterprise clients.'
        },
        {
          q: 'How long does onboarding take?',
          a: 'Most clients are fully onboarded within 24-48 hours. This includes connecting your accounts, setting up tracking, and configuring your AI agents based on your specific needs.'
        }
      ]
    },
    {
      title: 'AI Agents & Features',
      icon: Settings,
      questions: [
        {
          q: 'What AI agents are included?',
          a: 'All plans include 5 specialized AI agents: Creative Agent (ad creation), Reporting Agent (analytics), Analytics Agent (insights), Diagnostics Agent (issue detection), and Performance Agent (optimization).'
        },
        {
          q: 'How does the AI CMO work?',
          a: 'The AI CMO acts as the central command center, coordinating all agents and managing data flow between your marketing platforms. It makes strategic decisions and ensures optimal performance across all channels.'
        },
        {
          q: 'Can I customize the AI agents?',
          a: 'Yes! Professional and Enterprise plans allow for agent customization. You can set specific parameters, goals, and constraints for each agent based on your business requirements.'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      questions: [
        {
          q: 'Is my data secure?',
          a: 'Absolutely. We\'re GDPR compliant and SOC 2 certified. All data is encrypted in transit and at rest, and we follow industry best practices for data security and privacy.'
        },
        {
          q: 'Who has access to my marketing data?',
          a: 'Only you and your designated team members have access to your data. Our AI agents process data automatically without human intervention. Our support team can only access data with your explicit permission.'
        },
        {
          q: 'Can I export my data?',
          a: 'Yes, you can export all your data at any time in multiple formats. We believe in data portability and will never lock you in.'
        }
      ]
    },
    {
      title: 'Billing & Support',
      icon: Users,
      questions: [
        {
          q: 'How does billing work?',
          a: 'All plans are billed monthly in advance. You can upgrade or downgrade at any time, and changes take effect on your next billing cycle. We offer a 30-day money-back guarantee.'
        },
        {
          q: 'What kind of support do you provide?',
          a: 'We offer email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise clients. Our team is available 24/7 for technical issues.'
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period, and no further charges will be made.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Flable.ai, our AI agents, pricing, and more.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <category.icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  return (
                    <div 
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        className="w-full text-left p-6 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</h3>
                          {openFAQ === globalIndex ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our team is here to help you get the most out of Flable.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Write us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;