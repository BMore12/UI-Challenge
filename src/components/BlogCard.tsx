import React from 'react';
import './BlogCard.css';

interface Props {
  title: string;
  img: string;
  desc: string;
}

const BlogCard: React.FC<Props> = ({ title, img, desc }) => (
  <div className="blog-card">
    <img src={img} alt={title} />
    <div className="blog-info">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="read-btn">Read More</button>
    </div>
  </div>
);

export default BlogCard;
