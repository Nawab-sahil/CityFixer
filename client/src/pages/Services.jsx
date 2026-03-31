import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Services.css';

const Services = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    } finally {
      setLoading(false);
    }
  };

  const categories = [...new Set(services.map(s => s.category))].map(cat => ({
    name: cat.charAt(0).toUpperCase() + cat.slice(1),
    value: cat,
    count: services.filter(s => s.category === cat).length
  }));

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === null || service.category === selectedCategory)
  );

  const handleSelectService = (service) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate(`/providers/${service.category}`, { state: { service } });
  };

  if (loading) {
    return (
      <div className="services-page">
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div className="spinner"></div>
          <p>Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      {/* Search Header */}
      <div className="search-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="services-wrapper">
        {/* Categories Sidebar */}
        <aside className="categories-sidebar">
          <h3>Categories</h3>
          <div className="categories-list">
            <button
              className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Services ({services.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </aside>

        {/* Services Grid */}
        <main className="services-main">
          <div className="services-header">
            <h2>{selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'All Services'}</h2>
            <p>{filteredServices.length} services available</p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="no-services">
              <p>No services match your search</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="services-grid">
              {filteredServices.map(service => (
                <div key={service._id} className="service-card">
                  <div className="service-image">
                    <span>{service.icon || '🔧'}</span>
                  </div>
                  <div className="service-content">
                    <h3>{service.name}</h3>
                    <p className="category-tag">{service.category}</p>
                    <p className="service-description">{service.description}</p>
                    <div className="service-bottom">
                      <div className="price-section">
                        <span className="price">₹{service.basePrice}</span>
                      </div>
                      <button 
                        className="book-btn"
                        onClick={() => handleSelectService(service)}
                      >
                        Browse Providers →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Services;
