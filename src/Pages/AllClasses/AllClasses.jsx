import React from 'react';
import useAllClasses from '../../Hook/useAllClasses';

const AllClasses = () => {

    const [allClass] = useAllClasses();
    console.log(allClass);
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
                                    <button disabled={cls?.availableSeats == 0} className="btn btn-primary">Select Class</button>
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