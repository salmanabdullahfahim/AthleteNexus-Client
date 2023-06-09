import React from 'react';
import useDeniedClasses from '../../Hook/useDeniedClasses';


const Feedback = () => {
  const [deniedClasses] = useDeniedClasses();
  console.log(deniedClasses);
  
  return (
    <div>
      <h1 className="text-2xl font-semibold ">Feedback</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {deniedClasses.map((cls, index) => (
              cls.feedback && (
                <tr key={cls._id}>
                  <th>{index + 1}</th>
                  <td>{cls.className}</td>
                  <td>{cls.price}</td>
                  <td>{cls.feedback}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedback;
