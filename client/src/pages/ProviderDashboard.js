import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/ProviderDashboard.css';

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('pending');

  useEffect(() => {
    if (user?.userType !== 'provider') {
      navigate('/dashboard');
      return;
    }
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch profile
      const profileRes = await fetch('http://localhost:5000/api/providers/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const profileData = await profileRes.json();
      if (profileData.success) setProfile(profileData.data);

      // Fetch bookings
      const bookingsRes = await fetch('http://localhost:5000/api/bookings/provider/list', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const bookingsData = await bookingsRes.json();
      if (bookingsData.success) setBookings(bookingsData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/accept`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        alert('Booking accepted! Please visit the customer address.');
        fetchData();
      }
    } catch (error) {
      console.error('Error accepting booking:', error);
    }
  };

  const handleRejectBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/reject`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        alert('Booking rejected');
        fetchData();
      }
    } catch (error) {
      console.error('Error rejecting booking:', error);
    }
  };

  const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter);

  return (
    <div className="provider-dashboard">
      <div className="dashboard-header">
        <h1>Service Provider Dashboard</h1>
        <p>Welcome, {user?.name}!</p>
      </div>

      {profile && (
        <div className="profile-summary">
          <div className="summary-stat">
            <label>Total Bookings</label>
            <value>{profile.totalBookings}</value>
          </div>
          <div className="summary-stat">
            <label>Completed</label>
            <value>{profile.completedBookings}</value>
          </div>
          <div className="summary-stat">
            <label>Rating</label>
            <value>⭐ {profile.rating.toFixed(1)}</value>
          </div>
          <div className="summary-stat">
            <label>Verified</label>
            <value>{profile.verified ? '✓ Yes' : '⏳ Pending'}</value>
          </div>
        </div>
      )}

      <div className="bookings-section">
        <h2>Incoming Bookings</h2>
        
        <div className="filter-tabs">
          <button 
            className={`tab ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button 
            className={`tab ${filter === 'accepted' ? 'active' : ''}`}
            onClick={() => setFilter('accepted')}
          >
            Accepted
          </button>
          <button 
            className={`tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
        </div>

        {filteredBookings.length === 0 ? (
          <p className="no-bookings">No {filter} bookings</p>
        ) : (
          <div className="bookings-list">
            {filteredBookings.map(booking => (
              <div key={booking._id} className="booking-card">
                <div className="booking-header">
                  <h3>{booking.userId.name}</h3>
                  <span className={`status-badge ${booking.status}`}>{booking.status}</span>
                </div>

                <div className="booking-details">
                  <p><strong>Service:</strong> {booking.serviceCategory}</p>
                  <p><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                  <p><strong>Address:</strong> {booking.userAddress}</p>
                  <p><strong>Phone:</strong> {booking.userPhone}</p>
                  <p><strong>Price:</strong> ₹{booking.price}</p>
                  {booking.description && <p><strong>Details:</strong> {booking.description}</p>}
                </div>

                {booking.status === 'pending' && (
                  <div className="booking-actions">
                    <button 
                      className="btn-accept"
                      onClick={() => handleAcceptBooking(booking._id)}
                    >
                      Accept
                    </button>
                    <button 
                      className="btn-reject"
                      onClick={() => handleRejectBooking(booking._id)}
                    >
                      Reject
                    </button>
                  </div>
                )}

                {booking.status === 'accepted' && (
                  <div className="booking-status">
                    ✓ You have accepted this booking. Visit the customer address at the scheduled time.
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;
