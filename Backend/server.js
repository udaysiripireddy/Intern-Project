const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./Router/auth');
const scheduleRoutes = require('./Router/homeauth');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://udaysiripireddy7:udaysiripireddy7@cluster0.xurauls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/homeauth',scheduleRoutes);
// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
