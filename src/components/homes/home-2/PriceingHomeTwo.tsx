"use client";

import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PriceingHomeTwo = () => {
  return (
    <>
      <section className="pricing-table-one">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/pricing-table-v1-shape1.png" alt="#" /></div>
            <div className="shape2 float-bob-y"><img src="assets/images/shapes/pricing-table-v1-shape2.png" alt="#" /></div>
            <div className="pricing-table-one__bg"
                style={{background: `url(/assets/images/backgrounds/pricing-v1-bg.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
            <div className="container">

                <div className="sec-title style2">
                    <div className="sec-title__tagline">
                        <div className="img-box"><img src="assets/images/resources/sec-title-img.png" alt="#" />
                        </div>
                        <h6>Pricing Table</h6>
                    </div>
                    <h2 className="sec-title__title">Our Latest Packages</h2>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="pricing-table-one__inner">

                            <Swiper className="owl-carousel owl-theme thm-owl__carousel pricing-table-one__carousel" 
                                loop={true}
                                autoplay={{
                                  delay: 10000,
                                  disableOnInteraction: false
                                }}
                                slidesPerView={2}
                                spaceBetween={30}                                
                                navigation={{
                                    nextEl: ".owl-next",
                                    prevEl: ".owl-prev"
                                }}
                                modules={[Navigation, Autoplay]}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    768: {
                                        slidesPerView: 1
                                    },
                                    992: {
                                        slidesPerView: 1
                                    },
                                    1200: {
                                        slidesPerView: 2
                                    }
                                }}
                                >

                                
                                <SwiperSlide className="pricing-table-one__single">
                                    <div className="pricing-table-one__single-left text-center">
                                        <div className="top-content">
                                            <div className="title">
                                                <h3>Best Choice</h3>
                                            </div>
                                            <div className="text-box">
                                                <h2>Growing Business</h2>
                                                <p>2-6 Employes</p>
                                            </div>
                                        </div>

                                        <div className="img-box"><img
                                                src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                                        </div>

                                        <div className="bottom-content">
                                            <h2>$ <span>199</span> /Month</h2>
                                        </div>
                                    </div>

                                    <div className="pricing-table-one__single-right">
                                        <ul>
                                            <li>
                                                <p>Gardens Service</p>
                                            </li>
                                            <li>
                                                <p>Forest Planning</p>
                                            </li>
                                            <li>
                                                <p>Gardens Party</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                        </ul>

                                        <div className="pricing-table-one__single-right-btn">
                                            <a href="#">Get It Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>      
                                
                                <SwiperSlide className="pricing-table-one__single">
                                    <div className="pricing-table-one__single-left text-center">
                                        <div className="top-content">
                                            <div className="title">
                                                <h3>Best Choice</h3>
                                            </div>
                                            <div className="text-box">
                                                <h2>Large Business</h2>
                                                <p>8-19 Employes</p>
                                            </div>
                                        </div>

                                        <div className="img-box"><img
                                                src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                                        </div>

                                        <div className="bottom-content">
                                            <h2>$ <span>399</span> /Month</h2>
                                        </div>
                                    </div>

                                    <div className="pricing-table-one__single-right">
                                        <ul>
                                            <li>
                                                <p>Gardens Service</p>
                                            </li>
                                            <li>
                                                <p>Forest Planning</p>
                                            </li>
                                            <li>
                                                <p>Gardens Party</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                        </ul>

                                        <div className="pricing-table-one__single-right-btn">
                                            <a href="#">Get It Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
 
                                <SwiperSlide className="pricing-table-one__single">
                                    <div className="pricing-table-one__single-left text-center">
                                        <div className="top-content">
                                            <div className="title">
                                                <h3>Best Choice</h3>
                                            </div>
                                            <div className="text-box">
                                                <h2>Growing Business</h2>
                                                <p>2-6 Employes</p>
                                            </div>
                                        </div>

                                        <div className="img-box"><img
                                                src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                                        </div>

                                        <div className="bottom-content">
                                            <h2>$ <span>199</span> /Month</h2>
                                        </div>
                                    </div>

                                    <div className="pricing-table-one__single-right">
                                        <ul>
                                            <li>
                                                <p>Gardens Service</p>
                                            </li>
                                            <li>
                                                <p>Forest Planning</p>
                                            </li>
                                            <li>
                                                <p>Gardens Party</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                        </ul>

                                        <div className="pricing-table-one__single-right-btn">
                                            <a href="#">Get It Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
 
                                <SwiperSlide className="pricing-table-one__single">
                                    <div className="pricing-table-one__single-left text-center">
                                        <div className="top-content">
                                            <div className="title">
                                                <h3>Best Choice</h3>
                                            </div>
                                            <div className="text-box">
                                                <h2>Large Business</h2>
                                                <p>8-19 Employes</p>
                                            </div>
                                        </div>

                                        <div className="img-box"><img
                                                src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                                        </div>

                                        <div className="bottom-content">
                                            <h2>$ <span>399</span> /Month</h2>
                                        </div>
                                    </div>

                                    <div className="pricing-table-one__single-right">
                                        <ul>
                                            <li>
                                                <p>Gardens Service</p>
                                            </li>
                                            <li>
                                                <p>Forest Planning</p>
                                            </li>
                                            <li>
                                                <p>Gardens Party</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                            <li>
                                                <p>Exciting Feature</p>
                                            </li>
                                        </ul>

                                        <div className="pricing-table-one__single-right-btn">
                                            <a href="#">Get It Now</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <div className="owl-nav">
                                  <button type="button" className="owl-prev">
                                    <span className="icon-left-arrow">1</span>
                                    </button>
                                  <button type="button" className="owl-next">
                                    <span className="icon-right-arrow">2</span>
                                    </button>
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default PriceingHomeTwo;