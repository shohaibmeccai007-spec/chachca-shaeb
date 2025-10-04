import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Keeping brand identity: use image logo if available in /public, otherwise text fallback
const BrandLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img src="/flable-logo.svg" alt="Flable.ai" className="h-8 w-auto" />
      <span className="sr-only">Flable.ai</span>
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <BrandLogo />

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/book-demo" className="btn-primary">Book a Demo</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book-demo"
                className="block btn-primary mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
