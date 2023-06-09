import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import InstructorDashBoard from "../Pages/Dashboard/InstructorDashBoard";
import StudentdashBoard from "../Pages/Dashboard/StudentdashBoard";
import Error from "../Pages/Error/Error";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AddAClass from "../Pages/Dashboard/AddAClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'adminDashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'instructorDashboard',
                element: <InstructorDashBoard></InstructorDashBoard>
            },
            {
                path: 'studentDashboard',
                element: <StudentdashBoard></StudentdashBoard>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            }
            ,
            {
                path: 'addClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }

])


export default router;