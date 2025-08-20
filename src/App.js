import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PricingSection from './components/PricingSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import TshirtCollection from './components/TshirtCollection';
import JeansCollection from './components/JeansCollection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal-900">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <FeaturedProducts />
              <PricingSection />
              <WhyChooseUs />
              <Footer />
            </>
          } />
          <Route path="/tshirt-collection" element={<TshirtCollection />} />
          <Route path="/jeans-collection" element={<JeansCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
