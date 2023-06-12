import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className='my-12'>
      <div>
        <h2 className='font-semibold text-5xl text-center'>
          Join our Community
        </h2>
        <p className='text-center text-xl text-gray-700 py-4'>
          If you would like to keep up on the latest posts and courses,
          come by and connect with us on the following links.
        </p>
      </div>

      <div className='my-6 flex justify-evenly items-center '>
        <motion.a
          href='https://www.youtube.com/'
          target='_blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="../../../../src/assets/Community/YT.png"
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
            src="../../../../src/assets/Community/Facebook.png"
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
            src="../../../../src/assets/Community/Linkedin.png"
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
            src="../../../../src/assets/Community/Telegram.png"
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
