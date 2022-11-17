import { primary } from 'daisyui/src/colors';
import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoData = [
        {
            _id: 1,
            body: 'Open 9.00 am to 10.00 pm',
            name: 'Opening Hours',
            img: icon1,
            bgClass : 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            _id: 2,
            body: 'Brooklyn, NY 10036, United States',
            name: 'Visit our location',
            img: icon2,
            bgClass : 'bg-accent'
        },
        {
            _id: 3,
            body: '+000 123 456789',
            name: 'Contact us now',
            img: icon3,
            bgClass : 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
            infoData.map(card => <InfoCard
            key={card._id}
            card = {card}
            ></InfoCard>)
           }
        </div>
    );
};

export default InfoCards;