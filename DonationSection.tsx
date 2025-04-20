import React, { useState } from 'react';
import DonationForm from './DonationForm';
import { FoodDonation, FoodDonationFormData } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { Check } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [submissions, setSubmissions] = useState<FoodDonation[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (formData: FoodDonationFormData) => {
    const newDonation: FoodDonation = {
      ...formData,
      id: uuidv4(),
      createdAt: new Date()
    };
    
    // In a real application, you would send this to a server/database
    setSubmissions(prev => [...prev, newDonation]);
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="donate" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Donate Surplus Food</h2>
          <p className="text-lg text-gray-600">
            If you are a restaurant or hotel owner with surplus food, please fill out the form below.
            Your contribution can help feed someone in need and reduce food waste.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            {showSuccess && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg flex items-center gap-3 fade-in">
                <Check size={20} className="text-green-600" />
                <div>
                  <p className="font-medium">Donation submitted successfully!</p>
                  <p className="text-sm">Thank you for your contribution. We'll contact you shortly to arrange pickup.</p>
                </div>
              </div>
            )}
            
            <DonationForm onSubmit={handleSubmit} />
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 h-full fade-in">
              <h3 className="text-xl font-semibold mb-6">Why Donate?</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Reduce Food Waste</h4>
                  <p className="text-gray-600 text-sm">
                    About one-third of all food produced globally is wasted. By donating surplus food, 
                    you're helping to reduce this waste and its environmental impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Feed the Hungry</h4>
                  <p className="text-gray-600 text-sm">
                    Your donation directly helps people in need, providing them with nutritious meals 
                    they might otherwise go without.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Enhance Your Reputation</h4>
                  <p className="text-gray-600 text-sm">
                    Demonstrate your commitment to social responsibility, which can enhance your 
                    business reputation and customer loyalty.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Tax Benefits</h4>
                  <p className="text-gray-600 text-sm">
                    In many places, food donations may qualify for tax deductions. Consult with your 
                    tax advisor to learn about potential benefits in your area.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-gray-800 mb-3">What Can Be Donated?</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    Prepared foods that haven't been served
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    Fresh fruits and vegetables
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    Packaged foods within their use-by date
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    Baked goods and pastries
                  </li>
                  <li className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    Canned and dry goods
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;