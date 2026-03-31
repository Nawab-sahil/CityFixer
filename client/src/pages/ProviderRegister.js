import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/ProviderRegister.css';

const ProviderRegister = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [formData, setFormData] = useState({
    bio: '',
    location: '',
    experience: '',
    servicesOffered: []
  });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      if (data.success) {
        setServices(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/providers/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          servicesOffered: selectedServices
        })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Profile created successfully! You are now a service provider.');
        navigate('/provider-dashboard');
      } else {
        alert(data.message || 'Failed to create provider profile');
      }
    } catch (error) {
      console.error('Error creating provider profile:', error);
      alert('Error creating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="provider-register-page">
      <div className="register-container">
        <div className="register-header">
          <h1>Become a Service Provider</h1>
          <p>Join our network of skilled professionals</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {/* Bio */}
          <div className="form-group">
            <label htmlFor="bio">Professional Bio *</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself and your experience"
              rows="4"
              required
              className="form-textarea"
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label htmlFor="location">Service Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City/Area where you provide services"
              required
              className="form-input"
            />
          </div>

          {/* Experience */}
          <div className="form-group">
            <label htmlFor="experience">Years of Experience *</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select experience level</option>
              <option value="1">0-1 years</option>
              <option value="2">1-3 years</option>
              <option value="5">3-5 years</option>
              <option value="10">5-10 years</option>
              <option value="20">10+ years</option>
            </select>
          </div>

          {/* Services */}
          <div className="form-group">
            <label>Services You Offer *</label>
            <p className="form-help">Select all services you can provide</p>
            <div className="services-grid">
              {services.map(service => (
                <div key={service._id} className="service-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service._id)}
                      onChange={() => handleServiceToggle(service._id)}
                    />
                    <span className="service-item">
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-name">{service.name}</span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
            {selectedServices.length === 0 && (
              <p className="error-message">Please select at least one service</p>
            )}
          </div>

          {/* Certifications */}
          <div className="form-group">
            <label htmlFor="certifications">Certifications/Qualifications</label>
            <textarea
              id="certifications"
              name="certifications"
              placeholder="List any relevant certifications or qualifications"
              rows="3"
              className="form-textarea"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-large"
            disabled={loading || selectedServices.length === 0}
          >
            {loading ? 'Creating Profile...' : 'Complete Registration'}
          </button>
        </form>

        {/* Info Section */}
        <div className="register-info">
          <h3>What happens next?</h3>
          <div className="info-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Profile Verification</h4>
                <p>Our team will verify your information</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Account Activation</h4>
                <p>Once verified, you'll get access to your dashboard</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Start Earning</h4>
                <p>Receive bookings and earn money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderRegister;
