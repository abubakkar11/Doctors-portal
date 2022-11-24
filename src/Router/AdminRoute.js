import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Shered/Loading/Loading';

const AdminRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const [isAdmin , adminLoading] = useAdmin(user?.email);
    const location = useLocation()
    if(loading || adminLoading){
        return <Loading></Loading>
    }
    if(user && isAdmin){
       return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;