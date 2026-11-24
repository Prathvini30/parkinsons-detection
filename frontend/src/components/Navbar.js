import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Parkinson Detect</div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <Link to="/assessment">Assessment</Link>
        <a href="#contact">Contact</a>
      </div>
      <Link to="/assessment">
        <button className="navbar-button">Start Assessment</button>
      </Link>
    </nav>
  );
};

export default Navbar;
