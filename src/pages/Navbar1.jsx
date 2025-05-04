import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import userIcon from '../assets/user2.png';

const Navbar1 = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleManageAccount = () => {
    setShowDropdown(false); 
    navigate('/profile');  
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2 className="logoName">Travel Explorer</h2>
        </div>

        <div className="nav-links">
          <a className="nav-item">Home</a>
          <a className="nav-item">Popular Destinations</a>
          <a className="nav-item">Suggestions for You</a>
          <a className="nav-item">Contact</a>
          <a className="nav-item" onClick={() => navigate('/search')}>Search</a>
        </div>

        <div className="user-section" ref={dropdownRef}>
          <div className="google-style-dropdown">
            <img 
              src={userIcon} 
              alt="User" 
              className="user-avatar"
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <div className="google-dropdown-menu">
                <div className="dropdown-header">
                  <img src={userIcon} className="dropdown-avatar" alt="User" />
                  <div className="user-info">
                    <div className="user-name">Hi!</div>
                    <div className="user-email">nguyenvana@gmail.com</div>
                  </div>
                </div>

                <div className="dropdown-main-option" onClick={handleManageAccount}>
                  Manage your account
                </div>

                <div className="dropdown-divider"></div>

                <div className="dropdown-option">
                  <div className="option" onClick={() => navigate('/auth')}>
                    Add account
                  </div>
                  <div className="option logout" onClick={handleLogout}>
                    Sign out
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        <div className="mobile-menu">☰</div>
      </div>
    </nav>
  );
};

export default Navbar1;
