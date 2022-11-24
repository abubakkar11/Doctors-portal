import React from 'react';
import DashboardTable from './MyAppointment';

const Dashboard = () => {
    return (
        <div>
            <div>
               <h1 className='text-3xl font-semibold' >My Appointment</h1>
            </div>
            <div className='mt-5'>
            <DashboardTable></DashboardTable>
            </div>
        </div>
    );
};

export default Dashboard;