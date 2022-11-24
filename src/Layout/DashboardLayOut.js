import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../Shered/Header/Header';

const DashboardLayOut = () => {
    const {user} = useContext(AuthContext);
    const [ isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to={'/dashboard'}>My Appointment</Link></li>
                        { isAdmin &&
                           <>
                            <li><Link to={'/dashboard/users'}>All Users</Link></li>
                            <li><Link to={'/dashboard/adddoctor'}>Add doctor</Link></li>
                           </>
                       }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;