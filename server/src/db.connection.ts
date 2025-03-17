import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/aurora_db';

export default async function initiateDbConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database Connection Successful...', MONGODB_URI);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}
