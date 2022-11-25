import React from 'react';

const AppointmentOption = ({ appointmentOption , setTreatment}) => {
    const {name ,slots} = appointmentOption
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className=" text-2xl font-bold text-secondary text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                   <label htmlFor="my-modal-3"
                   disabled = {slots.length === 0}
                     className="btn btn-primary text-white  bg-gradient-to-r from-primary to-secondary"
                     onClick={() => setTreatment(appointmentOption)}
                     >Book Appointment
                     </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;