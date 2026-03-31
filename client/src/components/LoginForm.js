import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [apiError, setApiError] = useState('');

  const handleSubmit = async (values, setFieldError) => {
    setApiError('');
    
    // Validate required fields
    let hasErrors = false;
    if (!values.email) {
      setFieldError('email', 'Email is required');
      hasErrors = true;
    }
    if (!values.password) {
      setFieldError('password', 'Password is required');
      hasErrors = true;
    }

    if (hasErrors) return;

    const result = await login(values.email, values.password);

    if (result.success) {
      // Redirect based on user type
      const userType = result.data.user.userType;
      if (userType === 'admin') {
        navigate('/admin');
      } else if (userType === 'provider') {
        navigate('/provider-dashboard');
      } else {
        navigate('/dashboard');
      }
    } else {
      setApiError(result.error || 'Login failed');
    }
  };

  const { values, errors, touched, loading, handleChange, handleBlur, handleSubmit: onSubmit } = useForm(
    { email: '', password: '' },
    handleSubmit
  );

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>CityFixer</h1>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        <form onSubmit={onSubmit} className="auth-form">
          {apiError && (
            <div className="alert alert-error">
              <span>⚠️</span> {apiError}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                disabled={loading}
                className={errors.email && touched.email ? 'input-error' : ''}
              />
              <span className="input-icon">✉️</span>
            </div>
            {touched.email && errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                disabled={loading}
                className={errors.password && touched.password ? 'input-error' : ''}
              />
              <span className="input-icon">🔒</span>
            </div>
            {touched.password && errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span> Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account?</p>
          <Link to="/signup" className="auth-link">
            Create one for free →
          </Link>
        </div>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn google" disabled={loading}>
            <span>Google</span>
          </button>
          <button type="button" className="social-btn github" disabled={loading}>
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
