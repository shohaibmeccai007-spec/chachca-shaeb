import React from 'react';
import { FileText, Scale, AlertCircle, Users, CreditCard, Shield } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: November 15, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              Agreement Overview
            </h2>
            <p className="text-gray-700 mb-0">
              These Terms of Service ("Terms") govern your use of Flable.ai's AI-powered marketing platform and services. 
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              Service Description
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-4">
                Flable.ai provides AI-powered digital marketing automation services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Automated campaign management and optimization</li>
                <li>AI-powered creative generation and testing</li>
                <li>Cross-platform analytics and reporting</li>
                <li>Performance diagnostics and recommendations</li>
                <li>Integration with third-party marketing platforms</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Availability</h3>
                  <p className="text-gray-700">
                    While we strive for 99.9% uptime, our services are provided "as is" and we do not guarantee 
                    uninterrupted availability. Scheduled maintenance will be communicated in advance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Security</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Maintain confidentiality of login credentials</li>
                  <li>Enable two-factor authentication when available</li>
                  <li>Notify us immediately of any security breaches</li>
                  <li>Use strong, unique passwords</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Accuracy</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Provide accurate account information</li>
                  <li>Ensure marketing data is legitimate and compliant</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with applicable advertising regulations</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Attempting to reverse-engineer our AI models</li>
                  <li>Using the service for illegal activities</li>
                  <li>Sharing account access with unauthorized parties</li>
                  <li>Interfering with service functionality</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Guidelines</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Ensure all content is legally compliant</li>
                  <li>Respect platform advertising policies</li>
                  <li>Avoid misleading or deceptive practices</li>
                  <li>Maintain appropriate content standards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Billing and Payment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
              Billing and Payment Terms
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Schedule</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>All plans are billed monthly in advance</li>
                  <li>Payments are automatically charged to your selected payment method</li>
                  <li>Failed payments may result in service suspension after 7 days</li>
                  <li>Enterprise plans may have custom billing arrangements</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Refunds and Cancellations</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>30-day money-back guarantee for new subscriptions</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>Service continues until the end of your current billing period</li>
                  <li>No refunds for partial months or unused services</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Changes</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We reserve the right to modify pricing with 30 days notice</li>
                  <li>Existing subscribers will be grandfathered for their current billing cycle</li>
                  <li>Price increases will not affect pre-paid annual subscriptions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              Limitation of Liability
            </h2>
            
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Legal Notice</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Performance Disclaimers:</strong> While our AI agents are designed to optimize marketing performance, 
                      we do not guarantee specific results, ROI improvements, or campaign outcomes. Marketing success depends on 
                      various factors including market conditions, competition, and campaign quality.
                    </p>
                    <p>
                      <strong>Limitation of Damages:</strong> In no event shall Flable.ai be liable for any indirect, incidental, 
                      special, consequential, or punitive damages, including but not limited to lost profits, revenue, or data.
                    </p>
                    <p>
                      <strong>Maximum Liability:</strong> Our total liability for any claims related to the service shall not 
                      exceed the amount you paid to us in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Rights</h3>
                <p className="text-gray-700 text-sm">
                  Flable.ai retains all rights to our AI models, algorithms, platform technology, and proprietary methodologies. 
                  Users receive a limited license to use our services during their subscription period.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                <p className="text-gray-700 text-sm">
                  You retain ownership of all data, content, and materials you provide to our platform. 
                  We only use your data to provide services and improve our AI models as outlined in our Privacy Policy.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Either party may terminate this agreement at any time:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>By You:</strong> Cancel your subscription through your account dashboard or contact support</li>
                <li><strong>By Us:</strong> We may suspend or terminate accounts for violations of these Terms</li>
                <li><strong>Effect:</strong> Upon termination, access to the service will cease and data may be deleted after 30 days</li>
                <li><strong>Data Export:</strong> You may export your data before termination using our data export tools</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@flable.ai</p>
                <p><strong>Address:</strong> 123 AI Street, San Francisco, CA 94102</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                These Terms are governed by the laws of the State of California, USA.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;