import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Flable.ai</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your AI-powered digital marketing team that runs and optimizes campaigns 24/7, 
              boosting ROI while cutting wasted ad spend.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">contact@flable.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/book-demo" className="text-gray-300 hover:text-blue-400 transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><span className="text-gray-300">GDPR Compliant</span></li>
              <li><span className="text-gray-300">SOC 2 Certified</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Flable.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;