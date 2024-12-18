"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroHomeThree = () => {
  return (
    <>
       <section className="main-slider main-slider-three">
            <Swiper className="swiper-container thm-swiper__slider" 
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                pagination={{
                    el: "#main-slider-pagination",
                    type: "bullets",
                    clickable: true,
                }}
                navigation={{
                    nextEl: "#main-slider__swiper-button-next",
                    prevEl: "#main-slider__swiper-button-prev",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}

                > 

                    
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{background: `url(/assets/images/slides/slider-v3-img1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>

                        <div className="shape1"><img src="assets/images/shapes/slider-v3-shape1.png" alt="#" /></div>
                        <div className="container">
                            <div className="main-slider-three__content">
                                <div className="title">
                                    <h2>We Provide <br /> Gardening Best <br /> Service</h2>
                                </div>

                                <div className="text">
                                    <p>There are many variations of passage available the major <br /> suffered alteration
                                    </p>
                                </div>

                                <div className="btn-box">
                                    <Link className="thm-btn" href="/contact">
                                        <span className="txt">Book Appointment</span>
                                        <i className="fa fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                  
                    
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{background: `url(/assets/images/slides/slider-v3-img1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>

                        <div className="shape1"><img src="assets/images/shapes/slider-v3-shape1.png" alt="#" /></div>
                        <div className="container">
                            <div className="main-slider-three__content">
                                <div className="title">
                                    <h2>We Provide <br /> Gardening Best <br /> Service</h2>
                                </div>

                                <div className="text">
                                    <p>There are many variations of passage available the major <br /> suffered alteration
                                    </p>
                                </div>

                                <div className="btn-box">
                                    <Link className="thm-btn" href="/contact">
                                        <span className="txt">Book Appointment</span>
                                        <i className="fa fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                  
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{background: `url(/assets/images/slides/slider-v3-img1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>

                        <div className="shape1"><img src="assets/images/shapes/slider-v3-shape1.png" alt="#" /></div>
                        <div className="container">
                            <div className="main-slider-three__content">
                                <div className="title">
                                    <h2>We Provide <br /> Gardening Best <br /> Service</h2>
                                </div>

                                <div className="text">
                                    <p>There are many variations of passage available the major <br /> suffered alteration
                                    </p>
                                </div>

                                <div className="btn-box">
                                    <Link className="thm-btn" href="/contact">
                                        <span className="txt">Book Appointment</span>
                                        <i className="fa fa-angle-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                 

                
                <div className="main-slider__nav">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                        <i className="icon-left-arrow"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                        <i className="icon-right-arrow"></i>
                    </div>
                </div>
            </Swiper>
        </section>
    </>
  );
};

export default HeroHomeThree;