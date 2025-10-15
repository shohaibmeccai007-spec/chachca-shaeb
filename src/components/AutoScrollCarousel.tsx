import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const AutoScrollCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: "Edureka",
      logo: "/assets/clients/edureka.png",
      industry: "Ed-Tech",
    },
    { name: "MYOP", logo: "/assets/clients/myop.png", industry: "Perfume & Fragrance" },
    {
      name: "Pokonut",
      logo: "/assets/clients/pokonut.png",
      industry: "Health & Wellness",
    },
    {
      name: "Assembly Travel",
      logo: "/assets/clients/assembly.png",
      industry: "Travel Accessories",
    },
    { name: "Snitch", logo: "/assets/clients/snitch.png", industry: "Fashion" },
    {
      name: "Gran N Grace",
      logo: "/assets/clients/grainengrace.png",
      industry: "Food",
    },
    {
      name: "Kylee Fashion",
      logo: "/assets/clients/kylee.png",
      industry: "Fashion",
    },
    {
      name: "Guugly Wuugly",
      logo: "/assets/clients/guuglywuugly.png",
      industry: "Entertainment",
    },
  ];

  // Create multiple sets for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  useEffect(() => {
    if (isHovered || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Slightly faster scroll speed

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= clients.length * 280) {
        // Updated card width to 280px
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-cyan-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
             Growing Customer Brands
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Trusted by many D2C brands
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Join the growing community of D2C companies that have
              transformed their marketing operations with Flable AI
            </p>
          </div>
        </ScrollReveal>

        {/* Smooth Auto-Scrolling Carousel */}
        <ScrollReveal variant="zoom">
          <div
            className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm border border-white/30 py-8 px-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Infinite Scroll Container */}
            <div
              ref={scrollRef}
              className="flex items-center gap-8"
              style={{
                width: `${duplicatedClients.length * 280}px`, // Updated to 280px per client card
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: "280px" }}
                >
                  <div className="group cursor-pointer relative mx-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-white/40 hover:border-gradient-to-r hover:border-cyan-200/60 relative overflow-hidden">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-50/50 via-pink-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Hover glow effect */}
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-pink-400/20 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

                      <div className="relative z-10 text-center flex flex-col items-center justify-center min-h-[140px]">
                        {/* Logo container with better sizing */}
                        <div className="w-32 h-20 mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative">
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="object-contain transition-all duration-300 group-hover:brightness-110"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              const target = e.currentTarget;
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="text-gray-600 font-bold text-lg">${client.name
                                  .substring(0, 2)
                                  .toUpperCase()}</div>`;
                              }
                            }}
                          />
                        </div>

                        {/* Company name with better typography */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
                          {client.name}
                        </h3>

                        {/* Industry tag */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-cyan-100 group-hover:to-violet-100 transition-all duration-300">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {client.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Enhanced Stats Section */}
<ScrollReveal>
  <div className="mt-20 relative">
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 p-8 md:p-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          // {
          //   number: "50+",
          //   label: "Happy Clients",
          //   color: "from-cyan-500 to-blue-500",
          // },
          {
            number: "10×",
            label: "Faster Campaign Launches",
            color: "from-violet-500 to-purple-500",
          },
          {
            number: "80%",
            label: "Reduced Analyst Workforce",
            color: "from-pink-500 to-rose-500",
          },
          {
            number: "+200%",
            label: "ROAS Improved",
            color: "from-amber-500 to-orange-500",
          },
          {
            number: "100%",
            label: "Satisfaction or Money-Back Guarantee",
            color: "from-emerald-500 to-green-500",
          },
        ].map((stat, index) => (
          <div key={index} className="text-center group cursor-default">
            <div className="relative mb-4">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-100 group-hover:border-gray-200 transition-all duration-300 group-hover:scale-105">
                <div
                  className={`text-4xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
              </div>
            </div>
            <div className="text-gray-700 font-semibold text-md group-hover:text-gray-900 transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</ScrollReveal>

      </div>
    </section>
  );
};

export default AutoScrollCarousel;
