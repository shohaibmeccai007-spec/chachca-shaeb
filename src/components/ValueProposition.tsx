import React from 'react';
import { Clock, TrendingUp, Zap, Brain, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ValueProposition = () => {
const benefits = [
  {
    icon: Brain,
    title: 'Clarity from Chaos',
    description:
      'Bring every campaign, SKU, and spend signal into one profit lens. From ad noise to full-funnel clarity — see where every euro makes or loses money.',
    stat: '90% faster visibility across all channels',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
  },
  {
    icon: Clock,
    title: 'Your Time Back',
    description:
      'Stop drowning in spreadsheets and manual reports. Flable automates data prep and analysis, so you focus on growth decisions — not grunt work.',
    stat: '80% less reporting time',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    icon: Zap,
    title: 'Always-On Intelligence',
    description:
      'Flable continuously diagnoses leaks and surfaces profit opportunities. Get alerts, insights, and recommendations — no dashboard digging required.',
    stat: '24/7 actionable insights and smarter decisions',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
  },
  {
    icon: TrendingUp,
    title: 'ROI That Actually Grows',
    description:
      'Connect every euro of spend to real profit outcomes. Reallocate budgets with precision and watch returns climb.',
    stat: '+35% ROI boost',
    color: 'bg-green-50 text-green-600 border-green-200',
  },
];


  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
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
                 Flable acts as your <span className="font-bold brand-text">AI CMO </span>, bringing clarity, intelligence, and accountability to every marketing dollar.
We get you, we get your challenges — and we make marketing fun again.
                </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} variant="zoom">
              <div 
                className={`relative group glass-card hover-float-glow rounded-2xl p-8 transition-all duration-300 cursor-pointer md:min-h-[520px] ${benefit.color}`}
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

      </div>
    </section>
  );
};

export default ValueProposition;