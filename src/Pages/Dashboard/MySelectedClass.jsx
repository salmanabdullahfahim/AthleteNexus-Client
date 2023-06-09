import React, { useContext } from 'react';

import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useSelectedClasses from '../../Hook/useSelectedClasses';
import { AuthContext } from '../../Provider/AuthProvider';

const MySelectedClass = () => {
    const [selectedClasses, refetch] = useSelectedClasses();

    const {user} = useContext(AuthContext)

    const handleDeleteClass = (cls) => {
        console.log('from validate');
        // validate
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleSwalConfirm(cls);
            }
        });

        const handleSwalConfirm = (cls) => {
            const url = `http://localhost:5000/classes/selected/?id=${cls._id}&email=${user?.email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            `${cls?.className} has been deleted!`,
                            'success'
                        );
                    }
                });
        };
    };



    return (
        <div>
            <h1 className="text-2xl font-semibold">My Selected Classes</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses?.map((cls) => (
                        <tr key={cls._id}>
                            <td>
                                <img className="h-10 w-10" src={cls?.classImage} alt="" />
                            </td>
                            <td>{cls.className}</td>
                            <td>{cls.instructorName}</td>
                            <td>{cls.availableSeats}</td>
                            <td>{cls.price}</td>
                            <td>
                                <button onClick={() => handleDeleteClass(cls)} className="btn btn-ghost bg-red-600 text-white">
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MySelectedClass;
