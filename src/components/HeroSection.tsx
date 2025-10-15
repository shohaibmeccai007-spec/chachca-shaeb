import { Link } from "react-router-dom";
import RotatingImagesSection from "./RotatingImagesSection";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="py-20 px-4 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-white to-cyan-50"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-100/20 via-transparent to-transparent z-5"></div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <ScrollReveal variant="slow">
        <div className="flex flex-col items-center justify-center mb-8 z-50">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-fuchsia-200 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              AI CMO Active
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 drop-shadow-lg text-center">AI CMO for D2C Brands</h1>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-6 font-light text-center">
            A profit-first AI CMO that Unifies ad, Commerce, CRM, Finance, and Logistics data to uncover growth opportunities and boost profitability across Meta and Google Ads.
          </p>
          {/* Hire CTA Button */}
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center px-10 py-5 btn-neo rounded-full text-white font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 mb-8"
          >
            Hire Your AI CMO
            <svg
              className="ml-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 AI CMO</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
              <span>80% faster campaign Launches</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>No Marketing Analyst Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
        {/* Rotating Images Section */}
        <RotatingImagesSection />
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
