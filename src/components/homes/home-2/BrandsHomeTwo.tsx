"use client";

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandsHomeTwo = () => {
  return (
    <>
      <section className="brand-one brand-one--two">
            <div className="brand-one--two__bg" style={{background: `url(/assets/images/backgrounds/brand-v2-bg.jpg)`}}>
            </div>
            <div className="auto-container">
                <Swiper className="thm-swiper__slider swiper-container" 
                    spaceBetween={100}
                    slidesPerView={5}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    speed={1000} 
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        375: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        575: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 3,
                        },
                        992: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                        },
                        1200: {
                            spaceBetween: 30,
                            slidesPerView: 5,
                        },
                    }}> 

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img1.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img2.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img3.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img4.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img5.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img1.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img2.png" alt="#" />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img src="assets/images/brand/brand-v2-img3.png" alt="#" />
                    </SwiperSlide>
                     
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default BrandsHomeTwo;