import { FoodItem } from '../types';

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Whole Grains',
    description: 'Whole grains contain all parts of the grain kernel and provide essential nutrients like fiber, B vitamins, and minerals.',
    benefits: [
      'Rich in fiber for digestive health',
      'Helps regulate blood sugar levels',
      'Reduces risk of heart disease',
      'Provides sustained energy'
    ],
    imageUrl: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg',
    category: 'carbs'
  },
  {
    id: 2,
    name: 'Leafy Greens',
    description: 'Dark leafy greens are packed with vitamins, minerals, and antioxidants essential for optimal health.',
    benefits: [
      'High in vitamins A, C, and K',
      'Contains calcium and iron',
      'Supports immune function',
      'Anti-inflammatory properties'
    ],
    imageUrl: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg',
    category: 'vitamins'
  },
  {
    id: 3,
    name: 'Lean Proteins',
    description: 'Lean proteins provide essential amino acids without excessive saturated fat, supporting muscle growth and repair.',
    benefits: [
      'Builds and repairs muscle tissue',
      'Supports immune function',
      'Helps maintain healthy skin, hair, and nails',
      'Promotes feelings of fullness'
    ],
    imageUrl: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    category: 'protein'
  },
  {
    id: 4,
    name: 'Healthy Fats',
    description: 'Healthy fats from sources like avocados, nuts, and olive oil support brain health and hormone production.',
    benefits: [
      'Supports brain function',
      'Helps absorb fat-soluble vitamins',
      'Provides long-lasting energy',
      'Promotes heart health'
    ],
    imageUrl: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg',
    category: 'fats'
  },
  {
    id: 5,
    name: 'Colorful Fruits',
    description: 'Colorful fruits provide a wide range of antioxidants and phytonutrients that protect against disease.',
    benefits: [
      'High in vitamins and minerals',
      'Rich in antioxidants',
      'Supports immune function',
      'Contains natural fiber'
    ],
    imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    category: 'vitamins'
  },
  {
    id: 6,
    name: 'Fermented Foods',
    description: 'Fermented foods like yogurt, kimchi, and sauerkraut contain probiotics that support gut health.',
    benefits: [
      'Promotes gut health',
      'Supports immune function',
      'Improves nutrient absorption',
      'May reduce inflammation'
    ],
    imageUrl: 'https://images.pexels.com/photos/6157033/pexels-photo-6157033.jpeg',
    category: 'vitamins'
  }
];