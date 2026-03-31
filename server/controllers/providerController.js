import ProviderProfile from '../models/ProviderProfile.js';
import User from '../models/User.js';
import { asyncHandler } from '../utils/errorHandler.js';

// Get provider profile
export const getProviderProfile = asyncHandler(async (req, res) => {
  const profile = await ProviderProfile.findOne({ userId: req.user._id }).populate('userId', 'name email');
  
  if (!profile) {
    return res.status(404).json({
      success: false,
      message: 'Provider profile not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: profile
  });
});

// Create/Update provider profile
export const updateProviderProfile = asyncHandler(async (req, res) => {
  const { phone, address, city, serviceCategories, bio, experience, availability } = req.body;
  
  let profile = await ProviderProfile.findOne({ userId: req.user._id });
  
  if (!profile) {
    profile = await ProviderProfile.create({
      userId: req.user._id,
      phone,
      address,
      city,
      serviceCategories,
      bio,
      experience,
      availability
    });
  } else {
    profile = await ProviderProfile.findByIdAndUpdate(
      profile._id,
      { phone, address, city, serviceCategories, bio, experience, availability },
      { new: true, runValidators: true }
    );
  }
  
  res.status(200).json({
    success: true,
    message: 'Provider profile updated successfully',
    data: profile
  });
});

// Get all providers by service category
export const getProvidersByService = asyncHandler(async (req, res) => {
  const { category } = req.params;
  
  const providers = await ProviderProfile.find({
    serviceCategories: category,
    verified: true
  }).populate('userId', 'name email').sort({ rating: -1 });
  
  res.status(200).json({
    success: true,
    count: providers.length,
    data: providers
  });
});

// Get all providers (ADMIN)
export const getAllProviders = asyncHandler(async (req, res) => {
  const providers = await ProviderProfile.find({}).populate('userId', 'name email createdAt').sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: providers.length,
    data: providers
  });
});

// Verify provider (ADMIN)
export const verifyProvider = asyncHandler(async (req, res) => {
  const profile = await ProviderProfile.findByIdAndUpdate(
    req.params.id,
    { verified: true },
    { new: true }
  );
  
  res.status(200).json({
    success: true,
    message: 'Provider verified successfully',
    data: profile
  });
});

// Reject provider (ADMIN)
export const rejectProvider = asyncHandler(async (req, res) => {
  const profile = await ProviderProfile.findByIdAndUpdate(
    req.params.id,
    { verified: false },
    { new: true }
  );
  
  res.status(200).json({
    success: true,
    message: 'Provider rejected',
    data: profile
  });
});
