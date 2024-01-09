// server/routes/goalsRoute.js
const express = require('express');
const router = express.Router();
const Goal = require('../models/goals');

// POST /api/goals
router.post('/', async (req, res) => {
  try {
   
    const {text,targetDate } = req.body;
    const newGoal = await Goal.createGoal(text,targetDate);
    res.status(201).json(newGoal);
  } catch (error) {
    console.error('Error creating goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/goals
router.get('/', async (req, res) => {
   
  try {
    const goals = await Goal.getAllGoals();
    console.log('goals : ',goals)
    res.json(goals);
  } catch (error) {
    console.error('Error getting goals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT /api/goals/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
   
    const { text,targetDate } = req.body;
    console.log(` id : ${id} , text : ${text} , targetDate: ${targetDate}`); 
    const updatedGoal = await Goal.updateGoalById(id, text, targetDate);
    res.json(updatedGoal);
  } catch (error) {
    console.error('Error updating goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /api/goals/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(` deleting id : ${id}`);
    const deletedGoal = await Goal.deleteGoalById(id);
    res.json(deletedGoal);
  } catch (error) {
    console.error('Error deleting goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


// need to format target Date, 
// targetDate should be validated for future date 
// display goals with CSS 