import React from 'react'
import Hero from '../../components/Homepage/Hero'
import MoreInfo from '../../components/Homepage/MoreInfo'
import WeWorkWith from '../../components/Homepage/WeWorkWith'
import Team from '../../components/Homepage/Team'
import CarrouselTeam from '../../components/Homepage/CarrouselTeam'
import './Homepage.css'
// import { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

function Homepage() {

    return (
        <>
            <div className='homepage' >
                <Hero />
                <MoreInfo />
                <Team />
                <CarrouselTeam />
                <WeWorkWith />
            </div >
        </>
    )
}

export default Homepage

{/* <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                // mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <MoreInfo />
                </SwiperSlide>
                <SwiperSlide>
                    <Team />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}