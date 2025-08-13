import React from 'react';
import './HeroSection.css';
import blogHeader from '../assets/Images/blog-header.jpg';

const HeroSection = () => (
  <section className="hero">
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${blogHeader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <h2>FRESHLY ROASTED</h2>
        <h1>COFFEE</h1>
        <button className="shop-btn">Shop now</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
