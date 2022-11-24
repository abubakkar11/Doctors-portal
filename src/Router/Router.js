import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../Layout/DashboardLayOut";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/Dashboard/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SighUp from "../Pages/Login/SighUp/SighUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children :[
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/sighup',
                element: <SighUp></SighUp>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children : [
            {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
            },
            {
                path : '/dashboard/users',
                element : <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path : '/dashboard/adddoctor',
                element : <AdminRoute> <AddDoctor></AddDoctor></AdminRoute>
            },
        ]
    }
])
export default router