import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'

const Goal = ({goal}) => {
    let now = new Date();
    let tDate = new Date(goal.targetDate);
    const dateColor = now>tDate ? 'Red' : 'Green'
    console.log(goal._id)
    console.log(goal.text)
    console.log(goal.targetDate);
    const URL = 'http://localhost:3001';


    const navigate = useNavigate()

    const handleEdit = async (goal) => navigate(`/goals/id=${goal._id}`,{state:{goal}});

    const handleDelete =  async (goalId) => {
        try {
          console.log(`deleting ${goalId}`);
          const response = await fetch(`${URL}/api/goals/${goalId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
           // body: JSON.stringify({ id: goalId  }),
          });
    
          if (response.ok) {
            console.log('Goal deleted successfully');
            navigate('/goals')
          } else {
            console.error('Failed to delete goal');
          }
        } catch (error) {
          console.error('Error deleting goal:', error);
        }
      };

  return (
        
        <tr className='goalsRow' key={goal._id} >
          <td>{goal.text} </td>
          <td style={{ width:'30%', color: `${dateColor}`}}>{
            new Date(goal.targetDate).toLocaleString('en-US',{
            day:'numeric', month:'long', year:'numeric' })}</td>

          <td style={{width:'20%'}}> <button onClick={()=>handleEdit(goal)}><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button onClick={()=>handleDelete(goal._id)}><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
        
  )
}

export default Goal