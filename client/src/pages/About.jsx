import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About CityFixer</h1>
        <p>Your trusted partner for local services</p>
      </div>

      <div className="about-container">
        {/* Mission Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At CityFixer, we believe that quality local services should be accessible to everyone.
            We're building a platform that connects skilled professionals with customers, making
            it easy to find, book, and pay for services reliably and affordably.
          </p>
        </section>

        {/* Vision Section */}
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted and convenient local services platform, enabling professionals
            to grow their businesses while providing customers with exceptional service experiences.
          </p>
        </section>

        {/* Values Section */}
        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>We build trust through transparency and accountability</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>Excellence is our standard in every service</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We continuously improve through technology</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Care</h3>
              <p>We care about our community and customers</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-section stats-section">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>50K+</h3>
              <p>Active Professionals</p>
            </div>
            <div className="stat">
              <h3>100K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>500K+</h3>
              <p>Bookings Completed</p>
            </div>
            <div className="stat">
              <h3>4.8★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Founded by tech entrepreneurs and service industry experts, CityFixer brings together
            passion for technology and deep understanding of local services. Our dedicated team works
            tirelessly to make the platform better every day.
          </p>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Join Our Community</h2>
          <p>Whether you're a customer or professional, CityFixer is for you.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Book a Service</button>
            <button className="cta-btn secondary">Become a Professional</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
