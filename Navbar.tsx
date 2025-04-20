import React, { useState, useEffect } from 'react';
import { Utensils, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Food Info', href: '#food-info' },
  { name: 'Health Issues', href: '#health-issues' },
  { name: 'Exercise', href: '#exercise' },
  { name: 'Donate Food', href: '#donate' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Utensils className={`h-8 w-8 ${scrolled ? 'text-green-600' : 'text-white'}`} />
          <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            Food Management
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-200'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-4 btn btn-primary"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;