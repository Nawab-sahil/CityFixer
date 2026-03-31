import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from '../models/Service.js';

dotenv.config({ path: '../.env' });

const seedServices = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cityfixer');
    console.log('✓ Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('✓ Cleared existing services');

    // Sample services
    const services = [
      {
        name: 'Plumbing',
        category: 'plumbing',
        description: 'Professional plumbing services including pipe repairs, tap installations, and drainage fixes.',
        basePrice: 299,
        icon: '🔧',
      },
      {
        name: 'Electrical',
        category: 'electrical',
        description: 'Expert electrical services including wiring, switch installations, and fault repairs.',
        basePrice: 399,
        icon: '⚡',
      },
      {
        name: 'Painting',
        category: 'painting',
        description: 'Interior and exterior painting with professional quality and quick turnaround.',
        basePrice: 349,
        icon: '🎨',
      },
      {
        name: 'Carpentry',
        category: 'carpentry',
        description: 'Furniture repair, door installations, and custom carpentry solutions.',
        basePrice: 449,
        icon: '🪵',
      },
      {
        name: 'Cleaning',
        category: 'cleaning',
        description: 'Deep cleaning, regular maintenance, and professional sanitization services.',
        basePrice: 199,
        icon: '🧹',
      },
      {
        name: 'AC Repair',
        category: 'cleaning',
        description: 'Air conditioner maintenance, repair, and servicing by certified technicians.',
        basePrice: 299,
        icon: '❄️',
      },
      {
        name: 'Appliance Repair',
        category: 'electrical',
        description: 'Washing machine, refrigerator, and microwave repair and servicing.',
        basePrice: 349,
        icon: '🔌',
      },
      {
        name: 'Wall Repair',
        category: 'carpentry',
        description: 'Drywall repair, patching, and finishing for walls and ceilings.',
        basePrice: 299,
        icon: '🧱',
      },
      {
        name: 'Lock & Keys',
        category: 'other',
        description: 'Lock repair, key duplication, and security system installation.',
        basePrice: 199,
        icon: '🔐',
      },
      {
        name: 'Moving Services',
        category: 'moving',
        description: 'Professional house and office moving with packing and unpacking services.',
        basePrice: 599,
        icon: '📦',
      }
    ];

    const createdServices = await Service.insertMany(services);
    console.log(`✓ Created ${createdServices.length} services`);

    createdServices.forEach((service) => {
      console.log(`  - ${service.icon} ${service.name} (₹${service.basePrice})`);
    });

    await mongoose.connection.close();
    console.log('✓ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding services:', error.message);
    process.exit(1);
  }
};

seedServices();
