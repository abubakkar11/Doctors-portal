import React from 'react';
import bg from '../../../assets/images/appointment.png'
import Button from '../../../Button/Button';

const ContactUs = () => {
    return (
        <section className='p-10 mt-16'
        style={{
          background:`url(${bg})`
        }}
        >
            <div className='text-center'>
               <h3 className='text-2xl font-semibold text-primary '>Contact Us</h3>
               <h3 className='text-3xl text-white'>Stay connected with us</h3>
               <div className='mt-8 grid grid-cols-1 lg:w-1/3 mx-auto'>
               <input type="text" placeholder="Email Address" className="input input-bordered " />
               <input type="text" placeholder="Subject" className="input input-bordered mt-4 " />
               <textarea className="textarea mt-4" placeholder="Message"></textarea>
               </div>
               <div className='mt-4'>
               <Button >Submit</Button>
               </div>
            </div>
        </section>
    );
};

export default ContactUs;