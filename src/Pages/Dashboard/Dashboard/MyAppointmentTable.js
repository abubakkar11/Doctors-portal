import React from 'react';

const MyAppointmentTable = ({ myAppointment }) => {
    const {patient , treatment , slot} = myAppointment;
    console.log({myAppointment})
    return (
        <div>
            <tbody>
            <tr>
                <tr>{}</tr>
                <th>{patient}</th>
                <td>{treatment}</td>
                <td>{slot}</td>
            </tr>
            </tbody>
           
        </div>
    );
};

export default MyAppointmentTable;