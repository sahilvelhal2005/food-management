import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import FoodInfo from './components/FoodInfo';
import HealthIssues from './components/HealthIssues';
import Exercise from './components/Exercise';
import DonationSection from './components/DonationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <FoodInfo />
      <HealthIssues />
      <Exercise />
      <DonationSection />
      <Footer />
    </div>
  );
}

export default App;