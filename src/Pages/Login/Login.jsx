import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import loginSvg from '../../../public/Login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { logIn, signInWithGoogle } = useContext(AuthContext);

    const onSubmit = (data) => {
        // console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-96 mt-28' src={loginSvg} alt="" />
            </div>

            <div className=' rounded flex flex-col justify-center'>

                <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Login</h2>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Email</label>
                            <input
                                className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                type="email"
                                {...register('email')}
                            />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <input
                                className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                type="password"
                                {...register('password')}
                            />
                        </div>

                        <button className='w-full my-5 py-2 bg-primary shadow-lg shadow-primary/50 hover:shadow-primary/40 text-white font-semibold rounded-lg'>Login</button>


                    </form>
                    <p className='text-sm text-center'>Don't have an account? <Link to='/register' className='text-primary hover:underline'>Please Register</Link></p>
                    <div>
                        <div className="divider">OR</div>
                        <button onClick={() => handleGoogleLogin()} className="btn btn-black w-full btn-outline"><span className="mr-4 text-red-600"><FaGoogle /></span> Log in with Google</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;