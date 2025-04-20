import React from 'react';
import { Utensils, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">Food Management</span>
            </div>
            <p className="text-gray-400">
              Rescuing food, reducing waste, and nourishing communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#food-info" className="text-gray-400 hover:text-white transition-colors">Food Information</a></li>
              <li><a href="#health-issues" className="text-gray-400 hover:text-white transition-colors">Health Issues</a></li>
              <li><a href="#exercise" className="text-gray-400 hover:text-white transition-colors">Exercise</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-white transition-colors">Donate Food</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nutrition Facts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Food Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Food Recovery Lane, City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">info@foodmanagement.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Food Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;