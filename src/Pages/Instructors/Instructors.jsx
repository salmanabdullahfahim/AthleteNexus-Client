import React, { useEffect, useState } from 'react';

const Instructors = () => {

    
    const [instructors, setInstructors] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users/instructor')
        .then( res => res.json())
        .then(data => setInstructors(data))
    })
    return (
        <div>
            <h2 className='text-center font-bold text-3xl text-primary my-6'>All Instructors</h2>

            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    instructors?.map(instructor => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={instructor?.photoURL} /></figure>
                            <div className="card-body">
                                <p className="card-title">Instructor Name: {instructor?.name}</p>
                                <p>Instructor Email: {instructor?.email}</p>
                               
                                
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Instructors;