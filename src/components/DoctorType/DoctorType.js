import React from 'react';
import Modal from './Modal/Modal';

const DoctorType = (props) => {
    const {type,time,from,available}=props.departments;
    const fullDate=props.fullDate;
    return (
        <div>
            <div>
                <p>{type}</p>
                <p>{time}</p>
                <p>{available}</p>
                <Modal from={from} fullDate={fullDate} ></Modal>
            </div>
        </div>
    );
};

export default DoctorType;