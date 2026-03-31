import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Services.css';

const Services = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 1, name: 'Plumbing', icon: '🔧', count: 234 },
    { id: 2, name: 'Electrical', icon: '⚡', count: 189 },
    { id: 3, name: 'Cleaning', icon: '🧹', count: 456 },
    { id: 4, name: 'Carpentry', icon: '🏗️', count: 123 },
    { id: 5, name: 'Painting', icon: '🎨', count: 167 },
    { id: 6, name: 'AC Repair', icon: '❄️', count: 145 },
    { id: 7, name: 'Moving', icon: '🚚', count: 89 },
    { id: 8, name: 'Appliance Repair', icon: '🔌', count: 198 },
  ];

  const services = [
    {
      id: 1,
      name: 'Premium Plumbing Service',
      category: 'Plumbing',
      price: '₹500',
      rating: 4.8,
      reviews: 234,
      time: '45 mins',
      image: '🔧',
    },
    {
      id: 2,
      name: 'Home Deep Cleaning',
      category: 'Cleaning',
      price: '₹300',
      rating: 4.7,
      reviews: 567,
      time: '2-3 hours',
      image: '🧹',
    },
    {
      id: 3,
      name: 'Electrical Installation',
      category: 'Electrical',
      price: '₹600',
      rating: 4.9,
      reviews: 345,
      time: '1-2 hours',
      image: '⚡',
    },
    {
      id: 4,
      name: 'Custom Carpentry',
      category: 'Carpentry',
      price: '₹800',
      rating: 4.6,
      reviews: 123,
      time: '3-4 hours',
      image: '🏗️',
    },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === null || service.category === selectedCategory)
  );

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
          <button className="search-btn">🔍</button>
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
              All Services
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">({cat.count})</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Services Grid */}
        <main className="services-main">
          <div className="services-header">
            <h2>{selectedCategory ? selectedCategory : 'All Services'}</h2>
            <p>{filteredServices.length} services available</p>
          </div>

          <div className="services-grid">
            {filteredServices.map(service => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="service-item"
              >
                <div className="service-image">
                  <span>{service.image}</span>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p className="category-tag">{service.category}</p>
                  <div className="service-meta">
                    <span className="time">⏱️ {service.time}</span>
                    <span className="rating">⭐ {service.rating} ({service.reviews})</span>
                  </div>
                  <div className="service-footer">
                    <span className="price">{service.price}</span>
                    <button className="book-btn">Book Now →</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;
