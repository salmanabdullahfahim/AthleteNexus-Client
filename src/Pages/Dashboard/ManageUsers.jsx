import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAllUsers from '../../Hook/useAllUsers';

const ManageUsers = () => {

    const [users, refetch] = useAllUsers();
    console.log(users)

    const handleChangeRole = (user, role) => {
        const url = `http://localhost:5000/users/role/?id=${user._id}&role=${role}`;

        fetch(url, {
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

    const handleDeleteUser = (user) => {
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
                handleSwalConfirm();
            }
        });

        const handleSwalConfirm = () => {
            const url = `http://localhost:5000/users?id=${user._id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: `${user?.name} has been deleted!`,
                            icon: 'success'
                        });
                    }
                });
        };
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
                                    <img src={user?.photoURL} className='inline-block h-12 w-12 border border-primary rounded-full' alt="User" />
                                </td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <th>{user?.role ? user.role : 'Student'}</th>

                                <th>
                                    <div className="float-right">
                                        <button disabled={user?.role === 'admin' ? 'disabled' : ''} onClick={() => handleChangeRole(user, "admin")} className=' btn btn-primary mx-2 rounded-lg p-3'> Admin</button>
                                        <button disabled={user?.role === 'instructor' ? 'disabled' : ''} onClick={() => handleChangeRole(user, "instructor")} className=' btn btn-primary mx-2 rounded-lg p-3'> Instructor</button>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-red-600 text-white">
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
