import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Welcome back, {user?.name || 'User'}!</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {user?.userType === 'admin' && (
        <div className="admin-shortcut">
          <p>Administrator tools are available for your account.</p>
          <button className="logout-btn" onClick={() => navigate('/admin')}>
            Open Admin Panel
          </button>
        </div>
      )}

      <div className="dashboard-content">
        <div className="user-card">
          <div className="card-header">
            <h2>Your Profile</h2>
          </div>
          <div className="card-body">
            <div className="user-info">
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Role:</strong> {user?.userType || 'user'}
              </p>
              <p>
                <strong>Member since:</strong>{' '}
                {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="user-card">
          <div className="card-header">
            <h2>Quick Stats</h2>
          </div>
          <div className="card-body">
            <div className="stats-grid">
              <div className="stat">
                <h3>0</h3>
                <p>Total Bookings</p>
              </div>
              <div className="stat">
                <h3>0</h3>
                <p>Reviews</p>
              </div>
              <div className="stat">
                <h3>0</h3>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="user-card">
          <div className="card-header">
            <h2>Next Steps</h2>
          </div>
          <div className="card-body">
            <ul className="next-steps-list">
              <li>Complete your profile with more details</li>
              <li>Browse available services in your area</li>
              <li>Post a job if you need a service</li>
              <li>Review completed bookings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
