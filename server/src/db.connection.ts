// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const MONGODB_URI =
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/test_todo';

// export async function initiateDbConnection() {
//   try {
//   console.log("MONGODB_URI",MONGODB_URI)
//     await mongoose.connect(MONGODB_URI);
//     console.log('Database Connection Successful...', MONGODB_URI);
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//     process.exit(1);
//   }
// }

import { MongoClient } from "mongodb";

const username = encodeURIComponent("ezratgab");
const password = encodeURIComponent("qQpfL2N6Yc2jc7Dm");
const cluster = "cluster0";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

let uri = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/<dbName>?authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri);


export default async function run() {
  try {
    console.log("Connecting to the database", uri);
    await client.connect().then(()=>{
      console.log("Mongo Database Connected")
    }).catch((err)=>{
      console.error(err)
    }
    );
  } finally {
    await client.close();
  }
}
