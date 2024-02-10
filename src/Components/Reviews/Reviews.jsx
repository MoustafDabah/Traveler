import React from "react";
import './Reviews.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = ({ slides }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide) => {
                <SwiperSlide key={slide.id}>
                    <section className="container-all">
                        <div className="testimotional">
                            <div className="testi-content">
                                <div className="slide">
                                    <img className="image" src={slide.image} alt="" />
                                    <p>{slide.description}</p>
                                    <FaQuoteLeft className="quot-icon" />
                                    <div className="details">
                                        <span className="name">{slide.name}</span>
                                        <span className="job">{slide.job}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            })}
        </Swiper>
    );
}
export default Reviews;