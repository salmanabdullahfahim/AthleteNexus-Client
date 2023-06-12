import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAllUsers from '../../Hook/useAllUsers';

const ManageUsers = () => {

    const [users, refetch] = useAllUsers();
    console.log(users)

    const token = localStorage.getItem('access-token');

    const handleChangeRole = (user, role) => {
        const url = `https://athlete-nexus-server.vercel.app/users/role/?id=${user._id}&role=${role}`;

        fetch(url, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`
            }
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

            const url = `https://athlete-nexus-server.vercel.app/users?id=${user._id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
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
                                        <button disabled={user?.role === 'admin' ? 'disabled' : ''} onClick={() => handleChangeRole(user, "admin")} className=' btn btn-sm bg-[rgb(80,100,230)] hover:bg-[rgb(80,96,205)] py-2 mx-2 text-white rounded-lg p-3'> Admin</button>
                                        <button disabled={user?.role === 'instructor' ? 'disabled' : ''} onClick={() => handleChangeRole(user, "instructor")} className=' btn btn-sm  bg-[rgb(14,131,163)] hover:bg-[rgb(27,104,152)] text-white mx-2 rounded-lg p-3 py-2'> Instructor</button>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-sm bg-red-600 text-white">
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
