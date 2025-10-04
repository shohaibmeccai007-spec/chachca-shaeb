import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: 'How does onboarding work?', a: 'We connect your ad, analytics, and commerce systems, configure agents, and launch within days.' },
    { q: 'What integrations do you support?', a: 'Meta Ads, Google Ads, Shopify, HubSpot, Zoho, Shiprocket and more.' },
    { q: 'How is data handled?', a: 'We follow GDPR and industry best practices. Your data is encrypted in transit and at rest.' },
    { q: 'Do I keep oversight?', a: 'Yes. You approve strategy and controls. Automation handles execution and reporting.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">FAQ</h1>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
              <div className="text-gray-700">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
