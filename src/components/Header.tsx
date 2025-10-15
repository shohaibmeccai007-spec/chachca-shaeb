import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/assets/logo.PNG" alt="Flable.ai" className="h-10 w-auto rounded-md shadow-sm" />
            <span className="text-2xl font-bold brand-text">Flable.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-indigo-600 relative group ${
                  location.pathname === item.href
                    ? 'text-indigo-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              to="/book-demo"
              className="btn-neo cursor-hover"
            >
              Book a Demo
            </Link>
            <div className="flex gap-2">
              <img
            src="/assets/GDPR.png"
            alt="GDP Certified"
            className="h-16 w-auto object-contain"
          />
          <img
            src="/assets/soc22.png"
            alt="SOC2 Compliant"
            className="h-16 w-auto object-contain"
          />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book-demo"
                className="block btn-neo text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Demo
              </Link>
              <div className="flex items-center w-full justify-center gap-2 pt-5">
                <img
                  src="/assets/GDPR.png"
                  alt="GDP Certified"
                  className="h-16 w-auto object-contain"
                />
                <img
                  src="/assets/soc22.png"
                  alt="SOC2 Compliant"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;