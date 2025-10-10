import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const AutoScrollCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Create multiple sets for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  useEffect(() => {
    if (isHovered || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= clients.length * 200) { // 200px per client card
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered, clients.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="brand-text">Trusted by Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join the growing community of forward-thinking companies transforming their marketing with AI
            </p>
          </div>
        </ScrollReveal>

        {/* Smooth Auto-Scrolling Carousel */}
        <ScrollReveal variant="zoom">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Infinite Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex"
              style={{
                width: `${duplicatedClients.length * 200}px` // 200px per client card
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: '200px' }}
                >
                  <div className="group cursor-hover relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 hover:border-pink-200/50 relative overflow-hidden h-32">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      <div className="relative z-10 text-center h-full flex flex-col justify-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                          <img 
                            src={client.logo} 
                            alt={client.name}
                            className="max-w-12 max-h-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <div className="hidden text-gray-500 font-bold text-sm">
                            {client.name}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                          {client.name}
                        </h3>
                        <p className="text-xs text-gray-600 group-hover:text-violet-600 transition-colors duration-300">
                          {client.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Companies' },
              { number: '+290%', label: 'Avg ROAS' },
              { number: '24/7', label: 'AI Support' },
              { number: '99%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold brand-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AutoScrollCarousel;
