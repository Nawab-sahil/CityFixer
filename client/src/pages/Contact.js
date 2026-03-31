import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with us today.</p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>

            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p>support@cityfixer.com</p>
                <p>info@cityfixer.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📱</div>
                <h3>Phone</h3>
                <p>+91-XXXX-XXX-XXX</p>
                <p>Available 9 AM - 9 PM</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Address</h3>
                <p>CityFixer HQ</p>
                <p>Tech Park, New Delhi</p>
              </div>

              <div className="info-card">
                <div className="info-icon">🕒</div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9 AM - 6 PM</p>
                <p>Saturday - Sunday: 10 AM - 4 PM</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noreferrer">📱 Facebook</a>
                <a href="https://x.com" className="social-icon" target="_blank" rel="noreferrer">𝕏 Twitter</a>
                <a href="https://instagram.com" className="social-icon" target="_blank" rel="noreferrer">📸 Instagram</a>
                <a href="https://youtube.com" className="social-icon" target="_blank" rel="noreferrer">▶️ YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          <details className="faq-item">
            <summary>How do I book a service?</summary>
            <p>Browse our services, select your preferred professional, choose a date and time, and complete the payment.</p>
          </details>
          <details className="faq-item">
            <summary>Can I cancel a booking?</summary>
            <p>Yes, you can cancel up to 30 minutes before the scheduled service time.</p>
          </details>
          <details className="faq-item">
            <summary>What payment methods do you accept?</summary>
            <p>We accept credit cards, debit cards, digital wallets, and bank transfers.</p>
          </details>
          <details className="faq-item">
            <summary>Are the professionals verified?</summary>
            <p>Yes, all our professionals go through a thorough verification process before being listed.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Contact;
