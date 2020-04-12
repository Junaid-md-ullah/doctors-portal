import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Mask1 from '../../images/Mask Group 1.png';
import {
    Link,
  } from "react-router-dom";
import DoctorType from '../DoctorType/DoctorType';
const Appointment = () => {
    const [departments,setDepartments]=useState([]);
    const months=['Jan','Feb','Mar','Apr']
    const [date,setDate]=useState(new Date());
    const onChange=(date)=>{
        setDate(date);
    }

    const date1=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const fullDate=`${date1} ${months[month]} ${year}`;

    useEffect(()=>{
        fetch('http://localhost:4200/departs')
        .then(res=>res.json())
        .then(data=>{
                setDepartments(data);
        })
    },[departments])

    
    return (
        <div>
               <div className="container">
                   <div className="row d-flex justify-content-center" style={{padding:'70px'}}>
                        <div className="col-md-6 align-items-center" style={{textAlign:'left'}}>
                            <h1>Appointment</h1>
                            <Calendar onChange={onChange} value={date}></Calendar> 
                        </div>
                        <div className="col-md-6 align-items-center">
                            <img src={Mask1} width="500px" alt=""/>
                        </div>
                   </div>

               </div>
               
               <div>
                    {
                        date && <h3>Appointments available on - {fullDate}</h3>
                    }
               </div>
                
                   

                    {
                        departments.map(departments=>
                
                        
                        <DoctorType 
                        className="col-md-4"
                        departments={departments}
                        fullDate={fullDate}
                        >
                        </DoctorType >
                        )
                    }
                    
                    


        </div>
    );
};

export default Appointment;