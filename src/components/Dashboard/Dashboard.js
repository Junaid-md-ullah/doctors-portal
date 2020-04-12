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
                                <td>{alp.status}</td>
                            
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;