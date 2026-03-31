// Email validation regex
const EMAIL_REGEX = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};

export const validateName = (name) => {
  if (!name) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters';
  if (name.length > 50) return 'Name cannot exceed 50 characters';
  return '';
};

export const validatePasswordConfirm = (password, confirmPassword) => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
};

// Common validation function
export const validateForm = (data, rules) => {
  const errors = {};
  
  for (let field in rules) {
    const error = rules[field](data[field]);
    if (error) {
      errors[field] = error;
    }
  }
  
  return errors;
};

// Specific validators for registration form
export const registerFormValidation = {
  name: validateName,
  email: validateEmail,
  password: validatePassword,
  confirmPassword: (value, formData) => validatePasswordConfirm(formData.password, value)
};

// Specific validators for login form
export const loginFormValidation = {
  email: validateEmail,
  password: validatePassword
};
