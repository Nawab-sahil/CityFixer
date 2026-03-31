import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import '../styles/Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91-XXXX-XXX-XXX',
    address: 'New Delhi, India',
    userType: user?.userType || 'customer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Profile updated:', formData);
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <span>👤</span>
          </div>
          <div className="profile-header-info">
            <h1>{user?.name || 'User'}</h1>
            <p>{user?.email}</p>
            <p className="user-type">
              {user?.userType === 'provider' ? '🔧 Service Provider' : '👤 Customer'}
            </p>
          </div>
          <button
            className="edit-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? '✕ Cancel' : '✎ Edit'}
          </button>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          {/* Left Sidebar */}
          <aside className="profile-sidebar">
            <div className="menu-section">
              <h3>Account</h3>
              <ul>
                <li className="active">👤 Profile Info</li>
                <li>🔐 Security</li>
                <li>💳 Payment Methods</li>
                <li>🔔 Notifications</li>
              </ul>
            </div>
            <div className="menu-section">
              <h3>Activity</h3>
              <ul>
                <li>📋 My Bookings</li>
                <li>⭐ My Reviews</li>
                <li>💬 Messages</li>
                <li>🎁 My Offers</li>
              </ul>
            </div>
            <div className="menu-section">
              <h3>Support</h3>
              <ul>
                <li>❓ Help Center</li>
                <li>📞 Contact Us</li>
                <li>📋 Terms & Privacy</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="profile-main">
            {/* Personal Information */}
            <section className="profile-section">
              <h2>Personal Information</h2>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              {isEditing && (
                <button className="save-btn" onClick={handleSave}>
                  💾 Save Changes
                </button>
              )}
            </section>

            {/* Account Settings */}
            <section className="profile-section">
              <h2>Account Settings</h2>
              <div className="setting-item">
                <h3>Account Type</h3>
                <p>{user?.userType === 'provider' ? '🔧 Service Provider' : '👤 Customer'}</p>
              </div>
              <div className="setting-item">
                <h3>Email Notifications</h3>
                <p>Enabled ✓</p>
              </div>
              <div className="setting-item">
                <h3>Two Factor Authentication</h3>
                <button className="enable-btn">Enable</button>
              </div>
            </section>

            {/* Stats */}
            <section className="profile-section">
              <h2>Your Activity</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Bookings</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">Avg Rating</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Reviews</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">₹2,450</span>
                  <span className="stat-label">Saved</span>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <section className="profile-section danger-zone">
              <h2>Danger Zone</h2>
              <button className="logout-btn" onClick={logout}>
                🚪 Logout
              </button>
              <button className="delete-btn">🗑️ Delete Account</button>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
