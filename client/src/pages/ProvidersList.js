import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/ProvidersList.css';

const ProvidersList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    fetchProviders();
  }, [category]);

  const fetchProviders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/providers/category/${category}`);
      const data = await response.json();
      if (data.success) {
        setProviders(data.data);
      }
    } catch (error) {
      console.error('Error fetching providers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProvider = (provider) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setSelectedProvider(provider);
  };

  const handleBooking = (provider) => {
    navigate('/booking', { state: { provider, category } });
  };

  if (loading) {
    return <div className="providers-loading">Loading providers...</div>;
  }

  if (providers.length === 0) {
    return <div className="providers-empty">No providers available for {category}</div>;
  }

  return (
    <div className="providers-page">
      <div className="providers-header">
        <h1>Available {category.charAt(0).toUpperCase() + category.slice(1)} Providers</h1>
        <p>Select a verified service provider for your needs</p>
      </div>

      <div className="providers-grid">
        {providers.map((provider) => (
          <div key={provider._id} className="provider-card">
            <div className="provider-avatar">
              <span>{provider.userId.name.charAt(0)}</span>
            </div>

            <div className="provider-details">
              <h3>{provider.userId.name}</h3>
              <p className="provider-location">📍 {provider.city}</p>
              
              <div className="provider-stats">
                <div className="stat">
                  <span className="label">Rating</span>
                  <span className="value">⭐ {provider.rating.toFixed(1)}</span>
                </div>
                <div className="stat">
                  <span className="label">Bookings</span>
                  <span className="value">{provider.completedBookings}</span>
                </div>
                <div className="stat">
                  <span className="label">Exp</span>
                  <span className="value">{provider.experience} yrs</span>
                </div>
              </div>

              {provider.bio && (
                <p className="provider-bio">{provider.bio}</p>
              )}

              <div className="availability">
                {provider.availability && (
                  <p className="available">✓ Available {provider.availability.startTime} - {provider.availability.endTime}</p>
                )}
              </div>

              <button 
                className="book-btn"
                onClick={() => handleBooking(provider)}
              >
                Book Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvidersList;
