import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const serviceData = {
    id: id,
    name: 'Premium Plumbing Service',
    description: 'Expert plumbing services for all your home repair needs',
    image: '🔧',
    price: '₹500',
    rating: 4.8,
    reviews: 234,
    duration: '45 minutes',
    category: 'Plumbing',
  };

  const providers = [
    {
      id: 1,
      name: 'Raj Kumar',
      rating: 4.9,
      reviews: 145,
      experience: '8 years',
      image: '👨‍🔧',
      verified: true,
      price: '₹500',
      nextSlot: 'Today 2 PM',
    },
    {
      id: 2,
      name: 'Priya Singh',
      rating: 4.8,
      reviews: 98,
      experience: '6 years',
      image: '👩‍🔧',
      verified: true,
      price: '₹550',
      nextSlot: 'Today 3 PM',
    },
    {
      id: 3,
      name: 'Vikram Patel',
      rating: 4.7,
      reviews: 112,
      experience: '5 years',
      image: '👨‍🔧',
      verified: true,
      price: '₹450',
      nextSlot: 'Tomorrow 10 AM',
    },
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="service-details-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="details-container">
        {/* Service Header */}
        <div className="service-header-section">
          <div className="service-image-large">
            <span>{serviceData.image}</span>
          </div>
          <div className="service-header-info">
            <h1>{serviceData.name}</h1>
            <p className="description">{serviceData.description}</p>
            <div className="service-stats">
              <div className="stat">
                <span className="label">Rating</span>
                <span className="value">⭐ {serviceData.rating} ({serviceData.reviews} reviews)</span>
              </div>
              <div className="stat">
                <span className="label">Duration</span>
                <span className="value">⏱️ {serviceData.duration}</span>
              </div>
              <div className="stat">
                <span className="label">Price from</span>
                <span className="value price">{serviceData.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Providers Section */}
        <div className="providers-section">
          <h2>Available Professionals</h2>
          <div className="providers-grid">
            {providers.map((provider, index) => (
              <div
                key={provider.id}
                className={`provider-card ${index === selectedProvider ? 'selected' : ''}`}
                onClick={() => setSelectedProvider(index)}
              >
                <div className="provider-avatar">{provider.image}</div>
                <div className="provider-info">
                  <h3>
                    {provider.name}
                    {provider.verified && <span className="verified">✓</span>}
                  </h3>
                  <p className="experience">Experience: {provider.experience}</p>
                  <div className="provider-rating">
                    <span>⭐ {provider.rating} ({provider.reviews} reviews)</span>
                  </div>
                  <p className="next-slot">Next slot: {provider.nextSlot}</p>
                  <p className="provider-price">{provider.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <div className="booking-section">
          <h2>Select Date & Time</h2>
          <div className="booking-form">
            <div className="form-group">
              <label>Choose Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-input"
              />
            </div>
            <div className="form-group">
              <label>Choose Time</label>
              <div className="time-slots">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <button className="proceed-btn" onClick={() => navigate('/payment')}>
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {[1, 2, 3].map(r => (
              <div key={r} className="review-item">
                <div className="review-header">
                  <span className="reviewer-name">Customer {r}</span>
                  <span className="review-rating">⭐⭐⭐⭐⭐</span>
                </div>
                <p>Great service! The professional was punctual and did amazing work. Highly recommended!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
