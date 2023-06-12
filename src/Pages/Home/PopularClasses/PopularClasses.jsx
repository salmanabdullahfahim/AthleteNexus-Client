import React from 'react';
import usePopularClasses from '../../../Hook/usePopularClasses';




const PopularClasses = () => {

    const [popularClasses] = usePopularClasses();

    return (
        <>
            <h2 className='my-12 text-center font-bold text-4xl text-[#6674cc] '>Popular Classes 🔥</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    popularClasses.map((popularClass) => {
                        return (
                            <div key={popularClass._id}>
                                <div className="w-[300px] mx-auto rounded-md border-none shadow-md">
                                    <img
                                        src={popularClass?.classImage}
                                        alt="Laptop"
                                        className="h-[200px] w-full rounded-md object-cover"
                                    />
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{popularClass?.className}</h1>
                                        <p className="mt-3 text-sm ">
                                            Instructor Name: {popularClass?.instructorName}
                                        </p>
                                        <p className="mt-3 text-sm ">
                                            Total Enrolled: {popularClass?.totalEnrolled}
                                        </p>
                                      
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
};

export default PopularClasses;

