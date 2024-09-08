const express = require('express');
const router = express.Router();
const User = require('../Models/user'); // Adjust path if necessary

// Middleware to parse JSON requests
router.use(express.json()); // Ensure request body is parsed properly

// POST: Handle user login/signup
router.post('/login', async (req, res) => {
  const { username, email } = req.body;

  // Validate input
  if (!username || !email) {
    return res.status(400).json({ message: 'Username and email are required' });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    
    if (!user) {
      // If user does not exist, create a new user
      user = new User({
        username,
        email,
      });
      await user.save();
      return res.status(201).json({ message: 'User created successfully', user });
    }

    // If user exists, login
    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
