import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';


const DashboardNavbar = () => {

  const navItems = (
    <>
      <li>
        <NavLink
          to="adminDashboard"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          Dashboard-Admin
        </NavLink>
      </li>
      <li>
        <NavLink
          to="instructorDashboard"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          Dashboard-Instructor
        </NavLink>
      </li>
      <li>
        <NavLink
          to="studentDashboard"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          Dashboard-Student
        </NavLink>
      </li>
      <li>
        <NavLink
          to="mySelectedClasses"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          My Selected Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="myEnrolledClasses"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
         My Enrolled Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="addClass"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          Add A Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="totalEnrolledStudents"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          Total Enrolled Students
        </NavLink>
      </li>
      <li>
        <NavLink
          to="feedback"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
          Feedback
        </NavLink>
      </li>
      <li>
        <NavLink
          to="manageClasses"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
         Manage Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="manageUsers"
          exact={true}
          className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
        >
         Manage Users
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-72 bg-dark-purple h-full p-5 pt-8 relative">
      <div className="items-center">
        <h1 className="text-white origin-left font-medium text-xl">
          Athlete Nexus
        </h1>
        <ul className="mt-10">{navItems}</ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
