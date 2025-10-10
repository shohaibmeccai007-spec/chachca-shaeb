import React from 'react';

const TrustSection: React.FC = () => {
  const clients = ['MYOP', 'POKONUT', 'EDUREKA', 'IPLANET', 'Assembly Travel', 'Boldfit'];

  // Duplicate the list to create a seamless infinite loop
  const loopClients = [...clients, ...clients];

  return (
    <section style={{ background: '#FFFFFF' }} className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold mb-6" style={{ color: '#2B2F3A', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
          Trusted by leading organizations
        </h3>

        <div className="relative overflow-hidden">
          <div className="carousel-track" aria-hidden>
            {loopClients.map((c, idx) => (
              <div className="carousel-item" key={`${c}-${idx}`}>
                <div className="logo-node" aria-label={c}>
                  <span className="logo-text">{c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm" style={{ color: '#4B5563', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
          Organizations across travel, education, fitness, and enterprise trust our platform.
        </p>
      </div>

      <style>{`
        .carousel-track {
          display: flex;
          gap: 32px;
          align-items: center;
          width: calc(100% + 100px);
          padding: 16px 0;
          animation: scroll-left 24s linear infinite;
        }

        .carousel-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-node {
          width: 160px;
          height: 64px;
          background: #FAF7FF; /* very light purple hint */
          border: 1px solid rgba(102, 51, 153, 0.08);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .logo-text {
          color: #4338CA;
          font-family: 'Inter, Helvetica Neue, Arial, sans-serif';
          font-weight: 600;
          letter-spacing: 0.02em;
          font-size: 16px;
        }

        .logo-node:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(67, 56, 202, 0.15);
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Make the animation pause on hover for better usability */
        .carousel-track:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .carousel-track {
            gap: 20px;
            animation-duration: 20s;
          }
          .logo-node { width: 120px; height: 56px; }
          .logo-text { font-size: 14px; }
        }

        @media (max-width: 420px) {
          .logo-node { width: 100px; height: 48px; }
          .logo-text { font-size: 13px; }
          .carousel-track { animation-duration: 18s; }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;