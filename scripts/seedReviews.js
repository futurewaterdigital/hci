import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const dummyReviews = [
  {
    doctorName: 'Dr. John Smith',
    patientName: 'Sarah Johnson',
    rating: 5,
    comment: 'Dr. Smith was very professional and thorough. He took the time to explain everything and made me feel comfortable.',
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    doctorName: 'Dr. John Smith',
    patientName: 'Michael Brown',
    rating: 4,
    comment: 'Good experience overall. The doctor was knowledgeable and the staff was friendly.',
    status: 'approved',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    doctorName: 'Dr. John Smith',
    patientName: 'Emily Davis',
    rating: 5,
    comment: 'Excellent doctor! Very caring and attentive. Would highly recommend.',
    status: 'approved',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    doctorName: 'Dr. John Smith',
    patientName: 'Robert Wilson',
    rating: 3,
    comment: 'Average experience. The wait time was a bit long.',
    status: 'rejected',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    doctorName: 'Dr. John Smith',
    patientName: 'Jennifer Lee',
    rating: 5,
    comment: 'Best doctor I\'ve ever had. Very thorough and caring.',
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedReviews() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    
    // First, let's check if we have any doctors in the database
    const doctors = await db.collection('doctors').find({}).toArray();
    
    if (doctors.length === 0) {
      console.error('No doctors found in the database. Please add doctors first.');
      process.exit(1);
    }

    // Use the first doctor's ID for all reviews
    const doctorId = doctors[0]._id;
    
    // Update all reviews with the actual doctor ID
    const reviewsToInsert = dummyReviews.map(review => ({
      ...review,
      doctorId
    }));

    // Insert the reviews
    const result = await db.collection('reviews').insertMany(reviewsToInsert);
    
    console.log(`Successfully inserted ${result.insertedCount} reviews`);
  } catch (error) {
    console.error('Error seeding reviews:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

seedReviews(); 