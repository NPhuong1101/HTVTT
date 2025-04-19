import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaSearch } from 'react-icons/fa';

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="grid">
                    <div>
                        <h2 className="footer-title">Travel Explorer</h2>
                        <p className="footer-description">Your trusted partner for unforgettable travel experiences. Explore with us.</p>
                    </div>
                    <div>
                        <h3 className="follow-us-title">Follow Us</h3>
                        <div className="social-icons">
                            <FaFacebook size={24} className="ic" /> 
                            <FaInstagram size={24} className="ic" />
                            <FaTwitter size={24} className="ic" />
                            <FaYoutube size={24} className="ic" />
                        </div>
                        <form className="subscribe-form">
                            <input type="email" placeholder='Enter Your Email' className="email-input" />
                            <button type="submit" className="subscribe-button">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Travel Explorer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;