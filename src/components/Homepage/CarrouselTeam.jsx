import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import slide1 from '../../assets/images/teamGeneral-1.jpg'
import slide2 from '../../assets/images/teamGeneral-2.jpg'
import slide3 from '../../assets/images/teamGeneral-3.jpg'
import slide4 from '../../assets/images/teamGeneral-4.jpg'
import slide5 from '../../assets/images/teamGeneral-5.jpg'
import './CarrouselTeam.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CarrouselTeam() {
    return (

        <div className="team-slides" style={{ width: '100%' }}>

            <Swiper
                spaceBetween={20}
                slidesPerView={'1.3'}
                centeredSlides={true}
                navigation={false}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                modules={[Pagination, Navigation]}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={slide5} alt='Equipo de Delta Ecografía' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt='Equipo de Delta Ecografía' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt='Equipo de Delta Ecografía' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt='Equipo de Delta Ecografía' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt='Equipo de Delta Ecografía' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarrouselTeam