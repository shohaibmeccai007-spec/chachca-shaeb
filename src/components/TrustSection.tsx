import React from 'react';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations and privacy standards.'
    },
    {
      icon: Lock,
      title: 'SOC 2 Certified',
      description: 'Enterprise-grade security with regular third-party audits and certifications.'
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'Complete visibility into all AI decisions and campaign optimizations.'
    },
    {
      icon: CheckCircle,
      title: 'Safe Data Handling',
      description: 'Your data is encrypted, never shared, and remains under your control.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Security & Trust You Can Count On
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security and privacy are our top priorities. We maintain the highest standards of protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Security?</h3>
          <p className="text-gray-300 mb-6">
            Our security team is available to discuss your specific requirements and compliance needs.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Security Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;