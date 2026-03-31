import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config({ path: '../.env' });

const createAdminAccount = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cityfixer');
    console.log('✓ Connected to MongoDB');

    // Delete existing admin account
    await User.deleteMany({ userType: 'admin' });
    console.log('✓ Cleared existing admin accounts');

    // Create admin account
    const adminUser = new User({
      name: 'CityFixer Admin',
      email: 'cityfixer@gmail.com',
      password: 'cityfixer@123',
      userType: 'admin'
    });

    await adminUser.save();
    console.log('✓ Admin account created successfully!');
    console.log('\n📧 Admin Login Credentials:');
    console.log('   Email: cityfixer@gmail.com');
    console.log('   Password: cityfixer@123');
    console.log('\n🔗 Admin Panel URL: http://localhost:3000/admin');

    await mongoose.connection.close();
    console.log('✓ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error creating admin account:', error.message);
    process.exit(1);
  }
};

createAdminAccount();
