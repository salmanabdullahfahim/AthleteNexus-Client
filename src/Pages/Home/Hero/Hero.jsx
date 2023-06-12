import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {
  const slides = [
    {
      url: 'https://static.vecteezy.com/system/resources/previews/023/956/627/non_2x/3d-text-with-abstract-purple-background-for-cricket-match-header-poster-or-banner-design-with-wicket-and-ball-equipment-vector.jpg',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/previews/014/467/937/non_2x/a-man-kicks-the-ball-hard-football-training-logo-design-template-vector.jpg',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8brzwtkRZLRXaP5kz-o8IzvgkZX88HFp7Q&usqp=CAU',
    },

    {
      url: 'https://i.ibb.co/tBtgqXD/pexels-kampus-production-6180408.jpg',
    },
    {
      url: 'https://i.ibb.co/RB8R3hT/pexels-cottonbro-studio-6557330.jpg',
    },
    {
      url: 'https://i.ibb.co/9V3ydDs/pexels-joe-calomeni-718952.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-full h-screen w-full m-auto py-6 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-xl bg-center bg-cover object-contain duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;