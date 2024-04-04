import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SpecificServiceCarousel.css'


function SpecificServiceCarousel({ content }) {

    return (

        <div className='specific-service-carousel'>
            <Swiper
                // spaceBetween={20}
                slidesPerView={'1'}
                centeredSlides={true}
                navigation={window.innerWidth > 992}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                modules={[Pagination, Navigation, Keyboard]}
            >
                {content?.images.map((e) => (
                    <SwiperSlide className='service-carousel-slide'>
                        <img src={e} alt={content.subtitle} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SpecificServiceCarousel