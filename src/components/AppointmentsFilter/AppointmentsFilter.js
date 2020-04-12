import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
const AppointmentsFilter = () => {
    let serial=1;
    const months=['Jan','Feb','Mar','Apr','May','June','July'];
    const [appointments,setAppointments]=useState([])
    const [date,setDate]=useState(new Date())
    const onChange=(date)=>{
        setDate(date);
    }
    const date1=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const fullDate=`${date1} ${months[month]} ${year}`;
    const appointmentsDateWise=appointments.filter(ap=>ap.Date==fullDate)
    useEffect(()=>{
        fetch('http://localhost:4200/appointments')
        .then(res=>res.json())
        .then(data=>{
                setAppointments(data);
        })
    },[appointments])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <Calendar onChange={onChange} value={date}></Calendar>
                </div>

                <div className="col-md-6">
                <table className="table">
                <thead>
                    <tr className="text-center">
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Date</th>
                        <th className="text-secondary" scope="col">Time</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone No.</th>
                        <th className="text-secondary" scope="col">Prescription</th>
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        appointmentsDateWise && appointmentsDateWise.map(alp=>
                            <tr>
                                <td>{serial++}</td>
                                <td>{alp.Date}</td>
                                <td>{alp.From}</td>
                                <td>{alp.Name}</td>
                                <td>{alp.Mobile}</td>
                                <td>{alp.status}</td>
                            
                            </tr>
                        )
                    }
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentsFilter;