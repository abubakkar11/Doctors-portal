import React from 'react';
import Appointment from '../../../assets/images/appointment.png'
import Doctor from '../../../assets/images/doctor.png'

const DoctorAppointment = () => {
    return (
      <section className='mt-28'
      style={
        { background:`url(${Appointment})`,
        backgroundSize : 'cover'
     }
      }
      >
          <div className="hero rounded-md p-5">
        <div className="hero-content flex-col justify-around items-center lg:flex-row">
          <img src={Doctor} alt='' className="lg:w-[450px]  hidden md:block lg:block -mt-32 rounded-lg shadow-2xl" />
          <div className='lg:w-1/2'>
            <h1 className="text-1xl font-bold text-primary py-2">Appointment</h1>
            <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </section>
    );
};

export default DoctorAppointment;