// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <i className="hamburger-icon" onClick={toggleSidebar}>
          ☰
        </i>
        <h1>DevOrbit</h1>
      </div>
      <div className="navbar-icons">
        <i className="fas fa-bell" />
        <i className="fas fa-comments" />
      </div>
    </div>
  );
};

export default Navbar;
