import mongoose from 'mongoose';

let mongoDBURI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017';

mongoose.connect(mongoDBURI);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

export default mongoose;
