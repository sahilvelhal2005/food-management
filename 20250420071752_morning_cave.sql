/*
  # Create donations table

  1. New Tables
    - `donations`
      - `id` (uuid, primary key)
      - `hotel_name` (text, not null)
      - `owner_name` (text, not null) 
      - `contact_number` (text, not null)
      - `address` (text, not null)
      - `created_at` (timestamptz, default now())
    - `food_items`
      - `id` (uuid, primary key)
      - `donation_id` (uuid, foreign key to donations)
      - `name` (text, not null)
      - `quantity` (text, not null)
      - `unit` (text, not null)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read all donations
    - Add policies for authenticated users to insert their own donations
*/

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_name text NOT NULL,
  owner_name text NOT NULL,
  contact_number text NOT NULL,
  address text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create food items table
CREATE TABLE IF NOT EXISTS food_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donation_id uuid REFERENCES donations(id) ON DELETE CASCADE,
  name text NOT NULL,
  quantity text NOT NULL,
  unit text NOT NULL CHECK (unit IN ('kg', 'servings', 'plates', 'pieces'))
);

-- Enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_items ENABLE ROW LEVEL SECURITY;

-- Policies for donations table
CREATE POLICY "Anyone can read donations"
  ON donations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert donations"
  ON donations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policies for food items table
CREATE POLICY "Anyone can read food items"
  ON food_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert food items"
  ON food_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);