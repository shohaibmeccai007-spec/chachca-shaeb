import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, Star, Quote } from 'lucide-react';

const ResultsSection = () => {
  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'SaaS',
      result: '+35% conversions',
      timeframe: '30 days',
      description: 'Increased conversion rates by 35% while reducing ad spend by 20% through AI-optimized targeting and creative testing.',
      logo: '🚀'
    },
    {
      company: 'E-commerce Plus',
      industry: 'Retail',
      result: '+60% ROAS',
      timeframe: '45 days',
      description: 'Achieved 60% higher return on ad spend through automated bid optimization and cross-channel intelligence.',
      logo: '🛒'
    },
    {
      company: 'ServicePro',
      industry: 'Services',
      result: '+45% leads',
      timeframe: '60 days',
      description: 'Generated 45% more qualified leads with 24/7 campaign optimization and intelligent audience targeting.',
      logo: '💼'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'Flable.ai transformed our marketing overnight. The AI agents work 24/7, and we\'ve seen incredible ROI improvements. It\'s like having a full marketing team that never sleeps.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'E-commerce Plus',
      content: 'The cross-channel intelligence is game-changing. We can finally see the full picture of our customer journey and optimize accordingly. ROI increased by 60% in just 45 days.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Watson',
      role: 'Founder',
      company: 'ServicePro',
      content: 'As a small business, we couldn\'t afford a full marketing team. Flable.ai gives us enterprise-level marketing automation at a fraction of the cost. Highly recommended!',
      rating: 5,
      avatar: '👩‍🚀'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '+35%', label: 'Average ROI Increase', color: 'text-green-600' },
    { icon: Users, value: '500+', label: 'Businesses Transformed', color: 'text-blue-600' },
    { icon: DollarSign, value: '$2M+', label: 'Ad Spend Optimized', color: 'text-purple-600' },
    { icon: Clock, value: '24/7', label: 'Campaign Monitoring', color: 'text-orange-600' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results & Social Proof
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses already seeing incredible results with Flable.ai
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow hover:border-blue-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{study.logo}</div>
                  <h4 className="text-xl font-bold text-gray-900">{study.company}</h4>
                  <p className="text-gray-600">{study.industry}</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{study.result}</div>
                  <div className="text-gray-600">in {study.timeframe}</div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-blue-600 font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Leading Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">Meta Ads</div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">Google Ads</div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">Shopify</div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">HubSpot</div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">Zoho</div>
            <div className="bg-gray-100 rounded-lg px-6 py-3 text-gray-600 font-semibold">Shiprocket</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;