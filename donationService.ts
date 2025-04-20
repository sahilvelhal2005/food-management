import { createClient } from '@supabase/supabase-js';
import { FoodDonation, FoodDonationFormData } from '../types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

/**
 * Add a new donation to the database
 * @param donationData The donation data to add
 * @returns The created donation with ID and timestamp
 */
export const addDonation = async (donationData: FoodDonationFormData): Promise<FoodDonation> => {
  try {
    // First, insert the donation
    const { data: donation, error: donationError } = await supabase
      .from('donations')
      .insert({
        hotel_name: donationData.hotelName,
        owner_name: donationData.ownerName,
        contact_number: donationData.contactNumber,
        address: donationData.address
      })
      .select()
      .single();

    if (donationError) throw donationError;

    // Then, insert all food items
    const foodItems = donationData.foodItems.map(item => ({
      donation_id: donation.id,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit
    }));

    const { error: foodItemsError } = await supabase
      .from('food_items')
      .insert(foodItems);

    if (foodItemsError) throw foodItemsError;

    return {
      id: donation.id,
      hotelName: donation.hotel_name,
      ownerName: donation.owner_name,
      contactNumber: donation.contact_number,
      address: donation.address,
      foodItems: donationData.foodItems,
      createdAt: new Date(donation.created_at)
    };
  } catch (error) {
    console.error('Error adding donation:', error);
    throw error;
  }
};

/**
 * Get all donations from the database
 * @returns Array of all donations with their food items
 */
export const getAllDonations = async (): Promise<FoodDonation[]> => {
  try {
    // Fetch all donations
    const { data: donations, error: donationsError } = await supabase
      .from('donations')
      .select(`
        id,
        hotel_name,
        owner_name,
        contact_number,
        address,
        created_at,
        food_items (
          name,
          quantity,
          unit
        )
      `)
      .order('created_at', { ascending: false });

    if (donationsError) throw donationsError;

    return donations.map(donation => ({
      id: donation.id,
      hotelName: donation.hotel_name,
      ownerName: donation.owner_name,
      contactNumber: donation.contact_number,
      address: donation.address,
      foodItems: donation.food_items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        unit: item.unit
      })),
      createdAt: new Date(donation.created_at)
    }));
  } catch (error) {
    console.error('Error fetching donations:', error);
    throw error;
  }
};

/**
 * Get a donation by ID
 * @param id The ID of the donation to retrieve
 * @returns The donation if found, null otherwise
 */
export const getDonationById = async (id: string): Promise<FoodDonation | null> => {
  try {
    const { data: donation, error } = await supabase
      .from('donations')
      .select(`
        id,
        hotel_name,
        owner_name,
        contact_number,
        address,
        created_at,
        food_items (
          name,
          quantity,
          unit
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!donation) return null;

    return {
      id: donation.id,
      hotelName: donation.hotel_name,
      ownerName: donation.owner_name,
      contactNumber: donation.contact_number,
      address: donation.address,
      foodItems: donation.food_items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        unit: item.unit
      })),
      createdAt: new Date(donation.created_at)
    };
  } catch (error) {
    console.error('Error fetching donation:', error);
    throw error;
  }
};

/**
 * Get donations by hotel name
 * @param hotelName The name to search for
 * @returns Array of matching donations
 */
export const getDonationsByHotelName = async (hotelName: string): Promise<FoodDonation[]> => {
  try {
    const { data: donations, error } = await supabase
      .from('donations')
      .select(`
        id,
        hotel_name,
        owner_name,
        contact_number,
        address,
        created_at,
        food_items (
          name,
          quantity,
          unit
        )
      `)
      .ilike('hotel_name', `%${hotelName}%`)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return donations.map(donation => ({
      id: donation.id,
      hotelName: donation.hotel_name,
      ownerName: donation.owner_name,
      contactNumber: donation.contact_number,
      address: donation.address,
      foodItems: donation.food_items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        unit: item.unit
      })),
      createdAt: new Date(donation.created_at)
    }));
  } catch (error) {
    console.error('Error searching donations:', error);
    throw error;
  }
};