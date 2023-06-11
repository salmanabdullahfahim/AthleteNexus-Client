import React, { useState } from "react";

import Swal from "sweetalert2";
import useClasses from "../../Hook/useClasses";

const ManageClasses = () => {
    const [classes, refetch] = useClasses()
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedback, setFeedback] = useState("");

    const handleUpdateStatus = (cls, status) => {
        const token = localStorage.getItem('access-token');
        const url = `http://localhost:5000/classes/status/?id=${cls._id}&status=${status}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cls.name} is ${status}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };

    const handleSendFeedback = (cls) => {
        setSelectedClass(cls);
        window.customModal.showModal();
    };

    const handleSubmitFeedback = (event) => {
        event.preventDefault();
        console.log(feedback);
        if (feedback !== "") {
            console.log(`Feedback for class ${selectedClass}: ${feedback}`);

            const url = `http://localhost:5000/classes/feedback/?id=${selectedClass._id}&feedback=${feedback}`;
            const token = localStorage.getItem('access-token');
            fetch(url, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Feedback sent to ${selectedClass?.instructorName} for ${selectedClass?.className} successfully!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });

            setFeedback("");
            setSelectedClass(null);
            window.customModal.close();
        }
        else {
            window.customModal.close();
        }
    };

    return (
        <div>
            <h1>Manage Classes</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class - Instructor Name and email </th>
                        <th>Class Name</th>
                        <th>Available <br /> Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((cls, index) => (
                        <tr key={cls._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cls?.instructorName}</div>
                                        <div className="text-sm opacity-50">{cls?.instructorEmail}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{cls.className}</td>
                            <td>{cls.availableSeats}</td>
                            <td>{cls.price}</td>
                            <td>{cls.status}</td>
                            <td className="flex gap-2 items-center float-left">
                                {cls?.status === 'denied' && <button className="btn btn-info w-full" onClick={() => handleSendFeedback(cls)}>Send Feedback</button>}
                                {cls?.status === "pending" && (
                                    <div className="flex-col">
                                        <button className="btn btn-sm btn-success w-full mb-1" onClick={() => handleUpdateStatus(cls, "approved")}>Approve</button>
                                        <button className="btn btn-sm btn-error w-full" onClick={() => handleUpdateStatus(cls, "denied")}>Deny</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <dialog id="customModal" className="modal">
                <div className="modal-box">
                    <button onClick={() => window.customModal.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmitFeedback} method="dialog">
                        <h3 className="font-bold text-lg mb-3">Give a feedback</h3>
                        <p>Instructor Name: {selectedClass?.instructorName}</p>
                        <p>Class Name: {selectedClass?.className}</p>
                        <textarea
                            className="border rounded-lg p-3 my-4"
                            rows={4}
                            cols={50}
                            name="feedback"
                            placeholder="Enter your feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                        <button className="btn btn-primary">Send</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ManageClasses;
