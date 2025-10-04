import React from 'react';
import { Clock, TrendingUp, Zap, Brain } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const benefits = [
    { icon: Clock, title: 'Save Time', description: 'Automate campaign management, creative testing, and optimization so you can focus on strategy and growth.', stat: '85% time saved', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { icon: TrendingUp, title: 'Optimize ROI', description: 'AI-driven insights and real-time adjustments maximize returns on every marketing dollar you invest.', stat: '+35% ROI boost', color: 'bg-green-50 text-green-600 border-green-200' },
    { icon: Zap, title: '24/7 Execution', description: 'Your campaigns never sleep. Continuous monitoring and optimization around the clock, every day.', stat: '24/7 optimization', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { icon: Brain, title: 'Cross-Channel Intelligence', description: 'Unified data from ads, analytics, and Shopify for smarter, more effective marketing decisions.', stat: '5+ channels unified', color: 'bg-purple-50 text-purple-600 border-purple-200' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Flable.ai?</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your marketing with AI that delivers <span className="font-bold text-blue-600">measurable results</span> while you focus on what matters most
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`relative group bg-white border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${benefit.color}`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-2xl opacity-50"></div>
              <div className={`relative w-16 h-16 rounded-2xl ${benefit.color.replace('border-', 'bg-')} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${benefit.color.replace('border-', 'bg-').replace('50', '100')}`}>{benefit.stat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
