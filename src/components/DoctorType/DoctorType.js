import React from 'react';
import Modal from './Modal/Modal';
import './DoctorType.css';

const DoctorType = (props) => {
    const {type,time,from,available}=props.departments;
    const fullDate=props.fullDate;
    return (
        
            
            <div>
                <p>{type}</p>
                <p>{time}</p>
                <p>{available}</p>
                <Modal from={from} fullDate={fullDate} ></Modal>
            </div>
                
            
    );
};

export default DoctorType;