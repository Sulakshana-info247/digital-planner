import {useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react';

const EditGoal = () => {
    
        let  {state:{goal}} = useLocation();
        console.log(goal);
        const id= goal._id;
        const [newGoal,setNewGoal] = useState(goal.text);
        const [targetDate, setTargetDate] = useState(goal.targetDate.substr(0, 10));
        const navigate = useNavigate()
        const URL = 'http://localhost:3001';
      
    const onDateChange = e => setTargetDate(e.target.value)

    const handleUpdateGoal = async () => {
    
        
        try {
          // Make a PATCH request to update a  goal
            const updateURL=`${URL}/api/goals/${id}`
            console.log(targetDate)
            const response = await fetch(updateURL, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: newGoal , targetDate: targetDate }),
          });
    
          if (response.ok) {
            console.log('Goal Updated successfully');
            navigate('/goals')
          } else {
            console.error('Failed to update goal');
          }
        } catch (error) {
          console.error('Error updating goal:', error);
        }
      };

    return (
          
            <form onSubmit={e=>e.preventDefault()}>
           <label> Edit your Goal </label>
            <input
              type="text"
              placeholder="Enter your goal"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
            />
            <label> Edit your Goal </label>
             <input
              type="date"
              value={targetDate}
              onChange={onDateChange}
            />
            <button onClick={handleUpdateGoal}>Update Goal</button>
          </form>
        )
        } 
      
    
  
export default EditGoal