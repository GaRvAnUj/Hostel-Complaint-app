import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DarkModeContext from '../../context/DarkModeContext'; // Fixed import path
import './Navigation.css';

const Navigation = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-brand">
        <Link to="/" className="logo-link">
          ROOMEASEE
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/register" className="nav-link">
          Register
        </Link>

        <Link to="/hostel-rules" className="nav-link">
          Hostel Rules
        </Link>

        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        <button 
          onClick={toggleDarkMode} 
          className="theme-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;