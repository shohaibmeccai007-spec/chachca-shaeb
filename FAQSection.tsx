import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Lock, Users, Zap } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      category: 'Privacy & Security',
      icon: Shield,
      questions: [
        {
          question: 'How do you handle my data privacy?',
          answer: 'We are fully GDPR compliant and use enterprise-grade security. Your data is encrypted in transit and at rest, and we never share your information with third parties without explicit consent.'
        },
        {
          question: 'Is my marketing data safe?',
          answer: 'Yes, we use bank-level encryption and follow industry best practices. All data is stored in secure, SOC 2 compliant data centers with regular security audits.'
        },
        {
          question: 'Can I export my data?',
          answer: 'Absolutely. You can export all your data at any time in standard formats. We believe in data portability and transparency.'
        }
      ]
    },
    {
      category: 'Onboarding & Setup',
      icon: Users,
      questions: [
        {
          question: 'How long does onboarding take?',
          answer: 'Most businesses are up and running within 24-48 hours. Our team provides guided setup, connects your accounts, and ensures everything is optimized before launch.'
        },
        {
          question: 'Do you provide training?',
          answer: 'Yes, we offer comprehensive training sessions, documentation, and ongoing support. Enterprise customers get dedicated training programs tailored to their needs.'
        },
        {
          question: 'What if I need help during setup?',
          answer: 'Our support team is available 24/7 to help with any questions or issues. We also provide video tutorials and step-by-step guides.'
        }
      ]
    },
    {
      category: 'Integrations',
      icon: Zap,
      questions: [
        {
          question: 'Which platforms do you integrate with?',
          answer: 'We integrate with Meta Ads, Google Ads, Shopify, HubSpot, Zoho, Shiprocket, and many more. Custom integrations are available for Enterprise customers.'
        },
        {
          question: 'How do integrations work?',
          answer: 'We use secure API connections to sync data in real-time. You maintain full control over permissions and can revoke access at any time.'
        },
        {
          question: 'Can you integrate with custom tools?',
          answer: 'Yes, Enterprise customers can request custom integrations. Our team works with your technical team to ensure seamless connectivity.'
        }
      ]
    },
    {
      category: 'Oversight & Control',
      icon: Lock,
      questions: [
        {
          question: 'How much control do I have over campaigns?',
          answer: 'You maintain full control. You can set budgets, approve creatives, define target audiences, and override AI decisions at any time.'
        },
        {
          question: 'Can I monitor what the AI is doing?',
          answer: 'Yes, our dashboard provides real-time visibility into all AI actions, decisions, and optimizations. You can see exactly what changes were made and why.'
        },
        {
          question: 'What if I disagree with AI decisions?',
          answer: 'You can override any AI decision instantly. The system learns from your preferences and adjusts future recommendations accordingly.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Flable.ai, from privacy to integrations to oversight
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <category.icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openFAQ === key;
                  
                  return (
                    <div key={questionIndex} className="bg-white rounded-xl overflow-hidden shadow-sm">
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                        {isOpen ? (
                          <ChevronUp className="h-6 w-6 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-slideDown">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200 shadow-lg">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105 duration-200">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;