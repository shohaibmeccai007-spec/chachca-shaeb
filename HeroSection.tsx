import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Clock, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Zap className="h-7 w-7 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg tracking-wide">AI-POWERED MARKETING TEAM</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Your AI Marketing Team That 
            <span className="text-blue-600 block md:inline"> Never Sleeps</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed max-w-4xl mx-auto">
            Flable is an AI-powered digital marketing team that runs and optimizes campaigns 24/7.
          </p>
          
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            <span className="text-green-600">Boost ROI</span> while <span className="text-red-500">cutting wasted ad spend</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link
              to="/book-demo"
              className="bg-blue-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center space-x-3 min-w-[280px] justify-center border-2 border-blue-600 hover:border-blue-700"
            >
              <span>Book a Demo</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
            
            <div className="text-gray-500 text-base flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>7-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Campaign Optimization</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-green-600 mb-2">+35%</div>
              <div className="text-gray-600 font-medium">ROI Increase</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300">
              <Brain className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600 font-medium">Reduced Ad Waste</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">AI Agents Working</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;