import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import MilkshakeSection from './components/MilkshakeSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <img
        src="/images/coffee-vintage.jpg"
        alt="Coffee Vintage"
        style={{
          width: '100%',
          maxHeight: '320px',
          objectFit: 'cover',
          borderRadius: '16px',
          marginBottom: '24p'
        }}
      />
      <Header />
      <HeroSection />
      <CategorySection />
      <MilkshakeSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
