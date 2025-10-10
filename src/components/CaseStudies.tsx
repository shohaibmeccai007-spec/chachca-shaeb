import React from 'react';
import { TrendingUp, Target, Users, DollarSign, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'MYOP',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high ad spend waste',
      solution: 'AI-powered campaign optimization and customer journey mapping',
      results: {
        roas: '+340%',
        conversions: '+85%',
        costReduction: '-60%',
        timeframe: '3 months'
      },
      testimonial: 'Flable AI transformed our marketing completely. We saw a 340% increase in ROAS within 3 months.',
      author: 'Alex Kumar',
      role: 'Head of Growth',
      image: '/assets/case-study-1.jpg'
    },
    {
      id: 2,
      company: 'Edureka',
      industry: 'Education',
      challenge: 'Student acquisition costs were unsustainable',
      solution: 'AI-driven lead scoring and personalized content optimization',
      results: {
        roas: '+250%',
        conversions: '+120%',
        costReduction: '-45%',
        timeframe: '4 months'
      },
      testimonial: 'Our student acquisition costs dropped by 45% while increasing conversions by 120%.',
      author: 'Priya Sharma',
      role: 'Marketing Director',
      image: '/assets/case-study-2.jpg'
    },
    {
      id: 3,
      company: 'Pokonut',
      industry: 'Health & Wellness',
      challenge: 'Inconsistent brand awareness and low engagement',
      solution: 'Cross-channel AI orchestration and dynamic creative optimization',
      results: {
        roas: '+180%',
        conversions: '+95%',
        costReduction: '-35%',
        timeframe: '2 months'
      },
      testimonial: 'Flable AI helped us build consistent brand presence across all channels.',
      author: 'Sarah Chen',
      role: 'CMO',
      image: '/assets/case-study-3.jpg'
    }
  ];

  const metrics = [
    { icon: TrendingUp, label: 'Average ROAS Increase', value: '+290%', color: 'text-green-500' },
    { icon: Target, label: 'Conversion Rate Boost', value: '+100%', color: 'text-blue-500' },
    { icon: DollarSign, label: 'Cost Reduction', value: '-47%', color: 'text-purple-500' },
    { icon: Users, label: 'Clients Served', value: '50+', color: 'text-pink-500' }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="brand-text">Proven Results</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real success stories from companies that transformed their marketing with Flable AI
            </p>
          </div>
        </ScrollReveal>

        {/* Metrics Overview */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="glass-card rounded-2xl p-6 hover-float-glow cursor-hover">
                  <metric.icon className={`h-12 w-12 ${metric.color} mx-auto mb-4`} />
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} variant="zoom">
              <div className="glass-card rounded-3xl overflow-hidden hover-float-glow cursor-hover">
                <div className="relative h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                    <p className="text-white/90">{study.industry}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">{study.results.roas}</div>
                        <div className="text-xs text-gray-600">ROAS</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{study.results.conversions}</div>
                        <div className="text-xs text-gray-600">Conversions</div>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-700 italic text-sm leading-relaxed">"{study.testimonial}"</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {study.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{study.author}</div>
                        <div className="text-gray-600 text-xs">{study.role}</div>
                      </div>
                    </div>
                  </blockquote>
                  
                  <button className="w-full btn-neo cursor-hover">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="glass-card rounded-3xl p-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="brand-text">Ready to Join Our Success Stories?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how Flable AI can transform your marketing results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-neo cursor-hover text-lg px-8 py-4">
                  Start Your Success Story
                </button>
                <button className="px-8 py-4 rounded-2xl font-semibold text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-hover text-lg">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaseStudies;
