import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appointment from './components/Appoinment/Appointment';
import Dashboard from './components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/dashboard">
        <Dashboard></Dashboard>
        </Route>
      <Route path="/getAppointment">
      <Appointment></Appointment>
      </Route>
      
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
