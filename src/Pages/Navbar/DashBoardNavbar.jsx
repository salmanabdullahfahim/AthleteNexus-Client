import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import useInstructorRole from '../../Hook/useInstructorRole';


const DashboardNavbar = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorRole();

    const navItems = (
        <>

            {/* for students */}

            {
                !isAdmin && !isInstructor &&
                <>
                    <li>
                        <NavLink
                            to="mySelectedClasses"

                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            My Selected Classes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="myEnrolledClasses"

                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            My Enrolled Classes
                        </NavLink>
                    </li>
                </>
            }

            {/* for instructor */}
            {
                isInstructor && <>
                    <li>
                        <NavLink
                            to="addClass"

                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            Add A Class
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="myClass"

                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            My Class
                        </NavLink>
                    </li>

                </>
            }

            {/* for admin */}

            {
                isAdmin && <>

                    <li>
                        <NavLink
                            to="manageUsers"

                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            Manage Users
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="manageClasses"

                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            Manage Classes
                        </NavLink>
                    </li>
                </>
            }
           
        </>
    );

    return (
        <div className="w-72 bg-[#6674cc] h-screen  p-5 pt-8 ">
            <div className="items-center">
                <h1 className="text-white origin-left font-medium text-xl">
                    Athlete Nexus
                </h1>
                <ul className="mt-10">{navItems}</ul>
                <Link to='/' className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose">Back to Home</Link>
            </div>
        </div>
    );
};

export default DashboardNavbar;
