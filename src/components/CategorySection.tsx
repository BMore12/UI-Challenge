import React from 'react';
import CategoryCard from './CategoryCard';
import './CategorySection.css';
import coffeeMocha from '../assets/Images/coffee mocha.jpg';
import espressoAmericano from '../assets/Images/espresso americano.jpg';
import cappuccino from '../assets/Images/cappuccino.jpg';

const categories = [
  { title: 'Coffee Mocha', img: coffeeMocha },
  { title: 'Expresso Americano', img: espressoAmericano },
  { title: 'Cappuccino', img: cappuccino },
];

const CategorySection = () => (
  <section className="category-section">
    <h2>TOP CATEGORIES</h2>
    <p>Explore The Recent Most Bought Drinks This Week</p>
    <div className="category-cards">
      {categories.map((cat) => (
        <CategoryCard key={cat.title} title={cat.title} img={cat.img} />
      ))}
    </div>
  </section>
);

export default CategorySection;
