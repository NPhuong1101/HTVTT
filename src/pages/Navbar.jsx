import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} />
                    <h2 className="logoName">Travel Explorer</h2>
                </div>
                <div className="nav-links">
                    <a className="nav-item">Home</a>
                    <a className="nav-item">Popular Destinations</a>
                    <a className="nav-item">Our Services</a>
                    <a className="nav-item">Contact</a>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <button className="search-icon">🔍</button>
                    </div>
                </div>
                <button className="login-btn">Login</button>
                <div className="mobile-menu">☰</div>
            </div>
        </nav>
    );
};

export default Navbar;