// Test MongoDB connection
import mongoose from 'mongoose';

const connectionString = "mongodb://127.0.0.1:27017/libspace";

console.log('Testing connection to:', connectionString);

mongoose.connect(connectionString)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('❌ Connection failed:', error.message);
  });
