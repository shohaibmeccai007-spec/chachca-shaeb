import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const clients = [
    { name: 'Edureka', logo: '/assets/clients/edureka.png', industry: 'Education' },
    { name: 'MYOP', logo: '/assets/clients/myop.png', industry: 'E-commerce' },
    { name: 'Pokonut', logo: '/assets/clients/pokonut.png', industry: 'Health & Wellness' },
    { name: 'Assembly Travel', logo: '/assets/clients/assembly-travel.png', industry: 'Travel' },
    { name: 'Snitch', logo: '/assets/clients/snitch.png', industry: 'Fashion' },
    { name: 'Gran N Grace', logo: '/assets/clients/gran-n-grace.png', industry: 'Beauty' },
    { name: 'Kylee Fashion', logo: '/assets/clients/kylee-fashion.png', industry: 'Fashion' },
    { name: 'Guugly Wuugly', logo: '/assets/clients/guugly-wuugly.png', industry: 'Entertainment' }
  ];

  const testimonials = [
    {
      text: "Flable AI transformed our marketing completely. We saw a 340% increase in ROAS within 3 months, and our team can finally focus on strategy instead of daily optimizations.",
      author: "Alex Kumar",
      role: "Head of Growth",
      company: "MYOP",
      avatar: "AK"
    },
    {
      text: "Our student acquisition costs dropped by 45% while increasing conversions by 120%. Flable AI's intelligent automation has been a game-changer for our education platform.",
      author: "Priya Sharma",
      role: "Marketing Director",
      company: "Edureka",
      avatar: "PS"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-cyan-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="brand-text">Trusted by Industry Leaders</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join the growing community of forward-thinking companies that have transformed their marketing with Flable AI
            </p>
          </div>
        </ScrollReveal>

        {/* Client Carousel */}
        <ScrollReveal variant="zoom">
          <div className="relative">
            <div 
              className="glass-card rounded-3xl p-12 overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {clients.map((client, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="flex items-center justify-center h-32">
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-hover">
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="max-w-16 max-h-16 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <div className="hidden text-gray-500 font-bold text-lg">
                              {client.name}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{client.name}</h3>
                          <p className="text-sm text-gray-600">{client.industry}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 cursor-hover"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 cursor-hover"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-pink-500 to-cyan-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
              <span className="brand-text">What Our Clients Say</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} variant="zoom">
                  <div className="glass-card rounded-2xl p-8 hover-float-glow cursor-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-900">{testimonial.author}</div>
                            <div className="text-gray-600">{testimonial.role}</div>
                            <div className="text-pink-600 font-semibold">{testimonial.company}</div>
                          </div>
                          <div className="text-4xl text-pink-200">"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="glass-card rounded-3xl p-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="brand-text">Ready to Join Them?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Start your transformation journey with Flable AI and become our next success story
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

export default ClientCarousel;
