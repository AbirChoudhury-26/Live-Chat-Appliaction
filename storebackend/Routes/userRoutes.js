import express from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt.js'

const app=express();

 app.use(express.json());

 app.post('/api/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: error.message});
    }
  });
  

  app.post('/api/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // If the password is correct, you can implement a session or token-based authentication here
      // For example, you can use JWT (JSON Web Tokens) to generate and send a token to the client for further authentication.
  
      res.status(200).json({ message: 'Signin successful', user });
    } catch (error) {
      console.error('Signin error:', error);
      res.status(500).json({ message: error.message });
    }
  });
  
  export default app;
  
  
  
  
  
  
  
  