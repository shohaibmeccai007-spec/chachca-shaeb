import React from 'react';
import { CheckCircle, ArrowRight, Clock, Users, Zap, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnboardingFlow = () => {
  const steps = [
    {
      icon: Users,
      title: 'Book Demo',
      description: 'Schedule a personalized demo to see Flable.ai in action with your specific use case.',
      duration: '30 minutes',
      color: 'bg-blue-100 text-blue-600',
      details: ['Personalized demonstration', 'ROI analysis', 'Implementation roadmap', 'Q&A session']
    },
    {
      icon: Zap,
      title: 'Onboarding',
      description: 'Our team guides you through setup, connects your accounts, and configures AI agents.',
      duration: '1-2 hours',
      color: 'bg-green-100 text-green-600',
      details: ['Account integration', 'AI agent configuration', 'Custom dashboard setup', 'Team training']
    },
    {
      icon: Target,
      title: 'Launch Campaign',
      description: 'AI agents begin optimizing your campaigns with your approval and oversight.',
      duration: '24 hours',
      color: 'bg-purple-100 text-purple-600',
      details: ['Campaign activation', 'Initial optimization', 'Performance monitoring', 'Real-time adjustments']
    },
    {
      icon: CheckCircle,
      title: 'Optimize & Scale',
      description: 'Continuous improvement and scaling based on performance data and insights.',
      duration: 'Ongoing',
      color: 'bg-orange-100 text-orange-600',
      details: ['Performance analysis', 'Strategy refinement', 'Budget optimization', 'Scale successful campaigns']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Onboarding Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Flable.ai in just a few simple steps. Our team guides you through every step of the process.
          </p>
        </div>

        {/* Explainer Video Placeholder */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-700 transition-colors cursor-pointer">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Watch How It Works</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  See Flable.ai in action with our comprehensive demo video. Learn how our AI agents work together to optimize your marketing campaigns.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200 shadow-lg">
                  Play Demo Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 to-orange-200 rounded-full"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Step Details */}
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Spacer */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a demo today and see how easy it is to transform your marketing with AI
            </p>
            
            <Link
              to="/book-demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Book Your Demo Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingFlow;