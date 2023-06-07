import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <div className='my-12'>
            <div>
                <h2 className='font-semibold text-5xl text-center'>Join our Community</h2>
                <p className='text-center text-xl  text-gray-700 py-4'>If you would like to keep up on the latest posts and courses, 
                come by and connect with us on the following links.</p>
            </div>

            <div className='my-6 flex justify-evenly items-center '>
                <Link to='https://www.youtube.com/' target="_blank">
                    <img src="../../../../src/assets/Community/YT.png" alt="" className='w-36' />
                    <p className='text-center flex items-center justify-center gap-1 text-red-600 font-bold'><FaExternalLinkAlt></FaExternalLinkAlt> Youtube</p>
                </Link>
                <Link to='https://www.facebook.com/' target="_blank">
                    <img src="../../../../src/assets/Community/Facebook.png" alt=""  className='w-20'/>
                    <p className='text-center flex items-center justify-center gap-1 text-blue-400 mt-3 font-bold'><FaExternalLinkAlt></FaExternalLinkAlt>Facebook</p>
                </Link>
                <Link to='https://www.linkedin.com/' target="_blank">
                    <img src="../../../../src/assets/Community/Linkedin.png" alt="" className='w-24'/>
                    <p className='text-center flex items-center justify-center gap-1 text-primary font-bold mt-2'><FaExternalLinkAlt></FaExternalLinkAlt>Linkedin</p>
                </Link>
                <Link to='https://telegram.org/' target="_blank">
                    <img src="../../../../src/assets/Community/Telegram.png" alt="" className='w-24'/>
                    <p className='text-center flex items-center justify-center gap-1 text-cyan-500 font-bold'><FaExternalLinkAlt></FaExternalLinkAlt>Telegram</p>
                </Link>
            </div>
        </div>
    );
};

export default Community;