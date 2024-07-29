import React from 'react';
import './Navbar.css';

const Navbar = ({ userName }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">My Dashboard</h1>
      <div className="navbar-right">
      <div className="welcome-message">Welcome!</div>
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
