import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [services, setServices] = useState([]);
  const [providers, setProviders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      
      const [servicesRes, providersRes, bookingsRes] = await Promise.all([
        fetch('/api/services', { headers }),
        fetch('/api/providers/all', { headers }),
        fetch('/api/bookings/all', { headers })
      ]);

      if (servicesRes.ok) {
        const servicesData = await servicesRes.json();
        setServices(servicesData.data || []);
      }
      if (providersRes.ok) {
        const providersData = await providersRes.json();
        setProviders(providersData.data || []);
      }
      if (bookingsRes.ok) {
        const bookingsData = await bookingsRes.json();
        setBookings(bookingsData.data || []);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchAllData();
    }
  }, [fetchAllData, token]);

  const handleVerifyProvider = async (providerId) => {
    try {
      const res = await fetch(`/api/providers/${providerId}/verify`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchAllData();
        alert('Provider verified successfully');
      }
    } catch (error) {
      console.error('Error verifying provider:', error);
    }
  };

  const handleRejectProvider = async (providerId) => {
    try {
      const res = await fetch(`/api/providers/${providerId}/reject`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchAllData();
        alert('Provider rejected');
      }
    } catch (error) {
      console.error('Error rejecting provider:', error);
    }
  };

  const systemStats = [
    { label: 'Total Services', value: services.length.toString(), trend: '+2' },
    { label: 'Total Providers', value: providers.length.toString(), trend: '+1' },
    { label: 'Total Bookings', value: bookings.length.toString(), trend: '+5' },
    { label: 'Pending Verifications', value: (providers.filter(p => !p.verified).length).toString(), trend: '0' }
  ];

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div>
          <p className="admin-chip">Administrator Access</p>
          <h1>Admin Panel</h1>
          <p className="admin-subtitle">
            Welcome, {user?.name || 'Admin'}. Manage services, providers, and bookings.
          </p>
        </div>
        <div className="admin-actions">
          <button className="admin-btn ghost" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </header>

      <section className="admin-stats-grid">
        {systemStats.map((item) => (
          <article key={item.label} className="admin-stat-card">
            <p>{item.label}</p>
            <h2>{item.value}</h2>
            <span>{item.trend}</span>
          </article>
        ))}
      </section>

      <section className="admin-tabs">
        <div className="tab-buttons">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Services ({services.length})
          </button>
          <button 
            className={`tab ${activeTab === 'providers' ? 'active' : ''}`}
            onClick={() => setActiveTab('providers')}
          >
            Providers ({providers.length})
          </button>
          <button 
            className={`tab ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            Bookings ({bookings.length})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <section className="admin-main-grid">
              <article className="admin-card">
                <div className="admin-card-head">
                  <h3>Platform Overview</h3>
                  <button className="admin-link-btn" onClick={fetchAllData}>
                    Refresh
                  </button>
                </div>
                <div className="overview-grid">
                  <div className="overview-item">
                    <p>Active Services</p>
                    <h3>{services.filter(s => s.active !== false).length}</h3>
                  </div>
                  <div className="overview-item">
                    <p>Verified Providers</p>
                    <h3>{providers.filter(p => p.verified).length}</h3>
                  </div>
                  <div className="overview-item">
                    <p>Pending Bookings</p>
                    <h3>{bookings.filter(b => b.status === 'pending').length}</h3>
                  </div>
                  <div className="overview-item">
                    <p>Completed Bookings</p>
                    <h3>{bookings.filter(b => b.status === 'completed').length}</h3>
                  </div>
                </div>
              </article>
            </section>
          )}

          {activeTab === 'services' && (
            <section className="admin-card full-width">
              <div className="admin-card-head">
                <h3>Service Catalog</h3>
                <button className="admin-link-btn" onClick={fetchAllData}>
                  Refresh
                </button>
              </div>
              {loading ? (
                <p>Loading services...</p>
              ) : services.length === 0 ? (
                <p>No services found. Run the seed script to populate services.</p>
              ) : (
                <div className="services-grid">
                  {services.map((service) => (
                    <div key={service._id} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h4>{service.name}</h4>
                      <p>{service.category}</p>
                      <p className="desc">{service.description}</p>
                      <div className="service-meta">
                        <span>₹{service.basePrice}</span>
                        <span>✓ Active</span>
                      </div>
                      <button className="admin-btn small">Edit</button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {activeTab === 'providers' && (
            <section className="admin-card full-width">
              <div className="admin-card-head">
                <h3>Service Providers</h3>
                <button className="admin-link-btn" onClick={fetchAllData}>
                  Refresh
                </button>
              </div>
              {loading ? (
                <p>Loading providers...</p>
              ) : providers.length === 0 ? (
                <p>No providers registered yet.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Services</th>
                        <th>Location</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {providers.map((provider) => (
                        <tr key={provider._id}>
                          <td>{provider.userId?.name || 'N/A'}</td>
                          <td>{provider.servicesOffered?.length || 0}</td>
                          <td>{provider.location || 'Not set'}</td>
                          <td>⭐ {provider.rating || 0}</td>
                          <td>
                            <span className={`status-pill ${provider.verified ? 'ok' : 'warn'}`}>
                              {provider.verified ? 'Verified' : 'Pending'}
                            </span>
                          </td>
                          <td>
                            {!provider.verified && (
                              <>
                                <button 
                                  className="btn-small btn-verify"
                                  onClick={() => handleVerifyProvider(provider._id)}
                                >
                                  Verify
                                </button>
                                <button 
                                  className="btn-small btn-reject"
                                  onClick={() => handleRejectProvider(provider._id)}
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            {provider.verified && <span className="btn-badge">Approved</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {activeTab === 'bookings' && (
            <section className="admin-card full-width">
              <div className="admin-card-head">
                <h3>All Bookings</h3>
                <button className="admin-link-btn" onClick={fetchAllData}>
                  Refresh
                </button>
              </div>
              {loading ? (
                <p>Loading bookings...</p>
              ) : bookings.length === 0 ? (
                <p>No bookings found yet.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Service</th>
                        <th>User</th>
                        <th>Provider</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking._id}>
                          <td>{booking._id?.slice(0, 8) || 'N/A'}...</td>
                          <td>{booking.serviceCategory || 'N/A'}</td>
                          <td>{booking.userId?.name || 'N/A'}</td>
                          <td>{booking.providerId?.name || 'N/A'}</td>
                          <td>{booking.bookingDate ? new Date(booking.bookingDate).toLocaleDateString() : 'N/A'}</td>
                          <td>₹{booking.price || 0}</td>
                          <td>
                            <span className={`status-pill ${booking.status === 'completed' ? 'ok' : 'info'}`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;