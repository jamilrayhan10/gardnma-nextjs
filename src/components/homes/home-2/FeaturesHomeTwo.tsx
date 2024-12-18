"use client";
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturesHomeTwo = () => {
  return (
    <>
      <section className="features-one">
            <div className="features-one__bg" style={{background: `url(/assets/images/backgrounds/features-v1-bg.png)`}}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="features-one__inner">
                            <Swiper className="owl-carousel owl-theme thm-owl__carousel features-one__carousel" 
                                    loop={true}
                                    autoplay={{delay: 5000, disableOnInteraction: false}}
                                    spaceBetween={30}
                                    modules={[Autoplay]}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        992: {
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 4
                                        }
                                    }}                                    
                                    >

                                
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-lawn-mower"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">Maintenance</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>                              
                          
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-shovels"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">URBAN</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>                               
                                
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-agriculture"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">Landscaping</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>                              
                                
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-gardening-1"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">Events</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>

                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-lawn-mower"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">Maintenance</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>                              
                          
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-shovels"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">URBAN</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>                               
                                
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-agriculture"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">Landscaping</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>                              
                                
                                <SwiperSlide className="features-one__single text-center">
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-gardening-1"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2><a href="#">Events</a></h2>
                                            <p>We’ve been using tech</p>
                                        </div>
                                    </div>
                                    <div className="count-box"></div>
                                </SwiperSlide>
                                

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default FeaturesHomeTwo;