import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useEnrolledClasses from '../../Hook/useEnrolledClasses';

const MyEnrolledClasses = () => {

   const [enrolledClasses] = useEnrolledClasses();


    return (
        <div>
            <h1 className="text-2xl font-semibold">My Enrolled Classes</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>

                        </tr>
                    </thead>
                    <tbody>
                        {enrolledClasses.map((enrolledClass, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>

                                <td>{enrolledClass?.className}</td>
                                <td>{enrolledClass?.price}</td>
                                <td>{enrolledClass?.transactionId}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;