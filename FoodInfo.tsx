import React from 'react';
import { foodItems } from '../data/foodData';
import { Info } from 'lucide-react';

const FoodInfo: React.FC = () => {
  return (
    <section id="food-info" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nutritional Knowledge</h2>
          <p className="text-lg text-gray-600">
            Understanding the impact of different foods on your health can help you make better dietary choices. 
            Here's information on essential food groups and their benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((food, index) => (
            <div 
              key={food.id} 
              className={`fade-in animation-delay-${index % 3}00 card overflow-hidden h-full flex flex-col`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={food.imageUrl} 
                  alt={food.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{food.name}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {food.category.charAt(0).toUpperCase() + food.category.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <div className="mt-auto">
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-1">
                    <Info size={16} className="text-green-600" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {food.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#health-issues" className="btn btn-primary inline-flex items-center">
            Learn About Health Issues
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodInfo;