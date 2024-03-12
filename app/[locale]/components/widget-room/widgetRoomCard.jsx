"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { widgetImage } from "./../common/static/roomImage";
import Image from "next/image";

const WidgetRoomCard = () => {
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        loop={true}
        loopedSlides={4}
        slidesPerView={2}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetweenSlides: 25,
          },
          700: {
            slidesPerView: 1.5,
            spaceBetweenSlides: 25,
          },
          1270: {
            slidesPerView: 2.3,
            spaceBetweenSlides: 25,
          },
          1370: {
            slidesPerView: 2.6,
            spaceBetweenSlides: 25,
          },
        }}
        className="mySwiper"
      >
        {widgetImage?.map((item) => (
          <SwiperSlide className="swiperCard-image">
            <div className="relative  overflow-hidden bg-cover bg-no-repeat">
              <h3 className="swiper-value">$160 / NIGHT</h3>
              <Image
                className="swiperImage transition duration-300 ease-in-out hover:scale-110"
                src={item?.image}
                alt="Image"
              />
              <div className="swiper-drcc"></div>
              <h6 className="swiper-drc">COTTAGE ROOM</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WidgetRoomCard;
