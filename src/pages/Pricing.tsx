import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pricing</h1>
        <p className="text-gray-600 mb-10">Flexible plans to fit your growth. Contact us for custom pricing.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Best for early teams</p>
            <div className="text-4xl font-extrabold mb-6">$999<span className="text-lg font-semibold">/mo</span></div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>AI CMO hub access</li>
              <li>Core agent automations</li>
              <li>Email support</li>
            </ul>
            <a href="/book-demo" className="btn-primary">Book a Demo</a>
          </div>

          <div className="border-2 border-blue-600 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Growth</h3>
            <p className="text-gray-600 mb-6">Most popular</p>
            <div className="text-4xl font-extrabold mb-6">$2,499<span className="text-lg font-semibold">/mo</span></div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>All Starter features</li>
              <li>Advanced agent suite</li>
              <li>Priority support</li>
            </ul>
            <a href="/book-demo" className="btn-primary">Book a Demo</a>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">Tailored for scale</p>
            <div className="text-4xl font-extrabold mb-6">Custom</div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Bespoke integrations</li>
              <li>Dedicated success manager</li>
              <li>SLAs & compliance</li>
            </ul>
            <a href="/book-demo" className="btn-primary">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
