import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const RotatingImagesSection = () => {
  const images = [
    // "/assets/dashboard.png",
    "/assets/dash.png",
    "/assets/ads-automation.png",
    "/assets/chat.png",
    "/assets/alert.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-100/10 via-transparent to-cyan-100/10"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-fuchsia-200 rounded-full px-6 py-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"></div>
          <span className="text-sm font-medium text-gray-700">
            Platform Overview
          </span>
        </div>
        {/* <ScrollReveal>
          <div className="text-center mb-16">
        
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500to-cyan-400 bg-clip-text text-transparent">
                See Flable AI in Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our powerful AI-driven marketing platform through these
              key features
            </p>
          </div>
        </ScrollReveal> */}

        {/* Image Carousel */}
        <ScrollReveal variant="zoom">
          <div className="flex flex-col items-center">
            {/* Main Image Container */}
            <div className="relative mb-8">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[450px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 rounded-3xl blur-xl"></div>
                <div className="relative z-10 w-full h-full bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <img
                    src={images[currentIndex]}
                    alt={`Platform feature ${currentIndex + 1}`}
                    className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="flex items-center gap-3 mb-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Feature Labels */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
              {[
                {
                  title: "Smart Dashboard",
                  description: "AI-powered analytics and insights",
                  isActive: currentIndex === 0,
                  gradient: "from-fuchsia-500 to-violet-500",
                },
                {
                  title: "Ads Automation",
                  description: "Autonomous campaign optimization",
                  isActive: currentIndex === 1,
                  gradient: "from-violet-500 to-cyan-400",
                },
                {
                  title: "AI Agent",
                  description: "Your intelligent marketing assistant",
                  isActive: currentIndex === 2,
                  gradient: "from-cyan-400 to-fuchsia-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    feature.isActive
                      ? "bg-white shadow-lg scale-105 border-2 border-gray-200"
                      : "bg-white/60 hover:bg-white/80 border border-gray-100"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                      feature.gradient
                    } mx-auto mb-4 flex items-center justify-center ${
                      feature.isActive ? "shadow-lg" : ""
                    }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h3
                    className={`font-bold text-lg mb-2 ${
                      feature.isActive
                        ? `bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`
                        : "text-gray-700"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RotatingImagesSection;
