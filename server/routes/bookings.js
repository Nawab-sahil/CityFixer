import express from 'express';
import {
  createBooking,
  getUserBookings,
  getProviderBookings,
  acceptBooking,
  rejectBooking,
  completeBooking,
  rateBooking,
  getAllBookings
} from '../controllers/bookingController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// User booking routes
router.post('/', protect, restrictTo('user'), createBooking);
router.get('/my-bookings', protect, restrictTo('user'), getUserBookings);
router.put('/:id/rate', protect, restrictTo('user'), rateBooking);

// Provider booking routes
router.get('/provider/list', protect, restrictTo('provider'), getProviderBookings);
router.put('/:id/accept', protect, restrictTo('provider'), acceptBooking);
router.put('/:id/reject', protect, restrictTo('provider'), rejectBooking);
router.put('/:id/complete', protect, restrictTo('provider'), completeBooking);

// Admin routes
router.get('/all', protect, restrictTo('admin'), getAllBookings);

export default router;
