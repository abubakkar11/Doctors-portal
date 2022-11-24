import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Shered/Loading/Loading';


const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate ,"PP")
    const {data:appointmentOptions =[] , refetch , isLoading} = useQuery({
        queryKey:['appointmentOptions', date],
        queryFn :() =>  fetch(`http://localhost:5000/appointmentOptions?date=${date}` ,)
        .then(res => res.json())
    })
   
    if(isLoading){
        return <Loading></Loading>
    }
   
    return (
        <section className='my-6'>
            <h2 className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment  &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
        </ section>
    );
};

export default AvailableAppointments;