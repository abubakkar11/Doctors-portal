import React from 'react';
import img from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='' className="lg:max-w-sm lg:ml-16 rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
        </header>
         
    );
};

export default AppointmentBanner;