// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// MongoDB connection
mongoose
  .connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
