import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: November 15, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 text-blue-600 mr-3" />
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-700 mb-0">
              At Flable.ai, we are committed to protecting your privacy and ensuring the security of your personal and business data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered marketing platform.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="h-8 w-8 text-blue-600 mr-3" />
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Company name and business details</li>
                  <li>Billing and payment information</li>
                  <li>Account preferences and settings</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Advertising campaign performance data</li>
                  <li>Website analytics and user behavior data</li>
                  <li>Customer conversion and engagement metrics</li>
                  <li>Integration data from connected platforms (Google Ads, Meta, Shopify, etc.)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Platform usage patterns and feature interactions</li>
                  <li>Device information and browser details</li>
                  <li>IP addresses and geographical location</li>
                  <li>Support tickets and communication records</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
              How We Use Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Provide AI marketing optimization services</li>
                  <li>Generate insights and recommendations</li>
                  <li>Manage and optimize advertising campaigns</li>
                  <li>Process payments and billing</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Improvement</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Enhance AI model performance</li>
                  <li>Develop new features and capabilities</li>
                  <li>Improve user experience</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Send service updates and notifications</li>
                  <li>Provide customer support</li>
                  <li>Share relevant marketing insights</li>
                  <li>Respond to inquiries and requests</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal & Security</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Comply with legal requirements</li>
                  <li>Detect and prevent fraud</li>
                  <li>Ensure platform security</li>
                  <li>Protect user rights and safety</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="h-8 w-8 text-blue-600 mr-3" />
              Data Security & Protection
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                  <p className="text-gray-700 text-sm">SOC 2 Type II certified with bank-level encryption</p>
                </div>
                <div className="text-center">
                  <Database className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Encryption</h3>
                  <p className="text-gray-700 text-sm">AES-256 encryption in transit and at rest</p>
                </div>
                <div className="text-center">
                  <UserCheck className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h3>
                  <p className="text-gray-700 text-sm">Multi-factor authentication and role-based permissions</p>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">GDPR Compliance & Your Rights</h2>
            
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <p className="text-gray-700 mb-6">
                We are fully compliant with the General Data Protection Regulation (GDPR) and respect your data rights. You have the right to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span className="text-gray-700"><strong>Access</strong> your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span className="text-gray-700"><strong>Rectify</strong> inaccurate data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span className="text-gray-700"><strong>Erase</strong> your data</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span className="text-gray-700"><strong>Restrict</strong> processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                    <span className="text-gray-700"><strong>Port</strong> your data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                    <span className="text-gray-700"><strong>Object</strong> to processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              Contact Us
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@flable.ai</p>
                <p><strong>Address:</strong> 123 AI Street, San Francisco, CA 94102</p>
                <p><strong>Data Protection Officer:</strong> dpo@flable.ai</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;