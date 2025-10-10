import React from 'react';
import { Quote, TrendingUp, Users, DollarSign } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ResultsSection = () => {
  const results = [
    {
      metric: '+35%',
      description: 'Conversions in 30 days',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      metric: '+250%',
      description: 'ROAS improvement',
      icon: DollarSign,
      color: 'text-blue-600'
    },
    {
      metric: '60%',
      description: 'Reduction in ad waste',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const testimonials = [
    {
      text: "Flable's AI CMO has revolutionized our marketing operations. We've seen a 40% increase in ROAS and 60% reduction in manual work. The platform's intelligence is unmatched.",
      author: "Alex Kumar",
      role: "Head of Growth",
      company: "MYOP",
      avatar: "AK"
    },
    {
      text: "As an education platform, we needed sophisticated marketing automation. Flable delivered beyond expectations with their AI-driven approach, increasing our student acquisition by 45%.",
      author: "Priya Sharma",
      role: "Marketing Director",
      company: "Edureka",
      avatar: "PS"
    }
  ];

  const clientLogos = [
    "MYOP", "Edureka"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Stats */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              See how Flable.ai has helped businesses like yours achieve remarkable growth
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {results.map((result, index) => (
                <ScrollReveal key={index} variant="zoom">
                  <div className="glass-card hover-float-glow rounded-2xl p-8 cursor-hover">
                    <result.icon className={`h-12 w-12 ${result.color} mx-auto mb-4`} />
                    <div className={`text-4xl font-bold ${result.color} mb-2`}>
                      {result.metric}
                    </div>
                    <p className="text-gray-600 font-medium">{result.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} variant="zoom">
                  <div className="glass-card hover-float-glow rounded-2xl p-8 relative cursor-hover">
                    <Quote className="h-8 w-8 text-indigo-300 mb-4" />
                    <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                        <div className="text-indigo-600 font-semibold">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Client Logos */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {clientLogos.map((logo, index) => (
                <ScrollReveal key={logo} variant="zoom">
                  <div className="glass-card px-8 py-4 rounded-2xl hover-float-glow cursor-hover">
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {logo}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;