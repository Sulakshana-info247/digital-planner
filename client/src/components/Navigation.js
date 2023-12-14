import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
  <nav className="Nav">
        <ul>
            <li>
                <Link to="/journal">Journal</Link>
            </li>
            <li>
                <Link to="/planner">Planner</Link>
            </li>
            <li>
                <Link to="/goals">Goals</Link>
            </li>
            </ul>
  </nav>
  )
}

export default Navigation