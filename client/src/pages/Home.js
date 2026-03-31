import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Home.css';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: '🔧',
      title: 'Plumbing',
      description: 'Expert plumber for leaks, repairs & installations',
      price: '₹500',
      rating: '4.8'
    },
    {
      icon: '🧹',
      title: 'House Cleaning',
      description: 'Professional deep cleaning services',
      price: '₹300',
      rating: '4.7'
    },
    {
      icon: '⚡',
      title: 'Electrical',
      description: 'Licensed electricians for all repairs',
      price: '₹400',
      rating: '4.9'
    },
    {
      icon: '🏗️',
      title: 'Carpentry',
      description: 'Custom furniture & repair services',
      price: '₹600',
      rating: '4.6'
    },
    {
      icon: '🎨',
      title: 'Painting',
      description: 'Interior & exterior painting experts',
      price: '₹350',
      rating: '4.8'
    },
    {
      icon: '🚚',
      title: 'Moving',
      description: 'Safe & quick household relocation',
      price: '₹800',
      rating: '4.7'
    }
  ];

  const steps = [
    { number: '1', title: 'Search', desc: 'Find services near you' },
    { number: '2', title: 'Compare', desc: 'Check ratings & prices' },
    { number: '3', title: 'Book', desc: 'Schedule with one click' },
    { number: '4', title: 'Done', desc: 'Service completed' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      text: 'Amazing service! Found a plumber in 5 minutes. Professional work!',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Apartment Owner',
      text: 'Best platform for local services. So convenient and affordable!',
      avatar: '👩‍💼'
    },
    {
      name: 'Vikram Singh',
      role: 'Business Owner',
      text: 'Reliable professionals. I use CityFixer for all my property needs.',
      avatar: '👨‍💻'
    }
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="modern-navbar">
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">🏢</span>
            <span className="logo-text">CityFixer</span>
          </Link>

          <ul className="nav-menu">
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/offers" className="nav-link">Offers</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            {user ? (
              <>
                {user.userType === 'admin' && (
                  <li><Link to="/admin" className="nav-link">Admin Panel</Link></li>
                )}
                <li><Link to="/bookings" className="nav-link">Bookings</Link></li>
                <li><Link to="/profile" className="nav-link">Profile</Link></li>
                <li><button className="nav-logout" onClick={logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                <li><Link to="/signup" className="nav-btn">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Local Services,
              <span className="gradient-text"> Lightning Fast</span>
            </h1>
            <p className="hero-subtitle">
              Connect with trusted service professionals in your city. Quality work, transparent pricing, and zero hassle.
            </p>

            {!user ? (
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => navigate('/signup')}>
                  Find Local Services
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/login')}>
                  Already a Member
                </button>
              </div>
            ) : (
              <div className="hero-buttons">
                {user.userType === 'admin' ? (
                  <button className="btn btn-primary" onClick={() => navigate('/admin')}>
                    Open Admin Panel
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
                    Go to Dashboard
                  </button>
                )}
              </div>
            )}

            <div className="hero-stats">
              <div className="stat">
                <h3>50K+</h3>
                <p>Professionals</p>
              </div>
              <div className="stat">
                <h3>100K+</h3>
                <p>Happy Users</p>
              </div>
              <div className="stat">
                <h3>4.8★</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-emoji">🔧</div>
              <div className="card-text">Plumbing Service</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-emoji">⚡</div>
              <div className="card-text">Electrical Work</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-emoji">🧹</div>
              <div className="card-text">House Cleaning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Popular Services</h2>
          <p>Choose from our wide range of trusted local services</p>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <div className="service-price">
                  <span className="price">{service.price}</span>
                  <span className="rating">⭐ {service.rating}</span>
                </div>
                <button className="service-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="btn btn-outline">View All Services</button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <h2>How CityFixer Works</h2>
          <p>Simple 4-step process to get services instantly</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-circle">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <h2>What Users Say</h2>
          <p>Thousands of satisfied customers trust CityFixer</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{review.avatar}</div>
                <div>
                  <h4>{review.name}</h4>
                  <p className="role">{review.role}</p>
                </div>
              </div>
              <div className="testimonial-body">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Fix Your City?</h2>
          <p>Join thousands of happy users getting services done</p>
          {!user && (
            <button className="btn btn-primary btn-large" onClick={() => navigate('/signup')}>
              Get Started Now
            </button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CityFixer</h4>
            <p>Your trusted local service platform</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CityFixer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
