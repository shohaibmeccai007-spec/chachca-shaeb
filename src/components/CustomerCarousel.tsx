import React from 'react';

const customers = [
  { name: 'Pokonut', logo: 'https://via.placeholder.com/120?text=Pokonut' },
  { name: 'Edureka', logo: 'https://via.placeholder.com/120?text=Edureka' },
  { name: 'iPlanet', logo: 'https://via.placeholder.com/120?text=iPlanet' },
  { name: 'Kylee Fashions', logo: 'https://via.placeholder.com/120?text=Kylee' },
  { name: 'MYOP', logo: 'https://via.placeholder.com/120?text=MYOP' },
];

const CustomerCarousel = () => {
  // Duplicate logos to create a seamless looping marquee
  const looped = [...customers, ...customers];

  return (
    <section className="py-12">
      {/* Floating widget container */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="marquee-widget bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-4">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">Our Customers</h3>

            {/* Inline styles with keyframes for marquee animation */}
            <style>{`
              .marquee-track { display:flex; gap:2rem; align-items:center; }
              .marquee-viewport { overflow:hidden; }
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                animation: marquee 18s linear infinite;
                will-change: transform;
              }
              .marquee-widget:hover .marquee-track { animation-play-state: paused; }
            `}</style>

            <div className="marquee-viewport">
              <div className="marquee-track">
                {looped.map((c, i) => (
                  <div
                    key={`${c.name}-${i}`}
                    className="flex flex-col items-center justify-center min-w-[120px]"
                  >
                    <img src={c.logo} alt={c.name} className="h-16 w-16 object-contain rounded-md shadow-sm" />
                    <span className="text-sm text-gray-700 mt-2">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge to make it look like a widget (subtle) */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md text-xs text-gray-600">
            Trusted by fast-growing D2C brands
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
