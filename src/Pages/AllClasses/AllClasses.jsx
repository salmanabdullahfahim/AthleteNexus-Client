import React, { useContext } from 'react';
import useAllClasses from '../../Hook/useAllClasses';
import { AuthContext } from '../../Provider/AuthProvider';
import useSelectedClasses from '../../Hook/useSelectedClasses';
import Swal from 'sweetalert2';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import useInstructorRole from '../../Hook/useInstructorRole';
import useAdmin from '../../Hook/useAdmin';

const AllClasses = () => {

    const { user } = useContext(AuthContext)
    const [allClass, loading] = useAllClasses();
    const [selectedClasses, refetch] = useSelectedClasses();
    const [isInstructor] = useInstructorRole();
    const [isAdmin] = useAdmin();

    console.log(allClass);


    const handleSelectClass = (cls) => {

        if (!user) {
            Swal.fire({
                title: 'Please log in first to select a class',
                icon: 'info',
                showConfirmButton: false,
                timer: 1600,
            })
            return;
        }


        const isExist = selectedClasses.find((slcls) => slcls._id === cls._id);

        if (user && !isExist) {
            let classData = cls;
            cls.classId = cls._id;
            delete classData._id;
            cls.studentEmail = user?.email;
            // Send data to the MongoDB server

            const token = localStorage.getItem('access-token');

            axios.post('http://localhost:5000/classes/selected', classData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            title: `${classData.className} Selected Successfully!`,
                            text: 'Your class has been added!',
                            icon: 'success',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            Swal.fire({
                title: `${cls.className} already added!`,
                text: 'Select another class!',
                icon: 'error',
            });
        }
    };



    return (
        <div>

            <h2 className='text-center font-bold text-3xl text-[#6674cc] my-6'>All Classes 🧮</h2>

            <div className='grid md:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    allClass?.map(cls => <>
                        <div className="w-[300px] mx-auto rounded-md border-none shadow-md" key={cls._id}>
                            <img
                                src={cls?.classImage}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Class Name: {cls?.className}</h2>
                                <p>Instructor Name: {cls?.instructorName}</p>
                                <p>Available Seats: {cls?.availableSeats}</p>
                                <p>Price: {cls?.price}</p>
                                <div className="card-actions justify-end">
                                    <button disabled={cls?.availableSeats == 0 || isInstructor || isAdmin} className="btn btn-primary" onClick={() => handleSelectClass(cls)}>Select Class</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default AllClasses;