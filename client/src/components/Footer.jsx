import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h3>CityFixer</h3>
            <p>Your trusted partner for local services</p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noreferrer">f</a>
              <a href="https://x.com" className="social-icon" target="_blank" rel="noreferrer">t</a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">in</a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noreferrer">ig</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* For Users */}
          <div className="footer-section">
            <h4>For Customers</h4>
            <ul>
              <li><Link to="/services">Browse Services</Link></li>
              <li><Link to="/bookings">My Bookings</Link></li>
              <li><Link to="/contact">FAQs</Link></li>
              <li><Link to="/contact">Support</Link></li>
            </ul>
          </div>

          {/* For Providers */}
          <div className="footer-section">
            <h4>For Providers</h4>
            <ul>
              <li><Link to="/provider-register">Become a Provider</Link></li>
              <li><Link to="/provider-register">Partner with us</Link></li>
              <li><Link to="/provider-register">Provider Guide</Link></li>
              <li><Link to="/provider-dashboard">Earnings</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 help@cityfixer.com</li>
              <li>📱 1-800-FIXER-1</li>
              <li>📍 New Delhi, India</li>
              <li>⏰ 24/7 Support Available</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-left">
            <p>&copy; 2026 CityFixer. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <Link to="/contact">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
