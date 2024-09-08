import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file

const HomePage = () => {
  // Initial state for the form fields
  const [data, setData] = useState({
    user: "user@gmail.com",
    start: "2024-08-30T03:30:00.000Z",
    end: "2024-08-30T07:00:00.000Z",
    duration: 30,
    scheduledSlots: []
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle slot input change
  const handleSlotChange = (index, e) => {
    const { value } = e.target;
    const newSlots = [...data.scheduledSlots];
    newSlots[index] = value;
    setData(prevData => ({
      ...prevData,
      scheduledSlots: newSlots
    }));
  };

  // Add a new slot
  const addSlot = () => {
    setData(prevData => ({
      ...prevData,
      scheduledSlots: [...prevData.scheduledSlots, '']
    }));
  };

  // Remove a slot
  const removeSlot = (index) => {
    setData(prevData => ({
      ...prevData,
      scheduledSlots: prevData.scheduledSlots.filter((_, i) => i !== index)
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/homeauth', data);
      console.log('Data sent successfully:', response.data);
      // Optionally, handle success (e.g., display a success message)
    } catch (error) {
      console.error('Error sending data:', error);
      // Optionally, handle error (e.g., display an error message)
    }
  };

  const { user, start, end, duration, scheduledSlots } = data;

  // Convert start and end dates to local strings for display
  const startDate = new Date(start).toLocaleString();
  const endDate = new Date(end).toLocaleString();

  return (
    <div className="home-page">
      <h3>Welcome, {user}</h3>

      <form onSubmit={handleSubmit}>
        <div className="schedule-info">
          <label>
            <h5>User Email:</h5>
            <input
              type="email"
              name="user"
              value={user}
              onChange={handleChange}
            />
          </label>
          <label>
            <h5>Start Time:</h5>
            <input
              type="datetime-local"
              name="start"
              value={new Date(start).toISOString().substring(0, 16)}
              onChange={(e) => setData(prevData => ({
                ...prevData,
                start: new Date(e.target.value).toISOString()
              }))}
            />
          </label>
          <label>
            <h5>End Time:</h5>
            <input
              type="datetime-local"
              name="end"
              value={new Date(end).toISOString().substring(0, 16)}
              onChange={(e) => setData(prevData => ({
                ...prevData,
                end: new Date(e.target.value).toISOString()
              }))}
            />
          </label>
          <label>
            <h5>Duration:</h5>
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="scheduled-slots">
          <h3>Scheduled Slots</h3>
          {scheduledSlots.length === 0 ? (
            <p>No slots scheduled.</p>
          ) : (
            <ul>
              {scheduledSlots.map((slot, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={slot}
                    onChange={(e) => handleSlotChange(index, e)}
                  />
                  <button type="button" onClick={() => removeSlot(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <button type="button" onClick={addSlot}>Add Slot</button>
          <button type="submit">Submit Schedule</button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
