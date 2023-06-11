import React from 'react';
import useInstructorClasses from '../../Hook/useInstructorClasses';


const MyClasses = () => {
    const [instructorClasses] = useInstructorClasses();

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-8">My Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Feedback</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total <br /> Enrolled <br /> Students</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructorClasses?.map((cls, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.classImage} alt={cls.className} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cls.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="md:max-w-4xl h-full">{cls.feedback}</td>
                                <td>{cls.price}</td>
                                <td>{cls.status}</td>
                                <td>{cls.totalEnrolled}</td>
                                <th>
                                    <button className="btn btn-primary btn-xs">Update</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
