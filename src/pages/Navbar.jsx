import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/auth');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h2 className="logoName">Travel Explorer</h2>
                </div>
                <div className="nav-links">
                    <a className="nav-item">Home</a>
                    <a className="nav-item">Popular Destinations</a>
                    <a className="nav-item">Contact</a>
                </div>
                <button className="login-btn" onClick={handleLoginClick}>Login</button>
                <div className="mobile-menu">☰</div>
            </div>
        </nav>
    );
};


export default Navbar;