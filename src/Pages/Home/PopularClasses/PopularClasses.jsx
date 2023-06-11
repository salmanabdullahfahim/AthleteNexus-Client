import React from 'react';
import usePopularClasses from '../../../Hook/usePopularClasses';

const PopularClasses = () => {

    const [popularClasses] = usePopularClasses();

    return (
        <>
            <h2 className='my-12 text-center text-4xl font-bold'>Popular Classes 🔥</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center'>
                {
                    popularClasses.map((popularClass) => {
                        return (
                            <div key={popularClass._id}>
                                <div className="w-[300px] rounded-md border">
                                    <img
                                        src={popularClass?.classImage}
                                        alt="Laptop"
                                        className="h-[200px] w-full rounded-md object-cover"
                                    />
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{popularClass?.className}</h1>
                                        <p className="mt-3 text-sm text-gray-600">
                                            Instructor Name: {popularClass?.instructorName}
                                        </p>
                                        <p className="mt-3 text-sm text-gray-600">
                                            Total Enrolled: {popularClass?.totalEnrolled} 🔥🔥
                                        </p>
                                        <button
                                            type="button"
                                            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            Read
                                        </button>
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

