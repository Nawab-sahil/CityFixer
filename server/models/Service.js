import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    enum: ['plumbing', 'electrical', 'carpentry', 'painting', 'cleaning', 'moving', 'other'],
    required: true
  },
  basePrice: {
    type: Number,
    required: [true, 'Base price is required'],
    min: 0
  },
  icon: {
    type: String,
    default: '🔧'
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Service', serviceSchema);
