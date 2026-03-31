import express from 'express';
import {
  getProviderProfile,
  updateProviderProfile,
  getProvidersByService,
  getAllProviders,
  verifyProvider,
  rejectProvider
} from '../controllers/providerController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Provider routes
router.get('/profile', protect, restrictTo('provider'), getProviderProfile);
router.put('/profile', protect, restrictTo('provider'), updateProviderProfile);

// Public routes
router.get('/category/:category', getProvidersByService);

// Admin routes
router.get('/all', protect, restrictTo('admin'), getAllProviders);
router.put('/:id/verify', protect, restrictTo('admin'), verifyProvider);
router.put('/:id/reject', protect, restrictTo('admin'), rejectProvider);

export default router;
