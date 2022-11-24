import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';


const BookingModal = ({ treatment, selectedDate, setTreatment ,refetch}) => {
    const {user} = useContext(AuthContext)
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const patientName = form.name.value;
        const slot = form.slot.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
        }
        console.log(booking)
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setTreatment(null)
                toast.success('Bookings SuccessFully')
                refetch()
            }
            else{
                if(!user){
                    return toast.error('Please Login Fist')
                  }
                toast.error(data.message)
            }
        })
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" disabled name='date' value={date} className="input input-bordered w-full mt-1" />
                        <select name='slot' className="select select-bordered w-full mt-2">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" defaultValue={user?.displayName} disabled={user?.uid} name='name' className="input input-bordered w-full mt-2 " required />
                        <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered w-full mt-2" required />
                        <input type="text" placeholder="Email" defaultValue={user?.email} disabled={user?.uid} name='email' className="input input-bordered w-full mt-2" required />
                        <input type="submit" className='w-full p-2 mt-2 rounded-md className="btn btn-primary text-white  bg-gradient-to-r from-primary to-secondary"' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;