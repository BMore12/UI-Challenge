import React from 'react';
import MilkshakeCard from './MilkshakeCard';
import './MilkshakeSection.css';
import lavenderShake from '../assets/Images/Lavender-shake.jpg';
import mochaShake from '../assets/Images/mocha-shake.jpg';
import caramelShake from '../assets/Images/caramel-shake.jpg';

const shakes = [
  { title: 'Mocha Shake', img: mochaShake, price: 20 },
  { title: 'Lavender Shake', img: lavenderShake, price: 20 },
  { title: 'Caramel Shake', img: caramelShake, price: 20 },
];

const MilkshakeSection = () => (
  <section className="milkshake-section">
    <h2>TOP MILK SHAKES</h2>
    <p>Explore The Recent Most Bought Shakes This Week</p>
    <div className="milkshake-cards">
      {shakes.map((shake) => (
        <MilkshakeCard key={shake.title} {...shake} />
      ))}
    </div>
  </section>
);

export default MilkshakeSection;
