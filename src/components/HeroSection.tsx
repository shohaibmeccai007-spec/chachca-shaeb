import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-blue-600 font-semibold text-lg tracking-wide">AI-POWERED MARKETING TEAM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Flable is an AI-powered digital marketing team that runs and optimizes campaigns 24/7.
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            <span className="text-green-600">Boost ROI</span> while <span className="text-red-500">cutting wasted ad spend</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link to="/book-demo" className="btn-primary-xl">Book a Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
