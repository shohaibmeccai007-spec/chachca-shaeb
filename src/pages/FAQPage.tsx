import React from 'react';
import Seo from '../components/Seo';

const faqs = [
  { q: 'How do you handle privacy?', a: 'We are GDPR aligned with strict data governance and encryption.' },
  { q: 'What does onboarding involve?', a: 'Connecting ad accounts, analytics, and store; configuring agents to goals.' },
  { q: 'Which integrations are supported?', a: 'Meta Ads, Google Ads, Shopify, HubSpot, Zoho, Shiprocket.' },
  { q: 'Do I maintain oversight?', a: 'Yes. You approve strategy; agents execute with audit trails and reporting.' },
];

const FAQPage: React.FC = () => {
  return (
    <>
      <Seo title="FAQ — Flable.ai" description="Privacy, onboarding, integrations, and oversight FAQs." />
      <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h1>
          <p className="text-lg text-gray-600">Answers to common questions</p>
        </div>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default FAQPage;
