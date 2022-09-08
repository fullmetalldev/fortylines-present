import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow, Pagination, Navigation, Keyboard, Zoom} from "swiper";

const Slider = () => {

    return (
        <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={true}
            zoom={true}
            keyboard={{
                enabled: true,
            }}
            modules={[Zoom, Keyboard, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            pagination={{
                type: "progressbar",
                clickable: true
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
            }}
        >
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
            <SwiperSlide>
                <div></div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;