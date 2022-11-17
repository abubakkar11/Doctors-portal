import React from 'react';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import DoctorAppointment from './DoctorAppointment/DoctorAppointment';
import Exceptional from './Exceptional/Exceptional';
import InfoCards from './InfoCards/InfoCards';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <DoctorAppointment></DoctorAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;