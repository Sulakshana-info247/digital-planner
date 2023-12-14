// client/src/components/Goals.js
import React, { useState, useEffect } from 'react';

const Goals = () => {
  const [newGoal, setNewGoal] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [goals, setGoals] = useState([]);
  const URL = 'http://localhost:3001';

  useEffect(() => {
    // Fetch goals from the backend when the component mounts
    fetchGoals();
  }, []); // Empty dependency array ensures this effect runs only once

  
  const fetchGoals = async () => {
    try {
      const response = await fetch(`${URL}/api/goals`);
      if (response.ok) {
        const data = await response.json();
        setGoals(data);
      } else {
        console.error('Failed to fetch goals');
      }
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };

  const handleAddGoal = async () => {
    try {
      // Make a POST request to add a new goal
      const response = await fetch(`${URL}/api/goals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newGoal , targetDate: targetDate}),
      });

      if (response.ok) {
        console.log('Goal added successfully');
        // Fetch goals again after adding a new goal
        fetchGoals();
        // Optionally, you can reset the form or update the UI as needed
        setNewGoal('');
        setTargetDate('');
      } else {
        console.error('Failed to add goal');
      }
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  return (
    <div className='Goals'>
      <h2>Goals Page</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
         <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}>{goal.text}  - {goal.targetDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
