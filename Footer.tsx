import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src="/flable-logo.svg" alt="Flable.ai" className="h-8 w-auto" />
              <span className="sr-only">Flable.ai</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your AI-powered digital marketing team that runs and optimizes campaigns 24/7,
              boosting ROI while cutting wasted ad spend.
            </p>
            <div className="space-y-2 text-gray-300">
              <div>contact@flable.ai</div>
              <div>+1 (555) 123-4567</div>
              <div>San Francisco, CA</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/book-demo" className="text-gray-300 hover:text-blue-400 transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">© 2025 Flable.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;