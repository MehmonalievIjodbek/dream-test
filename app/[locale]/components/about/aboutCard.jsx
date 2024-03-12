"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { widgetImage } from "./../common/static/roomImage";
import Image from "next/image";
import { aboutCardStatic } from "../common/static/aboutComent";
const AboutCard = () => {
  return (
    <div className="about-card">
      <p>FEEDBACK FROM OUR DEAR GUESTS</p>
      <h2>What They Say About Us</h2>
      <div>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          loop={true}
          loopedSlides={4}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetweenSlides: 25,
            },
            600: {
              slidesPerView: 2,
              spaceBetweenSlides: 25,
            },
            991: {
              slidesPerView: 3,
              spaceBetweenSlides: 25,
            },
            // 1160: {
            //   slidesPerView: 3.5,
            //   spaceBetweenSlides: 25,
            // },
            // 1270: {
            //   slidesPerView: 3.6,
            //   spaceBetweenSlides: 25,
            // },
            1370: {
              slidesPerView: 3,
              spaceBetweenSlides: 25,
            },
          }}
          className="aboutswiper"
        >
          {aboutCardStatic?.map((item) => (
            <SwiperSlide>
              <div className="about-stars">
                <span>{item?.icons}</span>
              </div>
              <h3>{item?.description}</h3>
              <div className="aboutSwiper-Image">
                <Image
                  className="aboutSwiper__image"
                  src={item?.image}
                  alt="Image"
                />
              </div>
              <h4>{item?.name}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutCard;
