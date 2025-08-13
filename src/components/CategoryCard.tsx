import React from 'react';
import './CategoryCard.css';

interface Props {
  title: string;
  img: string;
}

const CategoryCard: React.FC<Props> = ({ title, img }) => (
  <div className="category-card" style={{ backgroundImage: `url(${img})` }}>
    <div className="category-overlay">
      <span>{title}</span>
      <button className="view-btn">View More</button>
    </div>
  </div>
);

export default CategoryCard;
