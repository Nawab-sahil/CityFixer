import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceCategory: {
    type: String,
    enum: ['plumbing', 'electrical', 'carpentry', 'painting', 'cleaning', 'moving', 'other'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  userAddress: {
    type: String,
    required: true
  },
  userPhone: {
    type: String,
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  description: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  review: String,
  providerNotes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Booking', bookingSchema);
