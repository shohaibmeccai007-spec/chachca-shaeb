import React from 'react';
import Seo from '../components/Seo';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Seo title="Privacy Policy — Flable.ai" description="Our commitment to GDPR-aligned privacy and data governance." />
      <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">We respect your privacy and are committed to protecting your personal data. We follow GDPR principles and industry best practices for data security.</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Data is encrypted in transit and at rest</li>
          <li>Access is restricted and logged</li>
          <li>We never sell personal data</li>
          <li>Contact us at privacy@flable.ai for requests</li>
        </ul>
      </div>
      </section>
    </>
  );
};

export default PrivacyPage;
