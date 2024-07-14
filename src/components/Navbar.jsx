import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item">Service</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
