const express = require('express');
const router = express.Router();
const Schedule = require('../Models/homedata'); 

router.use(express.json());

// API route to add new schedule
router.post('/api/homeauth', async (req, res) => {
  const { user, start, end, duration, scheduledSlots } = req.body;

  try {
    const newSchedule = new Schedule({
      user,
      start,
      end,
      duration,
      scheduledSlots
    });

    await newSchedule.save();
    res.status(201).json({ message: "Schedule saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving schedule", error });
  }
});
/*
// API route to get all schedules
router.get('/homeauth', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedules", error });
  }
});

// API route to update a schedule
router.put('/Schedule/:id', async (req, res) => {
  const { id } = req.params;
  const { user, start, end, duration, scheduledSlots } = req.body;

  try {
    await Schedule.findByIdAndUpdate(id, {
      user,
      start,
      end,
      duration,
      scheduledSlots
    });
    res.status(200).json({ message: "Schedule updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating schedule", error });
  }
});
/*
// API route to delete a schedule
router.delete('/Schedule/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Schedule.findByIdAndDelete(id);
    res.status(200).json({ message: "Schedule deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting schedule", error });
  }
});
*/
// Export the router so it can be used in other files
module.exports = router;
