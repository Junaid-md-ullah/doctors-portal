import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Appointment from './components/Appoinment/Appointment';
import AddDepart from './components/addDepartments/AddDepart';

const CalendarContext=createContext()

function App() {
  return (
    <div className="App">
      <Appointment></Appointment>
    </div>
  );
}

export default App;
