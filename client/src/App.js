// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Journal from './components/Journal';
import Planner from './components/Planner';
import Goals from './components/Goals';
import Home from './components/Home';


function App() {
  return (
    
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={ <Home/> }  />
              <Route path="/journal" element={<Journal />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/goals" element={<Goals />} />
            </Route>
          </Routes>
  
    
  );
}

export default App;
