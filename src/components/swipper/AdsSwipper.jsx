import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "./AdsSwipper.css";
import selecto from '../../assets/images/selecto.png'


export default function AdsSwipper() {
    return (
        <>
            <Swiper modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop
                className="mySwiper">
                <SwiperSlide><img src={selecto} alt="" /></SwiperSlide>
                <SwiperSlide><img src={selecto} alt="" /></SwiperSlide>
                <SwiperSlide><img src={selecto} alt="" /></SwiperSlide>
                <SwiperSlide><img src={selecto} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
