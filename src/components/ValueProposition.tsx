import React from 'react';
import { Clock, TrendingUp, Zap, Brain, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Your Time Back',
      description: 'Stop drowning in spreadsheets and campaign tweaks. Let your AI CMO handle the grunt work while you focus on the big picture.',
      stat: '85% time saved',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: TrendingUp,
      title: 'ROI That Actually Rocks',
      description: 'Watch your returns soar as our AI finds hidden opportunities and optimizes every dollar like a marketing genius.',
      stat: '+35% ROI boost',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      icon: Zap,
      title: 'Always-On Marketing',
      description: 'While you sleep, your AI CMO is working. 24/7 optimization means your campaigns never miss a beat.',
      stat: '24/7 optimization',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      icon: Brain,
      title: 'Marketing Superpowers',
      description: 'Connect all your channels into one powerful brain. See the full picture and make decisions that actually work.',
      stat: '5+ channels unified',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/30 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  <span className="brand-text">
                    Why Marketers Love Us
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Because we're not just another AI tool—we're your <span className="font-bold brand-text">marketing soulmate</span>. We get you, we get your challenges, and we make marketing fun again.
                </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} variant="zoom">
              <div 
                className={`relative group glass-card hover-float-glow rounded-2xl p-8 transition-all duration-300 cursor-pointer ${benefit.color}`}
              >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-2xl opacity-50"></div>
              
              <div className={`relative w-16 h-16 rounded-2xl ${benefit.color.replace('border-', 'bg-').replace('text-', 'text-').replace('bg-', 'bg-')} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>
                
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${benefit.color.replace('border-', 'bg-').replace('50', '100')}`}>
                  {benefit.stat}
                </div>
              </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className={`h-5 w-5 ${benefit.color.split(' ')[1]}`} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal variant="zoom">
          <div className="mt-24 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
                <div className="relative z-10">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Ready to Transform Your Marketing?
                  </h3>
                  <p className="text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of businesses already using AI to boost their marketing performance and scale their growth.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Book Your Demo Now
                    </button>
                    <button className="text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                      View Pricing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueProposition;