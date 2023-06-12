import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <div className='my-12'>
            <div>
                <motion.h2
                    className='font-bold text-center text-4xl text-[#6674cc]'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Join our Community
                </motion.h2>
                <motion.p
                    className='text-center text-xl py-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    If you would like to keep up on the latest posts and courses,
                    come by and connect with us on the following links.
                </motion.p>
            </div>

            <div className='my-6 flex flex-col md:flex-row justify-evenly items-center '>
                <motion.a
                    href='https://www.youtube.com/'
                    target='_blank'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src="https://i.ibb.co/YTSJ3xm/YT.png"
                        alt=""
                        className='w-36'
                    />
                    <p className='text-center flex items-center justify-center gap-1 text-red-600 font-bold'>
                        <FaExternalLinkAlt />
                        Youtube
                    </p>
                </motion.a>
                <motion.a
                    href='https://www.facebook.com/'
                    target='_blank'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src="https://i.ibb.co/V2h4xk3/Facebook.png"
                        alt=""
                        className='w-20'
                    />
                    <p className='text-center flex items-center justify-center gap-1 text-blue-400 mt-3 font-bold'>
                        <FaExternalLinkAlt />
                        Facebook
                    </p>
                </motion.a>
                <motion.a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src="https://i.ibb.co/Px58qby/Linkedin.png"
                        alt=""
                        className='w-24'
                    />
                    <p className='text-center flex items-center justify-center gap-1 text-primary font-bold mt-2'>
                        <FaExternalLinkAlt />
                        Linkedin
                    </p>
                </motion.a>
                <motion.a
                    href='https://telegram.org/'
                    target='_blank'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src="https://i.ibb.co/DMJMhJC/Telegram.png"
                        alt=""
                        className='w-24'
                    />
                    <p className='text-center flex items-center justify-center gap-1 text-cyan-500 font-bold'>
                        <FaExternalLinkAlt />
                        Telegram
                    </p>
                </motion.a>
            </div>
        </div>
    );
};

export default Community;
