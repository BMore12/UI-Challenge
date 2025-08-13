import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Cofy solutions</div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>Media</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className="search-icon">&#128269;</div>
  </header>
);

export default Header;
