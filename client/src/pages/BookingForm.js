import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { provider, category } = location.state || {};

  const [formData, setFormData] = useState({
    bookingDate: '',
    userAddress: '',
    userPhone: user?.email || '',
    description: '',
    price: provider?.skills?.[0]?.basePrice || 500
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          providerId: provider._id,
          serviceCategory: category,
          ...formData
        })
      });

      if (response.ok) {
        alert('Booking created! Provider will review and respond soon.');
        navigate('/bookings');
      } else {
        alert('Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  if (!provider) {
    return <div>Error: Provider not found</div>;
  }

  return (
    <div className="booking-form-page">
      <div className="form-container">
        <h1>Book Service</h1>
        
        <div className="provider-info">
          <h3>{provider.userId.name}</h3>
          <p>⭐ {provider.rating.toFixed(1)} • {provider.completedBookings} completed</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Booking Date & Time *</label>
            <input
              type="datetime-local"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Address *</label>
            <textarea
              name="userAddress"
              value={formData.userAddress}
              onChange={handleChange}
              placeholder="Enter your complete address"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Phone *</label>
            <input
              type="tel"
              name="userPhone"
              value={formData.userPhone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Service Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what you need done..."
            />
          </div>

          <div className="price-summary">
            <span>Estimated Price:</span>
            <span className="price">₹{formData.price}</span>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
