import React, { useState } from 'react';
import { FoodDonationFormData } from '../types';
import { PlusCircle, Trash2, Send } from 'lucide-react';

interface DonationFormProps {
  onSubmit: (data: FoodDonationFormData) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FoodDonationFormData>({
    hotelName: '',
    ownerName: '',
    contactNumber: '',
    address: '',
    foodItems: [{ name: '', quantity: '', unit: 'servings' }]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.hotelName.trim()) {
      newErrors.hotelName = 'Hotel/Restaurant name is required';
    }
    
    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Owner name is required';
    }
    
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\D/g, ''))) {
      newErrors.contactNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    formData.foodItems.forEach((item, index) => {
      if (!item.name.trim()) {
        newErrors[`foodItems[${index}].name`] = 'Food item name is required';
      }
      
      if (!item.quantity.trim()) {
        newErrors[`foodItems[${index}].quantity`] = 'Quantity is required';
      } else if (isNaN(Number(item.quantity)) || Number(item.quantity) <= 0) {
        newErrors[`foodItems[${index}].quantity`] = 'Quantity must be a positive number';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFoodItemChange = (index: number, field: 'name' | 'quantity' | 'unit', value: string) => {
    const updatedFoodItems = [...formData.foodItems];
    updatedFoodItems[index][field] = value;
    
    setFormData(prev => ({
      ...prev,
      foodItems: updatedFoodItems
    }));
  };

  const addFoodItem = () => {
    setFormData(prev => ({
      ...prev,
      foodItems: [...prev.foodItems, { name: '', quantity: '', unit: 'servings' }]
    }));
  };

  const removeFoodItem = (index: number) => {
    if (formData.foodItems.length === 1) {
      return; // Keep at least one food item
    }
    
    const updatedFoodItems = formData.foodItems.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      foodItems: updatedFoodItems
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would typically send this data to a server
      // For now, we'll just simulate a delay and pass the data to the parent component
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
      
      // Reset form
      setFormData({
        hotelName: '',
        ownerName: '',
        contactNumber: '',
        address: '',
        foodItems: [{ name: '', quantity: '', unit: 'servings' }]
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 fade-in">
      <div className="space-y-6">
        <div>
          <label htmlFor="hotelName" className="form-label">Hotel/Restaurant Name*</label>
          <input
            type="text"
            id="hotelName"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleChange}
            className={`form-input ${errors.hotelName ? 'border-red-500' : ''}`}
            placeholder="Enter hotel or restaurant name"
          />
          {errors.hotelName && <p className="mt-1 text-sm text-red-500">{errors.hotelName}</p>}
        </div>
        
        <div>
          <label htmlFor="ownerName" className="form-label">Owner Name*</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className={`form-input ${errors.ownerName ? 'border-red-500' : ''}`}
            placeholder="Enter owner name"
          />
          {errors.ownerName && <p className="mt-1 text-sm text-red-500">{errors.ownerName}</p>}
        </div>
        
        <div>
          <label htmlFor="contactNumber" className="form-label">Contact Number*</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`form-input ${errors.contactNumber ? 'border-red-500' : ''}`}
            placeholder="Enter 10-digit phone number"
          />
          {errors.contactNumber && <p className="mt-1 text-sm text-red-500">{errors.contactNumber}</p>}
        </div>
        
        <div>
          <label htmlFor="address" className="form-label">Address*</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className={`form-input ${errors.address ? 'border-red-500' : ''}`}
            placeholder="Enter complete address"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Food Items Available*</h3>
            <button
              type="button"
              onClick={addFoodItem}
              className="text-green-600 hover:text-green-800 flex items-center gap-1 text-sm font-medium"
            >
              <PlusCircle size={16} />
              Add Item
            </button>
          </div>
          
          {formData.foodItems.map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Item #{index + 1}</h4>
                <button
                  type="button"
                  onClick={() => removeFoodItem(index)}
                  className="text-red-500 hover:text-red-700"
                  disabled={formData.foodItems.length === 1}
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="form-label">Food Item Name*</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
                    className={`form-input ${errors[`foodItems[${index}].name`] ? 'border-red-500' : ''}`}
                    placeholder="E.g., Rice, Pasta, Bread"
                  />
                  {errors[`foodItems[${index}].name`] && (
                    <p className="mt-1 text-sm text-red-500">{errors[`foodItems[${index}].name`]}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Quantity*</label>
                    <input
                      type="text"
                      value={item.quantity}
                      onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                      className={`form-input ${errors[`foodItems[${index}].quantity`] ? 'border-red-500' : ''}`}
                      placeholder="Amount"
                    />
                    {errors[`foodItems[${index}].quantity`] && (
                      <p className="mt-1 text-sm text-red-500">{errors[`foodItems[${index}].quantity`]}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="form-label">Unit</label>
                    <select
                      value={item.unit}
                      onChange={(e) => handleFoodItemChange(index, 'unit', e.target.value as 'kg' | 'servings' | 'plates' | 'pieces')}
                      className="form-input"
                    >
                      <option value="kg">Kilograms (kg)</option>
                      <option value="servings">Servings</option>
                      <option value="plates">Plates</option>
                      <option value="pieces">Pieces</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Donation
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DonationForm;