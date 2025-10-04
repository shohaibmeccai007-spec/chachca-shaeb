import React from 'react';
import Seo from '../components/Seo';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const features = [
    'AI CMO with 5 specialized agents',
    '24/7 monitoring and optimization',
    'Cross-channel integrations',
    'Custom dashboards and reporting',
  ];

  return (
    <>
      <Seo title="Pricing — Flable.ai" description="Custom pricing for AI CMO, agents, and integrations." />
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
          <p className="text-lg text-gray-600">Custom plans tailored to your growth goals</p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex items-baseline justify-center gap-3 mb-6">
            <span className="text-5xl font-extrabold text-gray-900">From $2,499</span>
            <span className="text-gray-500">/month</span>
          </div>
          <p className="text-center text-gray-600 mb-8">Includes full AI CMO hub, agents, and core integrations</p>
          <ul className="space-y-3 max-w-md mx-auto">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-gray-700">
                <Check className="h-5 w-5 text-green-600" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <a href="/book-demo" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition">Book a Demo</a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default PricingPage;
