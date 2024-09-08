import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation after submit
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import the custom CSS
import image from '../Image/download.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // For navigation after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username,
      email,
    };

    try {
      // Replace 'your-api-endpoint' with the actual URL of the API you are sending the data to
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);

      // Handle the response if needed (e.g., store the token, navigate to another page, etc.)
      console.log(response.data);
      
      // Navigate to another page if login is successful
      if (response.status === 200) {
        navigate('/Home'); // Replace with the appropriate route
      }
    } catch (error) {
      console.error('Error sending data to API:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="container form-container">
      {/* Image Section */}
      <div className="image-container">
        <img 
          src={image}
          alt="Profile" 
          className="rounded-circle" 
        />
      </div>

      {/* Form Section */}
      <div className="card form-card shadow">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username" 
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email" 
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

