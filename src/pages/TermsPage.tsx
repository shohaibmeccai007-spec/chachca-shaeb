import React from 'react';
import Seo from '../components/Seo';

const TermsPage: React.FC = () => {
  return (
    <>
      <Seo title="Terms of Service — Flable.ai" description="Read Flable.ai terms of service." />
      <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-4">By using Flable.ai, you agree to our terms and policies. Services are provided as-is with best-effort uptime, and specific SLAs may be part of custom agreements.</p>
        <p className="text-gray-700">For questions, contact legal@flable.ai.</p>
      </div>
      </section>
    </>
  );
};

export default TermsPage;
