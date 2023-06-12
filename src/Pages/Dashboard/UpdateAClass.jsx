import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useAllClasses from '../../Hook/useAllClasses';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Imgbb_Key;

const UpdateAClass = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [allClass] = useAllClasses();
    const { register, handleSubmit, reset } = useForm();

    const updateClass = allClass.find(cls => parseFloat(cls._id) === parseFloat(id));

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.classImage[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const classData = {
                        className: data.className,
                        classImage: imgURL,
                        availableSeats: data.availableSeats,
                        price: data.price

                    };
                    handleSwalFireWithUpdate(classData);
                }
            })
            .catch((err) => {
                Swal.fire(
                    'Something went wrong!',
                    `${err.message}`,
                    'error'
                );
            });
    }

    const handleSwalFireWithUpdate = (classData) => {
        fetch(`http://localhost:5000/classes/update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    reset();
                    Swal.fire(
                        `${classData.className} Updated Successfully!`,
                        'Your class has been Updated.',
                        'success'
                    );
                }
            })
            .catch((err) => console.log(err));
    };



    return (
        <>
            <h1 className="text-2xl font-semibold ">Update Class - {updateClass?.className}</h1>
            <div className='w-full mx-auto my-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 md:w-9/12 mx-auto p-4 bg-gray-100 shadow-md rounded-md'>
                    <div className='flex gap-4'>
                        <div className='mb-4 md:w-1/2'>
                            <label className='text-gray-700 font-semibold'>Class Name:</label>
                            <input
                                type='text'
                                {...register('className', { required: true })} defaultValue={updateClass?.className}
                                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            />
                        </div>
                        <div className='mb-4 md:w-1/2'>
                            <label className='text-gray-700 font-semibold'>Class Image:</label>
                            <input
                                type='file'
                                {...register('classImage', { required: true })}
                                className="file-input bg-indigo-100 h-11 file-input-bordered w-full "
                            />
                        </div>
                    </div>
                    <div className='md:flex gap-4'>
                        <div className='mb-4 md:w-1/2'>
                            <label className='text-gray-700 font-semibold'>Instructor Name:</label>
                            <input
                                type='text'
                                value={user?.displayName}
                                readOnly
                                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            />
                        </div>
                        <div className='mb-4 md:w-1/2'>
                            <label className='text-gray-700 font-semibold'>Instructor Email:</label>
                            <input
                                type='email'
                                value={user?.email}
                                readOnly
                                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            />
                        </div>
                    </div>

                    <div className='md:flex gap-4'>
                        <div className='mb-4 md:w-1/2'>
                            <label className='text-gray-700 font-semibold'>Available Seats:</label>
                            <input
                                type='number'
                                {...register('availableSeats', { required: true })} defaultValue={updateClass?.availableSeats}
                                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            />
                        </div>
                        <div className='mb-4 md:w-1/2'>
                            <label className='text-gray-700 font-semibold'>Price:</label>
                            <input
                                type='number'
                                {...register('price', { required: true })} defaultValue={updateClass?.price}
                                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            type='submit'
                            value='Update Class'
                            className='px-4 py-2 my-3 w-full font-semibold text-white bg-primary rounded-md hover:bg-primary/80  focus:outline-none focus:bg-blue-600'
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateAClass;