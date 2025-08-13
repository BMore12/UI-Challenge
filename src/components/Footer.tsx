import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      <div>
        <h4>Products</h4>
        <ul>
          <li>Shoes</li>
        </ul>
      </div>
      <div>
        <h4>Category</h4>
        <ul>
          <li>Men</li>
          <li>New in</li>
          <li>Weekly Pick</li>
        </ul>
      </div>
      <div>
        <h4>Company Info</h4>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Payment Options</li>
          <li>Track Order</li>
          <li>Support</li>
          <li>Vouchers</li>
          <li>Site Chorte</li>
        </ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <div className="social-icons">
          {/* Use placeholder icons */}
          <span>FB</span>
          <span>IG</span>
          <span>TW</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <button>Data settings</button>
      <button>Cookie settings</button>
      <button>Privacy Policy</button>
      <button>Terms And Conditions</button>
      <button>Imprint</button>
    </div>
  </footer>
);

export default Footer;
