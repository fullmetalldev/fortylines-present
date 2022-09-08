import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow, Pagination, Navigation, Keyboard, Zoom} from "swiper";
import {hui} from "./data";

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
                <div className="qrCode">
                    <h2 className="slideTitle">Отсканируйте, чтобы попасть на нашу презентацию :)</h2>
                    <img src="http://qrcoder.ru/code/?https%3A%2F%2Ffortylines-present.vercel.app%2F&4&0" width="200"
                         height="200" border="0" title="QR код"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="qrCode">
                    <h2 className="slideTitle-big">90% процентов населения не знают про Web3, но это наше будущее.</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Что такое Web 1.0?</h2>
                    <div className="slide__row">
                        <img src="../../Assets/Imgs/i.webp" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;