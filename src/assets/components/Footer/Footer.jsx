import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* First Part - Lorem Text */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Second Part - Website Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-orange-100 transition-colors duration-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-100 transition-colors duration-300 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-100 transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-100 transition-colors duration-300 text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-orange-100 transition-colors duration-300 text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Third Part - Social Icons */}
          <div>
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-100 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-100 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-100 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-100 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-100 transition-colors duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
            <p className="mt-3 text-sm">
              Connect with us on social media for updates and news.
            </p>
          </div>

          {/* Fourth Part - Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Address</h3>
            <address className="not-italic">
              <p className="mb-2"> Location:</p>
              <p className="text-sm leading-relaxed">
                House #123, Road #45<br />
                Dhanmondi, Dhaka-1209<br />
                Dhaka, Bangladesh
              </p>
              <p className="mt-3 text-sm">
                 info@example.com<br />
                 +880 1234-567890
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Copyright Section (Optional) */}
        <div className="border-t border-orange-300 mt-8 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Saif Husain Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;