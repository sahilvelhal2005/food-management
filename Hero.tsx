import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Rescuing Food, Feeding Communities
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We collect surplus food from restaurants and hotels to distribute to those in need, 
            reducing food waste and fighting hunger in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#donate" className="btn btn-primary">
              Donate Food
            </a>
            <a href="#food-info" className="btn bg-white text-green-600 hover:bg-gray-100 focus:ring-green-500 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#mission" className="flex flex-col items-center">
          <span className="mb-2">Scroll Down</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;