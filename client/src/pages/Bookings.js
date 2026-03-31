import React, { useState } from 'react';
import '../styles/Bookings.css';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    {
      id: 1,
      service: 'Plumbing Repair',
      provider: 'Raj Kumar',
      date: '31 Mar 2026',
      time: '2:00 PM',
      status: 'Confirmed',
      price: '₹500',
      image: '🔧',
    },
    {
      id: 2,
      service: 'Home Cleaning',
      provider: 'Priya Singh',
      date: '2 Apr 2026',
      time: '10:00 AM',
      status: 'Confirmed',
      price: '₹300',
      image: '🧹',
    },
  ];

  const completedBookings = [
    {
      id: 3,
      service: 'Electrical Work',
      provider: 'Vikram Patel',
      date: '28 Mar 2026',
      time: '3:00 PM',
      status: 'Completed',
      price: '₹600',
      image: '⚡',
      rating: 4.9,
    },
    {
      id: 4,
      service: 'Carpentry',
      provider: 'Amit Kumar',
      date: '25 Mar 2026',
      time: '1:00 PM',
      status: 'Completed',
      price: '₹800',
      image: '🏗️',
      rating: 4.8,
    },
  ];

  const cancelledBookings = [
    {
      id: 5,
      service: 'Painting',
      provider: 'Rahul Singh',
      date: '20 Mar 2026',
      time: '2:00 PM',
      status: 'Cancelled',
      price: '₹350',
      image: '🎨',
      reason: 'Cancelled by user',
    },
  ];

  const BookingCard = ({ booking, type }) => (
    <div className="booking-card">
      <div className="booking-header">
        <div className="booking-image">{booking.image}</div>
        <div className="booking-info">
          <h3>{booking.service}</h3>
          <p>Provider: {booking.provider}</p>
        </div>
        <span className={`status-badge ${booking.status.toLowerCase()}`}>
          {booking.status}
        </span>
      </div>
      <div className="booking-details">
        <span>📅 {booking.date}</span>
        <span>⏰ {booking.time}</span>
        <span className="price">{booking.price}</span>
      </div>
      {type === 'completed' && booking.rating && (
        <div className="booking-footer">
          <span>⭐ Rated {booking.rating}</span>
        </div>
      )}
      {type === 'cancelled' && (
        <div className="booking-footer">
          <span>{booking.reason}</span>
        </div>
      )}
      {type === 'upcoming' && (
        <div className="booking-actions">
          <button className="action-btn primary">View Details</button>
          <button className="action-btn secondary">Cancel</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="bookings-page">
      <div className="bookings-container">
        <h1>My Bookings</h1>

        <div className="booking-tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming ({upcomingBookings.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed ({completedBookings.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveTab('cancelled')}
          >
            Cancelled ({cancelledBookings.length})
          </button>
        </div>

        <div className="bookings-list">
          {activeTab === 'upcoming' && (
            <div>
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} type="upcoming" />
                ))
              ) : (
                <div className="empty-state">No upcoming bookings</div>
              )}
            </div>
          )}

          {activeTab === 'completed' && (
            <div>
              {completedBookings.length > 0 ? (
                completedBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} type="completed" />
                ))
              ) : (
                <div className="empty-state">No completed bookings</div>
              )}
            </div>
          )}

          {activeTab === 'cancelled' && (
            <div>
              {cancelledBookings.length > 0 ? (
                cancelledBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} type="cancelled" />
                ))
              ) : (
                <div className="empty-state">No cancelled bookings</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
