const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    user: String,
    start: Date,
    end: Date,
    duration: Number,
    scheduledSlots: [String]
  });
  
  // Create the model
  module.exports = mongoose.model('Schedule', scheduleSchema);