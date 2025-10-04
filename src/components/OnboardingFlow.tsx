import React from 'react';
import { Calendar, Settings, Rocket, TrendingUp, Play } from 'lucide-react';

const OnboardingFlow: React.FC = () => {
  const steps = [
    { icon: Calendar, title: 'Book Demo', description: 'Schedule a consultation with our team to discuss your marketing goals and challenges.' },
    { icon: Settings, title: 'Onboarding', description: 'We connect your accounts, set up tracking, and configure your AI agents based on your needs.' },
    { icon: Rocket, title: 'Launch Campaign', description: 'Your AI marketing team takes over, launching optimized campaigns across all channels.' },
    { icon: TrendingUp, title: 'Optimize & Scale', description: 'Continuous optimization and scaling as your AI agents learn and improve performance.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started in 4 Simple Steps</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From initial consultation to full optimization, we make it easy to transform your marketing</p>
        </div>

        <div className="relative max-w-4xl m-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-600 hidden md:block"></div>
          <div className="space-y-10 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:hidden mb-4">
                  <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
            <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Watch AI CMO Demo</h3>
            <p className="text-gray-500">See how Flable.ai transforms your marketing in real-time</p>
            <button className="mt-4 btn-primary">Play Demo Video</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingFlow;
