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
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">ig</a>
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
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* For Providers */}
          <div className="footer-section">
            <h4>For Providers</h4>
            <ul>
              <li><a href="#">Become a Provider</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Provider Guide</a></li>
              <li><a href="#">Earnings</a></li>
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
            <Link to="#">Privacy Policy</Link>
            <span>•</span>
            <Link to="#">Terms of Service</Link>
            <span>•</span>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
