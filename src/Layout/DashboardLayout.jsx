import React from 'react';
import DashBoardNavbar from '../Pages/Navbar/DashBoardNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex relative'>

            <div className='sticky top-0 h-screen'>
                <DashBoardNavbar></DashBoardNavbar>
            </div>

            <div className=" h-full flex-1 p-7">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;