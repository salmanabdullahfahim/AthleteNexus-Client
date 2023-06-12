import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';
import useInstructorClasses from '../../Hook/useInstructorClasses';


const img_hosting_token = import.meta.env.VITE_Imgbb_Key;

const UpdateClass = () => {
  const id = useParams();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const navigate = useNavigate();
  const [instructorClasses] = useInstructorClasses();

  const cls = instructorClasses?.find((cls) => parseFloat(cls._id) === parseFloat(id.id));

  const onSubmit = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Update this class',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#50C878',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update Class!',
    }).then((result) => {
      if (result.isConfirmed) {
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
                classId: id.id,
                className: data.className,
                classImage: imgURL,
                availableSeats: data.availableSeats,
                price: data.price,
                
              };

              handleSwalFireWithUpdate(classData);
            }
          })
          .catch((err) => {
            Swal.fire('Something went wrong!', `${err.message}`, 'error');
          });
      }
    });
  };

  const handleSwalFireWithUpdate = (classData) => {
    console.log(classData);
    const token = localStorage.getItem('access-token');

    axios
      .patch('https://athlete-nexus-server.vercel.app/classes/update', { classData }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${classData.className} has been updated!`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/myClass', { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="text-2xl font-semibold ">
        Update Class: <span className='text-primary font-bold'>{cls?.className}</span>
      </h1>
      <div className='w-full mx-auto my-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 md:w-9/12 mx-auto p-4 bg-gray-100 shadow-md rounded-md'>
          <div className='flex gap-4'>
            <div className='mb-4 md:w-1/2'>
              <label className='text-gray-700 font-semibold'>Class Name:</label>
              <input
                type='text'
                defaultValue={cls?.className}
                {...register('className', { required: true })}
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
                defaultValue={user?.displayName}
                readOnly
                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div className='mb-4 md:w-1/2'>
              <label className='text-gray-700 font-semibold'>Instructor Email:</label>
              <input
                type='email'
                defaultValue={user?.email}
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
                defaultValue={cls?.availableSeats}
                {...register('availableSeats', { required: true })}
                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div className='mb-4 md:w-1/2'>
              <label className='text-gray-700 font-semibold'>Price:</label>
              <input
                type='number'
                defaultValue={cls?.price}
                {...register('price', { required: true })}
                className='w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
          </div>
          <div>
            <input
              type='submit'
              value='Update Class'
              className='px-4 py-2 my-3 w-full font-semibold text-white bg-[#6674cc] rounded-md hover:bg-[#6674cc]/80 focus:outline-none focus:bg-blue-600'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateClass;
