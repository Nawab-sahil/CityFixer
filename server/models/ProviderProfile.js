import mongoose from 'mongoose';

const providerProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: String,
  city: String,
  serviceCategories: [{
    type: String,
    enum: ['plumbing', 'electrical', 'carpentry', 'painting', 'cleaning', 'moving', 'other']
  }],
  bio: String,
  experience: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalBookings: {
    type: Number,
    default: 0
  },
  completedBookings: {
    type: Number,
    default: 0
  },
  avgResponseTime: {
    type: Number,
    default: 0
  },
  verified: {
    type: Boolean,
    default: false
  },
  documents: [{
    type: String
  }],
  availability: {
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    sunday: Boolean,
    startTime: String,
    endTime: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('ProviderProfile', providerProfileSchema);
