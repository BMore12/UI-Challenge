import React from 'react';
import './MilkshakeCard.css';

interface Props {
  title: string;
  img: string;
  price: number;
}

const MilkshakeCard: React.FC<Props> = ({ title, img, price }) => (
  <div className="milkshake-card">
    <img src={img} alt={title} />
    <div className="milkshake-info">
      <span className="likes">30 likes</span>
      <h3>{title}</h3>
      <span className="price">${price.toFixed(2)}</span>
      <button className="buy-btn">BUY NOW</button>
    </div>
  </div>
);

export default MilkshakeCard;
