import React, { useEffect, useState } from 'react';



const PopularInstructors = () => {


    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('https://athlete-nexus-server.vercel.app/users/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-4xl text-[#6674cc] my-12 mt-6'>Popular Instructors 👨‍🏫</h2>

            
                <div className='grid md:grid-cols-3 gap-3'>
                    {
                        instructors?.map(instructor => <div key={instructor._id}>

                            <div className="relative h-[340px] w-[270px] rounded-md mx-auto">
                                <img
                                    src={instructor?.photoURL}
                                    alt=""
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left">
                                    <h1 className="text-lg font-semibold text-white">{instructor?.name}</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Email: {instructor?.email}
                                    </p>
                                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                        View Profile &rarr;
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
    );
};

export default PopularInstructors;