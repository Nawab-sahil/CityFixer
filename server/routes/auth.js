import express from 'express';
import { register, login, getMe, logout, updateProfile } from '../controllers/authController.js';
import { validateRegister, validateLogin, handleValidationErrors } from '../validators/authValidator.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', validateRegister, handleValidationErrors, register);
router.post('/login', validateLogin, handleValidationErrors, login);

// Protected routes
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);
router.put('/profile', protect, updateProfile);

export default router;
