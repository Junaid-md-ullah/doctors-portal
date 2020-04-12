import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [allAppointments,setAllAppointments]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4200/appointments')
        .then(res=>res.json())
        .then(data=>{
                setAllAppointments(data);
        })
    },[allAppointments])
    let serial=1;

    return (
        <div>
            <div className="row d-flex justify-content-center" style={{padding:'50px'}}>
                <div className="col-md-3">
                <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-body d-flex justify-content-between">
                        <h1 class="card-title">09</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'12px'}}>Pending Appointments</h5>
                </div>
                </div>
            </div>

            <div className="col-md-3">
                <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                    <div class="card-body d-flex justify-content-between">
                        <h1 class="card-title">09</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'12px'}}>Today's Appointment</h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-body d-flex justify-content-between">
                        <h1 class="card-title">09</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'12px'}}>Total  Appointments</h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-body d-flex justify-content-start">
                        <h1 class="card-title">09</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'15px'}}>Total Patients</h5>
                </div>
                </div>
            </div>
            </div>
            <div className="row" style={{padding:'50px'}}>
                <h3 style={{color:'#18c7be'}}>Recent Appointments</h3>
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
                        
                        allAppointments && allAppointments.map(alp=>
                            <tr>
                                <td>{serial++}</td>
                                <td>{alp.Date}</td>
                                <td>{alp.From}</td>
                                <td>{alp.Name}</td>
                                <td>{alp.Mobile}</td>
                                <td><button>Add Prescription</button></td>
                                <td>{alp.status}</td>
                            
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default Dashboard;