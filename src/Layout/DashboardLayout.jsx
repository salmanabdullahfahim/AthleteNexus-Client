import React from 'react';
import DashBoardNavbar from '../Pages/Navbar/DashBoardNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            
            <DashBoardNavbar></DashBoardNavbar>
            
            <div className=" h-screen flex-1 p-7">
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;