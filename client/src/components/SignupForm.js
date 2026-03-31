import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';
import { 
  validateName, 
  validateEmail, 
  validatePassword, 
  validatePasswordConfirm 
} from '../utils/validation';
import '../styles/SignupForm.css';

const SignupForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [apiError, setApiError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (values, setFieldError) => {
    setApiError('');

    // Validate all fields
    let hasErrors = false;

    const nameError = validateName(values.name);
    if (nameError) {
      setFieldError('name', nameError);
      hasErrors = true;
    }

    const emailError = validateEmail(values.email);
    if (emailError) {
      setFieldError('email', emailError);
      hasErrors = true;
    }

    const passwordError = validatePassword(values.password);
    if (passwordError) {
      setFieldError('password', passwordError);
      hasErrors = true;
    }

    const confirmError = validatePasswordConfirm(values.password, values.confirmPassword);
    if (confirmError) {
      setFieldError('confirmPassword', confirmError);
      hasErrors = true;
    }

    if (!agreeToTerms) {
      setApiError('You must agree to the Terms of Service');
      hasErrors = true;
    }

    if (hasErrors) return;

    const result = await register(
      values.name,
      values.email,
      values.password,
      values.userType
    );

    if (result.success) {
      navigate('/dashboard');
    } else {
      setApiError(result.error || 'Registration failed');
    }
  };

  const { values, errors, touched, loading, handleChange, handleBlur, handleSubmit: onSubmit } = useForm(
    { 
      name: '', 
      email: '', 
      password: '', 
      confirmPassword: '',
      userType: 'user'
    },
    handleSubmit
  );

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>CityFixer</h1>
          <h2>Get Started</h2>
          <p>Create your account to access our services</p>
        </div>

        <div className="user-type-selector">
          <label className={`type-option ${values.userType === 'user' ? 'active' : ''}`}>
            <input
              type="radio"
              name="userType"
              value="user"
              checked={values.userType === 'user'}
              onChange={handleChange}
              disabled={loading}
            />
            <span className="type-label">
              <span className="icon">👤</span>
              <span>Customer</span>
            </span>
          </label>
          <label className={`type-option ${values.userType === 'provider' ? 'active' : ''}`}>
            <input
              type="radio"
              name="userType"
              value="provider"
              checked={values.userType === 'provider'}
              onChange={handleChange}
              disabled={loading}
            />
            <span className="type-label">
              <span className="icon">🔧</span>
              <span>Service Provider</span>
            </span>
          </label>
        </div>

        <form onSubmit={onSubmit} className="auth-form">
          {apiError && (
            <div className="alert alert-error">
              <span>⚠️</span> {apiError}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe"
                disabled={loading}
                className={errors.name && touched.name ? 'input-error' : ''}
              />
              <span className="input-icon">👤</span>
            </div>
            {touched.name && errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

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
                placeholder="Create a strong password"
                disabled={loading}
                className={errors.password && touched.password ? 'input-error' : ''}
              />
              <span className="input-icon">🔒</span>
            </div>
            {touched.password && errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
            <small className="password-hint">
              Min. 6 characters recommended
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm your password"
                disabled={loading}
                className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
              />
              <span className="input-icon">🔒</span>
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <label className="terms-checkbox">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              disabled={loading}
            />
            <span>
              I agree to the <a href="/terms">Terms of Service</a> and{' '}
              <a href="/privacy">Privacy Policy</a>
            </span>
          </label>

          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={loading || !agreeToTerms}
          >
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span> Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account?</p>
          <Link to="/login" className="auth-link">
            Sign in here →
          </Link>
        </div>

        <div className="divider">
          <span>or sign up with</span>
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

export default SignupForm;
