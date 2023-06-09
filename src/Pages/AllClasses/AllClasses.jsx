import React, { useContext } from 'react';
import useAllClasses from '../../Hook/useAllClasses';
import { AuthContext } from '../../Provider/AuthProvider';
import useSelectedClasses from '../../Hook/useSelectedClasses';
import Swal from 'sweetalert2';
import axios from 'axios';

const AllClasses = () => {

    const { user } = useContext(AuthContext)
    const [allClass] = useAllClasses();
    const [selectedClasses, refetch] = useSelectedClasses();
    console.log(allClass);

    const handleSelectClass = (cls) => {
        const isExist = selectedClasses.find((slcls) => slcls._id === cls._id);

        if (user && !isExist) {
            let classData = cls;
            cls.studentEmail = user?.email;
            console.log(classData);

            // Send data to the MongoDB server
            
            axios.post('http://localhost:5000/classes/selected', classData, {
                    headers: {
                        'Content-Type': 'application/json',
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
            <h2 className='text-center font-bold text-3xl text-primary my-6'>All Classes</h2>

            <div className='grid md:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    allClass?.map(cls => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={cls?.classImage} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class Name: {cls?.className}</h2>
                                <p>Instructor Name: {cls?.instructorName}</p>
                                <p>Available Seats: {cls?.availableSeats}</p>
                                <p>Price: {cls?.price}</p>
                                <div className="card-actions justify-end">
                                    <button disabled={cls?.availableSeats == 0} className="btn btn-primary" onClick={() => handleSelectClass(cls)}>Select Class</button>
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