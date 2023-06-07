import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import RegisterImage from '../../../public/SignUp.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {

        if (data.password !== data.confirmPassword) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password do not match.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const registeredUsers = result.user;
                console.log(registeredUsers);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Register Successful!',
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, { replace: true });

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                            })
                    })

                    
            })


    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-96 mt-24 ' src={RegisterImage} alt="" />
            </div>

            <div className='bg-white flex flex-col justify-center'>
                <form className='max-w-[450px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-4xl text-gray-800 font-bold text-center'>Register</h2>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Name</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="text"
                            {...register('name',)}
                            placeholder='Enter Name'
                        />

                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Email</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="text"
                            {...register('email', { required: true })}
                            placeholder='Enter email address'
                        />
                        {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Email field is required</p>}
                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Photo URL</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="url"
                            {...register('photoURL')}
                            placeholder='Enter photoURL'
                        />

                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Password</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password"

                        />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Confirm Password</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="password"
                            {...register('confirmPassword')}
                        />
                    </div>

                    <button className='w-full my-5 py-2 bg-primary shadow-lg shadow-primary-500/50 hover:shadow-primary-400/40 text-white font-semibold rounded-lg'>Register</button>
                    <p className='text-gray-800 text-center text-sm'>Already have an account?
                        <Link to="/login" className='text-primary hover:underline'>Please LogIn</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;