import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import AdminPanel from './pages/AdminPanel';
import ProvidersList from './pages/ProvidersList';
import BookingForm from './pages/BookingForm';
import ProviderDashboard from './pages/ProviderDashboard';
import ProviderRegister from './pages/ProviderRegister';
import './styles/Global.css';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/about" element={<About />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/providers/:serviceId" element={<ProvidersList />} />
            <Route path="/booking-form/:providerId" element={<BookingForm />} />
            <Route path="/provider-register" element={<ProviderRegister />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/provider-dashboard"
              element={
                <ProtectedRoute requiredRole="provider">
                  <ProviderDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
