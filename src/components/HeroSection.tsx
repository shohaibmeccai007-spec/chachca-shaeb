import ScrollReveal from './ScrollReveal';

const HeroSection = () => (
  <section className="py-32 px-4 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent"></div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <ScrollReveal variant="slow">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">AI Marketing Platform</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI CMO
            </span>
            <br />
            <span className="text-gray-900">for D2C Brands</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            The world's first AI-powered Chief Marketing Officer that orchestrates your entire marketing ecosystem with precision and intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-neo cursor-hover text-lg px-8 py-4">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-2xl font-semibold text-indigo-600 border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 cursor-hover text-lg">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal variant="zoom">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/assets/dashboard1.png" 
                    alt="AI CMO Dashboard" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/assets/dashboard2.png" 
                    alt="Analytics Dashboard" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;