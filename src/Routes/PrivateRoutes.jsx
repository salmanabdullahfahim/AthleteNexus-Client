import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center my-6'>
               <HashLoader color="#6674cc" />
             </div>
    }

    if (user) {
        return children;
    }
    else{
        Swal.fire({
            icon: 'warning',
            title: 'You need to login first.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (<Navigate state={{ from: location }} to='/login' replace></Navigate>);
};
export default PrivateRoutes;