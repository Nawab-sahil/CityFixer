// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    UPDATE_PROFILE: '/auth/profile',
  }
};

// User Types
export const USER_TYPES = {
  CUSTOMER: 'user',
  SERVICE_PROVIDER: 'provider'
};

export const USER_TYPE_LABELS = {
  user: 'Customer',
  provider: 'Service Provider'
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  FORGOT_PASSWORD: '/forgot-password',
  TERMS: '/terms',
  PRIVACY: '/privacy'
};

// Local Storage Keys
export const LOCAL_STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme'
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  EMAIL_ALREADY_EXISTS: 'Email is already registered.',
  PASSWORDS_DONT_MATCH: 'Passwords do not match.',
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: 'Password must be at least 6 characters.',
  SERVER_ERROR: 'Server error. Please try again later.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ACCOUNT_CREATED: 'Account created successfully!',
  LOGIN_SUCCESS: 'You have been logged in successfully!',
  LOGOUT_SUCCESS: 'You have been logged out successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!'
};

// Validation Rules
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  PASSWORD_MIN_LENGTH: 6,
  EMAIL_REGEX: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'CityFixer',
  APP_DESCRIPTION: 'Your Local Service Provider Platform',
  TOKEN_EXPIRY_DAYS: 7,
  REQUEST_TIMEOUT: 10000 // ms
};
