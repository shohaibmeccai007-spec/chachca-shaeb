import React from "react";
import { Link } from "react-router-dom";
import { Bot, Mail, Phone, MapPin } from "lucide-react";
import { PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group mb-5">
              <img
                src="/assets/logo.PNG"
                alt="Flable.ai"
                className="h-10 w-auto rounded-md shadow-sm"
              />
              <span className="text-2xl font-bold brand-text">Flable.ai</span>
            </Link>
            <p className="text-gray-900 mb-6 max-w-md">
              Your AI CMO for profitability
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">sales@flable.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">+49 1514 5521776</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">
                  Munich, Germany <br /> Bangalore, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/book-demo"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-refund-policy"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Cancellation & Refund Policy{" "}
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="/data-deletion"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Data Deletion Guidelines
                </Link>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-900">
            © 2024 Flable.ai. All rights reserved.
          </p>

          <div className="sociallinks space-x-6 flex items-center justify-center">
            <Link
              to="https://www.linkedin.com/company/flable"
              className="inline-flex items-center justify-center w-10 h-10 bg-gr2 text-bulg rounded-lg"
              target="_blank"
            >
              <PiLinkedinLogo size={20} />
            </Link>
            <Link
              to="https://x.com/Flableai"
              className="inline-flex items-center justify-center w-10 h-10 bg-gr2 text-bulg rounded-lg"
              target="_blank"
            >
              <RiTwitterXLine size={20} />
            </Link>
            <Link
              to="https://www.instagram.com/flable_official"
              className="inline-flex items-center justify-center w-10 h-10 bg-gr2 text-bulg rounded-lg"
              target="_blank"
            >
              <PiInstagramLogo size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
