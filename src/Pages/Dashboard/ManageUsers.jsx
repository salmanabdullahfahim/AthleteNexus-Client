import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAllUsers from '../../Hook/useAllUsers';

const ManageUsers = () => {

    const [users, refetch] = useAllUsers();

    const handleChangeRole = (user, role) => {
        const url = `http://localhost:5000/users/role/?id=${user._id}&role=${role}`;

        fetch(url ,{
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an ${role} Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold">Manage Users</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <img src={user?.photoUrl} alt="User" />
                                </td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <th>{user?.role ? user.role : 'Student'}</th>

                                <th>
                                    <div className="float-right">
                                        {user?.role === 'admin' && (
                                            <>
                                                <button
                                                    onClick={() => handleChangeRole(user, 'student')}
                                                    className="btn-primary mx-2 rounded-lg p-3"
                                                >
                                                    Student
                                                </button>
                                                <button
                                                    onClick={() => handleChangeRole(user, 'instructor')}
                                                    className="btn-primary mx-2 rounded-lg p-3"
                                                >
                                                    Instructor
                                                </button>
                                            </>
                                        )}
                                        {user?.role === 'instructor' && (
                                            <>
                                                <button
                                                    onClick={() => handleChangeRole(user, 'admin')}
                                                    className="btn-primary mx-2 rounded-lg p-3"
                                                >
                                                    Admin
                                                </button>
                                                <button
                                                    onClick={() => handleChangeRole(user, 'student')}
                                                    className="btn-primary mx-2 rounded-lg p-3"
                                                >
                                                    Student
                                                </button>
                                            </>
                                        )}
                                        {user?.role === 'student' && (
                                            <>
                                                <button
                                                    onClick={() => handleChangeRole(user, 'admin')}
                                                    className="btn-primary mx-2 rounded-lg p-3"
                                                >
                                                    Admin
                                                </button>
                                                <button
                                                    onClick={() => handleChangeRole(user, 'instructor')}
                                                    className="btn-primary mx-2 rounded-lg p-3"
                                                >
                                                    Instructor
                                                </button>
                                            </>
                                        )}
                                        <button className="btn btn-ghost bg-red-600 text-white">
                                            <FaTrashAlt />
                                        </button>
                                    </div>

                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
