import React from 'react';
import { Shield, Lock, Eye, CheckCircle, Globe, FileText, Users, Award } from 'lucide-react';

const TrustSection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations and privacy standards.',
      details: ['Data minimization', 'Right to be forgotten', 'Consent management', 'Privacy by design']
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to protect your sensitive data.',
      details: ['256-bit SSL encryption', 'SOC 2 Type II certified', 'Regular security audits', 'Secure data centers']
    },
    {
      icon: Eye,
      title: 'Transparent Operations',
      description: 'Complete visibility into AI decisions and full control over your campaigns.',
      details: ['Real-time decision logs', 'Audit trails', 'Performance transparency', 'Override capabilities']
    }
  ];

  const complianceItems = [
    { name: 'GDPR', status: 'Compliant', icon: Globe },
    { name: 'SOC 2', status: 'Certified', icon: Shield },
    { name: 'ISO 27001', status: 'Certified', icon: Award },
    { name: 'CCPA', status: 'Compliant', icon: FileText }
  ];

  const trustMetrics = [
    { icon: Users, value: '500+', label: 'Businesses Trust Us', color: 'text-blue-600' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee', color: 'text-green-600' },
    { icon: Lock, value: '256-bit', label: 'SSL Encryption', color: 'text-purple-600' },
    { icon: Award, value: '24/7', label: 'Security Monitoring', color: 'text-orange-600' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Security & Privacy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security and privacy are our top priorities. We maintain the highest standards of protection and compliance.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Compliance & Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h4>
                <div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Businesses Trust Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <metric.icon className={`h-12 w-12 ${metric.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Handling */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Safe Data Handling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">What We Protect</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Campaign performance data</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customer information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Financial data</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Marketing strategies</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Never sell your data</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regular security audits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Transparent data practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Immediate breach notification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <Shield className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Questions About Security?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our security team is available to answer any questions about our data protection practices and compliance standards.
            </p>
            
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200 shadow-lg">
              Contact Security Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;