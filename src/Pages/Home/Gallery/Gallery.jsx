import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "./styles.css";

import gallery1 from '../../../../src/assets/gallery/download.jpeg'
import gallery2 from '../../../../src/assets/gallery/download (3).jpg'
import gallery3 from '../../../../src/assets/gallery/badminton-summer-camp-banner.png'
import gallery4 from '../../../../src/assets/gallery/images.jpeg'
import gallery5 from '../../../../src/assets/gallery/Daycamp.jpg'
import gallery6 from '../../../../src/assets/gallery/519d38_dfc53a0fb03c4a89a6882a2eb9890e7a~mv2.webp'

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Gallery = () => {

    const swiperRef = useRef(null);
    const [initialSlideIndex, setInitialSlideIndex] = useState(0);

    useEffect(() => {
        setInitialSlideIndex(Math.floor(swiperRef.current.slides.length / 2));
    }, []);

    return (
        <>

            <div>
                <h2 className="font-bold text-center text-4xl text-[#6674cc] md:my-20">Spectacular Summer <br/> Camp Silliness!</h2>
            </div>
            <div className="w-8/12 mx-auto">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    autoplay={{ delay: 2000 }} // Add autoplay with a delay of 3 seconds
                    initialSlide={initialSlideIndex} // Set the initial slide index
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={gallery1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery6} />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    );
};

export default Gallery;