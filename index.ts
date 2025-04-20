export interface NavLink {
  name: string;
  href: string;
}

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  category: 'protein' | 'carbs' | 'fats' | 'vitamins' | 'minerals';
}

export interface HealthIssue {
  id: number;
  title: string;
  description: string;
  causes: string[];
  prevention: string[];
  imageUrl: string;
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  instructions: string[];
  imageUrl: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface FoodDonation {
  id: string;
  hotelName: string;
  ownerName: string;
  contactNumber: string;
  address: string;
  foodItems: {
    name: string;
    quantity: string;
    unit: 'kg' | 'servings' | 'plates' | 'pieces';
  }[];
  createdAt: Date;
}

export interface FoodDonationFormData {
  hotelName: string;
  ownerName: string;
  contactNumber: string;
  address: string;
  foodItems: {
    name: string;
    quantity: string;
    unit: 'kg' | 'servings' | 'plates' | 'pieces';
  }[];
}