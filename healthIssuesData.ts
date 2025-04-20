import { HealthIssue } from '../types';

export const healthIssues: HealthIssue[] = [
  {
    id: 1,
    title: 'Heart Disease',
    description: 'Heart disease refers to various conditions that affect the heart. Many forms of heart disease can be prevented or treated with healthy lifestyle choices.',
    causes: [
      'High consumption of saturated and trans fats',
      'High sodium intake leading to hypertension',
      'Excessive sugar consumption',
      'Low intake of fruits, vegetables, and fiber'
    ],
    prevention: [
      'Consume heart-healthy fats like olive oil and avocados',
      'Limit sodium intake to less than 2,300mg per day',
      'Eat plenty of fruits, vegetables, and whole grains',
      'Maintain a healthy weight through diet and exercise'
    ],
    imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
  },
  {
    id: 2,
    title: 'Type 2 Diabetes',
    description: 'Type 2 diabetes is a chronic condition that affects how your body metabolizes sugar. It can lead to serious health complications if not managed properly.',
    causes: [
      'Regular consumption of high-sugar foods and beverages',
      'High intake of refined carbohydrates',
      'Low fiber diet',
      'Excessive caloric intake leading to obesity'
    ],
    prevention: [
      'Choose complex carbohydrates over simple sugars',
      'Maintain a healthy weight',
      'Consume adequate fiber from fruits, vegetables, and whole grains',
      'Stay physically active to improve insulin sensitivity'
    ],
    imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg'
  },
  {
    id: 3,
    title: 'Obesity',
    description: 'Obesity is a complex disease involving an excessive amount of body fat. It increases the risk of other health problems like heart disease, diabetes, and certain cancers.',
    causes: [
      'Consuming more calories than burned',
      'High intake of processed foods high in added sugars and fats',
      'Large portion sizes',
      'Regular consumption of sugar-sweetened beverages'
    ],
    prevention: [
      'Practice portion control',
      'Focus on nutrient-dense, whole foods',
      'Limit processed foods, added sugars, and unhealthy fats',
      'Stay hydrated with water instead of sugary beverages'
    ],
    imageUrl: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg'
  },
  {
    id: 4,
    title: 'Malnutrition',
    description: 'Malnutrition occurs when the body doesn\'t get enough nutrients. It can lead to serious health issues and compromised immune function.',
    causes: [
      'Limited access to nutritious food',
      'Highly restricted diets',
      'Poor food choices lacking essential nutrients',
      'Health conditions affecting nutrient absorption'
    ],
    prevention: [
      'Eat a varied diet with foods from all food groups',
      'Include a variety of colorful fruits and vegetables',
      'Consume adequate protein from plant or animal sources',
      'Consider supplements if recommended by a healthcare provider'
    ],
    imageUrl: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg'
  }
];