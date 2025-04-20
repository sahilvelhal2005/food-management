import React from 'react';
import { UtensilsCrossed, HeartHandshake, Bike } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600">
            We are committed to reducing food waste and fighting hunger by connecting 
            surplus food from restaurants and hotels with people in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="fade-in animation-delay-100 bg-white rounded-lg shadow-md p-8 text-center transition-transform hover:transform hover:scale-105">
            <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <UtensilsCrossed className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Collect Surplus Food</h3>
            <p className="text-gray-600">
              We partner with restaurants and hotels to collect excess food that would 
              otherwise go to waste, ensuring it meets safety standards.
            </p>
          </div>

          <div className="fade-in animation-delay-200 bg-white rounded-lg shadow-md p-8 text-center transition-transform hover:transform hover:scale-105">
            <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Bike className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Deliver With Care</h3>
            <p className="text-gray-600">
              Our dedicated team ensures rapid transportation of food donations to 
              maintain quality and safety throughout the process.
            </p>
          </div>

          <div className="fade-in animation-delay-300 bg-white rounded-lg shadow-md p-8 text-center transition-transform hover:transform hover:scale-105">
            <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Feed Communities</h3>
            <p className="text-gray-600">
              We distribute food to shelters, community centers, and directly to 
              families in need, providing nutritious meals to those who lack access.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Our Expected Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="fade-in animation-delay-100">
                <p className="text-4xl font-bold text-green-600">1,000+</p>
                <p className="text-gray-600">Meals Rescued Weekly</p>
              </div>
              <div className="fade-in animation-delay-200">
                <p className="text-4xl font-bold text-green-600">50+</p>
                <p className="text-gray-600">Restaurant Partners</p>
              </div>
              <div className="fade-in animation-delay-300">
                <p className="text-4xl font-bold text-green-600">300+</p>
                <p className="text-gray-600">People Fed Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;