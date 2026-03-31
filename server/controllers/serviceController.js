import Service from '../models/Service.js';
import { asyncHandler, ApiError } from '../utils/errorHandler.js';

// Get all services
export const getAllServices = asyncHandler(async (req, res) => {
  const { category, active } = req.query;
  
  const filter = {};
  if (category) filter.category = category;
  if (active !== undefined) filter.active = active === 'true';
  
  const services = await Service.find(filter).sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: services.length,
    data: services
  });
});

// Get service by ID
export const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: service
  });
});

// Create service (ADMIN ONLY)
export const createService = asyncHandler(async (req, res) => {
  const { name, description, category, basePrice, icon } = req.body;
  
  const service = await Service.create({
    name,
    description,
    category,
    basePrice,
    icon
  });
  
  res.status(201).json({
    success: true,
    message: 'Service created successfully',
    data: service
  });
});

// Update service (ADMIN ONLY)
export const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.status(200).json({
    success: true,
    message: 'Service updated successfully',
    data: service
  });
});

// Delete service (ADMIN ONLY)
export const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.status(200).json({
    success: true,
    message: 'Service deleted successfully'
  });
});
