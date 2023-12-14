// server/models/goals.js
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  targetDate: {
    type: Date,
  }
});

const Goals = mongoose.model('Goals', goalSchema);

// CRUD Operations

// Create a new goal
Goals.createGoal = async (text,targetDate) => {
  try {
    //console.log(text);
    const newGoal = new Goals({ text,targetDate });
    await newGoal.save();
    return newGoal;
  } catch (error) {
    throw error;
  }
};

// Read all goals
Goals.getAllGoals = async () => {
  try {
    const goals = await Goals.find().sort({ createdAt: -1 });
    return goals;
  } catch (error) {
    throw error;
  }
};

// Update a goal by ID
Goals.updateGoalById = async (id, newText, newTargetDate) => {
  try {
    const updatedGoal = await Goals.findByIdAndUpdate(
      id,
      { text: newText },
      {targetDate : targetDate},
      { new: true }
    );
    return updatedGoal;
  } catch (error) {
    throw error;
  }
};

// Delete a goal by ID
Goals.deleteGoalById = async (id) => {
  try {
    const deletedGoal = await Goals.findByIdAndDelete(id);
    return deletedGoal;
  } catch (error) {
    throw error;
  }
};

module.exports = Goals;
