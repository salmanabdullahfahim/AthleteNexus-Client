import React, { useContext } from 'react';
import useAllClasses from '../../Hook/useAllClasses';
import { AuthContext } from '../../Provider/AuthProvider';

const AllClasses = () => {

    const { user } = useContext(AuthContext)
    const [allClass] = useAllClasses();
    console.log(allClass);

    const handleSelectClass = (cls) => {
        if (user) {
            let classData = cls;
            cls.studentEmail = user?.email;
            console.log(classData);

        }
        else {
            console.log('user not found')
        }

    }
    return (
        <div>
            <h2 className='text-center font-bold text-3xl text-primary my-6'>All Classes</h2>

            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
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