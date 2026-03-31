import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const systemStats = [
    { label: 'Total Users', value: '12,458', trend: '+8.2%' },
    { label: 'Service Providers', value: '3,012', trend: '+4.9%' },
    { label: 'Bookings Today', value: '486', trend: '+12.4%' },
    { label: 'Open Complaints', value: '17', trend: '-6.1%' }
  ];

  const recentUsers = [
    { name: 'Aarav Mehta', role: 'Customer', status: 'Active', joined: '31 Mar 2026' },
    { name: 'Neha Patel', role: 'Provider', status: 'Pending KYC', joined: '31 Mar 2026' },
    { name: 'Rahul Nair', role: 'Customer', status: 'Active', joined: '30 Mar 2026' },
    { name: 'Sana Khan', role: 'Provider', status: 'Active', joined: '30 Mar 2026' }
  ];

  const serviceHealth = [
    { category: 'Plumbing', completionRate: '96%', avgRating: '4.8' },
    { category: 'Cleaning', completionRate: '93%', avgRating: '4.7' },
    { category: 'Electrical', completionRate: '95%', avgRating: '4.9' },
    { category: 'Carpentry', completionRate: '91%', avgRating: '4.6' }
  ];

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div>
          <p className="admin-chip">Administrator Access</p>
          <h1>Admin Panel</h1>
          <p className="admin-subtitle">
            Welcome, {user?.name || 'Admin'}. Monitor platform operations and manage growth from one place.
          </p>
        </div>
        <div className="admin-actions">
          <button className="admin-btn ghost" onClick={() => navigate('/dashboard')}>
            User Dashboard
          </button>
          <button className="admin-btn primary" onClick={() => navigate('/services')}>
            Manage Services
          </button>
        </div>
      </header>

      <section className="admin-stats-grid">
        {systemStats.map((item) => (
          <article key={item.label} className="admin-stat-card">
            <p>{item.label}</p>
            <h2>{item.value}</h2>
            <span>{item.trend} this week</span>
          </article>
        ))}
      </section>

      <section className="admin-main-grid">
        <article className="admin-card">
          <div className="admin-card-head">
            <h3>Recent User Registrations</h3>
            <button className="admin-link-btn">View all</button>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((member) => (
                  <tr key={member.name}>
                    <td>{member.name}</td>
                    <td>{member.role}</td>
                    <td>
                      <span className={`status-pill ${member.status === 'Active' ? 'ok' : 'warn'}`}>
                        {member.status}
                      </span>
                    </td>
                    <td>{member.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="admin-card">
          <div className="admin-card-head">
            <h3>Service Quality Snapshot</h3>
          </div>
          <div className="health-list">
            {serviceHealth.map((row) => (
              <div key={row.category} className="health-item">
                <h4>{row.category}</h4>
                <p>Completion Rate: {row.completionRate}</p>
                <p>Average Rating: {row.avgRating}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default AdminPanel;