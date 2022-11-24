import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const DashboardTable = () => {
  const { user } = useContext(AuthContext)
  const { data: myAppointments = [] } = useQuery({
    queryKey: ['myAppointments', user?.email],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
               authorization: `bearer ${localStorage.getItem('Access-Token')}` 
            }
        });
        const data = await res.json();
        return data;
    }
})
  console.log(myAppointments)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {
              myAppointments?.map((myAppointment , i ) =>
                <tr>
                  <th>{i+1}</th>
                  <td>{myAppointment.patient}</td>
                  <td>{myAppointment.treatment}</td>
                  <th>{myAppointment.appointmentDate}</th>
                  <td>{myAppointment.slot}</td>
                </tr>)
            }
          </tbody>

        </table>
      </div>


    </div>
  );
};

export default DashboardTable;