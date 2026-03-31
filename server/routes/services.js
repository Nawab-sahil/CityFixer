import express from 'express';
import { 
  getAllServices, 
  getServiceById, 
  createService, 
  updateService, 
  deleteService 
} from '../controllers/serviceController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Admin only routes
router.post('/', protect, restrictTo('admin'), createService);
router.put('/:id', protect, restrictTo('admin'), updateService);
router.delete('/:id', protect, restrictTo('admin'), deleteService);

export default router;
