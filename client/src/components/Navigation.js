import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Navigation.css';

const Navigation = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setUserMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">CityFixer</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/offers" 
            className={`nav-link ${isActive('/offers') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Offers
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {isAuthenticated && user?.userType === 'provider' && (
            <Link 
              to="/provider-dashboard" 
              className={`nav-link provider-link ${isActive('/provider-dashboard') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              📊 Dashboard
            </Link>
          )}

          {isAuthenticated && user?.userType === 'admin' && (
            <Link 
              to="/admin" 
              className={`nav-link admin-link ${isActive('/admin') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              ⚙️ Admin
            </Link>
          )}
        </div>

        {/* Right Side: User Menu or Auth Buttons */}
        <div className="nav-right">
          {isAuthenticated ? (
            <div className="user-menu-container">
              <button 
                className="user-menu-btn"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <span className="avatar">👤</span>
                <span className="user-name">{user?.name?.split(' ')[0]}</span>
                <span className="dropdown-icon">▼</span>
              </button>

              {userMenuOpen && (
                <div className="user-dropdown">
                  <div className="dropdown-header">
                    <p className="user-email">{user?.email}</p>
                    <p className="user-type">{user?.userType.toUpperCase()}</p>
                  </div>
                  <hr />
                  <Link 
                    to="/dashboard" 
                    className="dropdown-link"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    📋 My Dashboard
                  </Link>
                  <Link 
                    to="/bookings" 
                    className="dropdown-link"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    📅 My Bookings
                  </Link>
                  <Link 
                    to="/profile" 
                    className="dropdown-link"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    👤 Profile
                  </Link>
                  {user?.userType !== 'provider' && (
                    <Link 
                      to="/provider-register" 
                      className="dropdown-link"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      🔧 Become a Provider
                    </Link>
                  )}
                  <hr />
                  <button 
                    className="logout-btn"
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
