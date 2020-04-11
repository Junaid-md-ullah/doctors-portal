import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
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
               
               <Calendar onChange={onChange} value={date}></Calendar> 
                {
                    date && <p>{fullDate}</p>
                }

                {
                    departments.map(departments=>
                    <DoctorType
                        departments={departments}
                        fullDate={fullDate}
                    >

                    </DoctorType >)
                }
        </div>
    );
};

export default Appointment;