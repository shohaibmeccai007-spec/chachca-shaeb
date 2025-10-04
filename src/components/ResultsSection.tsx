import React from 'react';
import { Quote, TrendingUp, Users, DollarSign } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const results = [
    { metric: '+35%', description: 'Conversions in 30 days', icon: TrendingUp, color: 'text-green-600' },
    { metric: '+250%', description: 'ROAS improvement', icon: DollarSign, color: 'text-blue-600' },
    { metric: '60%', description: 'Reduction in ad waste', icon: Users, color: 'text-orange-600' },
  ];

  const testimonials = [
    { text: 'Flable transformed our marketing completely. We saw a 35% increase in conversions within the first month, and our team can finally focus on strategy instead of daily optimizations.', author: 'Sarah Chen', role: 'Marketing Director', company: 'TechFlow Solutions', avatar: 'SC' },
    { text: 'The AI CMO approach is brilliant. Having all our marketing channels unified and optimized 24/7 has been a game-changer for our ROI.', author: 'Mike Rodriguez', role: 'Founder & CEO', company: 'GrowthLab', avatar: 'MR' },
  ];

  const clientLogos = ['TechFlow', 'GrowthLab', 'DataVibe', 'CloudSync', 'NextGen', 'InnovateCo'];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">See how Flable.ai has helped businesses like yours achieve remarkable growth</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <result.icon className={`h-12 w-12 ${result.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${result.color} mb-2`}>{result.metric}</div>
                <p className="text-gray-600 font-medium">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg relative">
                <Quote className="h-8 w-8 text-blue-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Growing Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-xl font-bold text-gray-700">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
