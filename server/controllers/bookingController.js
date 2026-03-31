import Booking from '../models/Booking.js';
import ProviderProfile from '../models/ProviderProfile.js';
import User from '../models/User.js';
import { asyncHandler } from '../utils/errorHandler.js';

// Create booking
export const createBooking = asyncHandler(async (req, res) => {
  const { providerId, serviceCategory, price, bookingDate, userAddress, userPhone, description } = req.body;
  
  // Validate provider exists and is verified
  const provider = await ProviderProfile.findById(providerId);
  if (!provider) {
    return res.status(404).json({
      success: false,
      message: 'Provider not found'
    });
  }
  
  if (!provider.verified) {
    return res.status(400).json({
      success: false,
      message: 'Provider is not verified'
    });
  }
  
  const booking = await Booking.create({
    userId: req.user._id,
    providerId: provider.userId,
    serviceCategory,
    price,
    bookingDate,
    userAddress,
    userPhone,
    description
  });
  
  res.status(201).json({
    success: true,
    message: 'Booking created successfully',
    data: booking
  });
});

// Get user's bookings
export const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ userId: req.user._id })
    .populate('providerId', 'name email')
    .sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings
  });
});

// Get provider's bookings
export const getProviderBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ providerId: req.user._id })
    .populate('userId', 'name email')
    .sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings
  });
});

// Accept booking (PROVIDER)
export const acceptBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }
  
  if (booking.providerId.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: 'Not authorized to accept this booking'
    });
  }
  
  booking.status = 'accepted';
  await booking.save();
  
  // Update provider stats
  const profile = await ProviderProfile.findOne({ userId: req.user._id });
  if (profile) {
    profile.totalBookings += 1;
    await profile.save();
  }
  
  res.status(200).json({
    success: true,
    message: 'Booking accepted successfully',
    data: booking
  });
});

// Reject booking (PROVIDER)
export const rejectBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }
  
  if (booking.providerId.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: 'Not authorized to reject this booking'
    });
  }
  
  booking.status = 'rejected';
  await booking.save();
  
  res.status(200).json({
    success: true,
    message: 'Booking rejected successfully',
    data: booking
  });
});

// Complete booking
export const completeBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }
  
  if (booking.providerId.toString() !== req.user._id.toString() && booking.userId.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: 'Not authorized'
    });
  }
  
  booking.status = 'completed';
  await booking.save();
  
  // Update provider stats
  const profile = await ProviderProfile.findOne({ userId: booking.providerId });
  if (profile) {
    profile.completedBookings += 1;
    await profile.save();
  }
  
  res.status(200).json({
    success: true,
    message: 'Booking completed successfully',
    data: booking
  });
});

// Rate booking
export const rateBooking = asyncHandler(async (req, res) => {
  const { rating, review } = req.body;
  
  const booking = await Booking.findById(req.params.id);
  
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: 'Booking not found'
    });
  }
  
  if (booking.userId.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      message: 'Only customer can rate'
    });
  }
  
  booking.rating = rating;
  booking.review = review;
  await booking.save();
  
  // Update provider rating
  const allBookings = await Booking.find({ providerId: booking.providerId, rating: { $exists: true } });
  const avgRating = allBookings.reduce((sum, b) => sum + (b.rating || 0), 0) / allBookings.length;
  
  const profile = await ProviderProfile.findOne({ userId: booking.providerId });
  if (profile) {
    profile.rating = Math.round(avgRating * 10) / 10;
    await profile.save();
  }
  
  res.status(200).json({
    success: true,
    message: 'Booking rated successfully',
    data: booking
  });
});

// Get all bookings (ADMIN)
export const getAllBookings = asyncHandler(async (req, res) => {
  const { status } = req.query;
  
  const filter = {};
  if (status) filter.status = status;
  
  const bookings = await Booking.find(filter)
    .populate('userId', 'name email')
    .populate('providerId', 'name email')
    .sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings
  });
});
