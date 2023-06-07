import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import loginSvg from '../../../public/Login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        // console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, { relative: true });
            }).catch(error => {
                setError(error.message)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong',
                    showConfirmButton: false,
                    timer: 1500
                });


            })
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);

            });
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
                                {...register('email', { required: true })}
                                placeholder='Enter email address'
                            />
                            {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Email field is required</p>}
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <div className='relative'>
                                <input
                                    className='w-full rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: true })}
                                />
                                <button
                                    type='button'
                                    className='absolute top-5 right-2'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password field is required</p>}
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