import React, { useEffect, useState } from 'react';



const PopularInstructors = () => {


    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-4xl text-[#6674cc] my-12 mt-6'>Popular Instructors 👨‍🏫</h2>

            <div className="flex justify-center">
                <div className='grid md:grid-cols-3 gap-5 w-11/12 mx-auto'>
                    {
                        instructors?.map(instructor => <>
                            <div className="w-[300px] mx-auto rounded-md border-none shadow-md">
                                <img
                                    src={instructor?.photoURL}
                                    alt="Laptop"
                                    className="h-[200px] w-full rounded-md object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="text-lg font-semibold">{instructor?.name}</h1>
                                    <p className="mt-3 text-sm ">
                                        Email: {instructor?.email}
                                    </p>
                                    
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;