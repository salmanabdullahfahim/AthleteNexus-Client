import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import RegisterImage from '../../../public/SignUp.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    
    const { register, handleSubmit } = useForm();
    const { createUser} = useContext(AuthContext);

    const onSubmit = (data) => {

        if (data.password !== data.confirmPassword) {
            return alert('Passwords do not match')
        }

        createUser(data.email, data.password)
        .then(result => {
            const registeredUsers = result.user;
            console.log(registeredUsers);
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
                            {...register('name')}
                        />
                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Email</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="text"
                            {...register('email')}
                        />
                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Photo URL</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="text"
                            {...register('photoURL')}
                        />
                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Password</label>
                        <input
                            className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="password"
                            {...register('password')}
                        />
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