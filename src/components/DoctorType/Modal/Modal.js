import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { useForm } from 'react-hook-form';
const Modal1 = (props) => {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
       
      // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
    //   Modal.setAppElement('Modal1')
       
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
       
      
        function closeModal(){
          setIsOpen(false);
        }
    const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
      const appointmentdetail={Date:props.fullDate,Name:data.name, Mobile:data.phone,Gender:data.gender,Age:data.age,status:"pending"};
      console.log(appointmentdetail);
      fetch('http://localhost:4200/addAppointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(appointmentdetail) // body data type must match "Content-Type" header
    })
      .then(res => res.json())
      .then(appointments => {
        console.log(appointments);
    
      })
   }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

                        <p>{props.fullDate}</p>
                        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>

      
                        {/* include validation with required or other standard HTML validation rules */}
                        <input  className="form-control" type="text" name="name" placeholder="Your Name" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span>This field is required</span>}
                        <br/>
                        <input className="form-control" type="text" name="phone" placeholder="Your Phone Number" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.phone && <span>This field is required</span>}
                        <br/>

                        <select className="form-control"  name="gender" ref={register({ required: true })} >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {/* errors will return when field validation fails  */}
                        {errors.gender && <span>This field is required</span>}
                        <br/>
                        <input className="form-control" type="number" name="age" placeholder="Your Age" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.age && <span>This field is required</span>}
                        <br/>
                        <input type="submit" />
                        <button onClick={closeModal}>close</button>
                     </form>

                     </Modal>
            
                
        </div>
    );
};

export default Modal1;