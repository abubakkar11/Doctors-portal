import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = [
       {
        _id : 1,
        name : 'Fluoride Treatment',
        body : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img : img1
       },
       {
        _id : 2,
        name : 'Cavity Filling',
        body : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img : img2
       },
       {
        _id : 3,
        name : 'Teeth Whitening',
        body : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img : img3
       },
    ]
    return (
        <div className='mt-28'>
           <div  className='text-center font-semibold'>
           <h1 className='text-primary'>OUR SERVICES</h1>
           <h2 className='text-2xl'>Services We Provide</h2>
           </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                serviceData.map(card => <ServiceCard
                key={card._id}
                card={card}
                ></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;