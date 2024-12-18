"use client";
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PortfolioTwoArea = () => {
  return (
    <>
      <section className="projects-three projects-three--portfolio2">
            <div className="auto-container">
                <div className="row filter-layout masonary-layout">
                    <div className="col-xl-12">
                        <div className="projects-three__inner">

                            <Swiper className="owl-carousel owl-theme thm-owl__carousel projects-three__carousel" 
                                loop={true}
                                spaceBetween={30}
                                autoplay={{
                                  delay: 10000,
                                  disableOnInteraction: false
                                }}
                                navigation={{
                                  nextEl: '.owl-next',
                                  prevEl: '.owl-prev'
                                }}
                                modules={[Autoplay, Navigation]}
                                breakpoints={{
                                  0: {
                                    slidesPerView: 1,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  992: {
                                    slidesPerView: 3,
                                  },
                                  1200: {
                                    slidesPerView: 4,
                                  },
                                }}
                                >

                                
                                <SwiperSlide className="projects-three__single">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img1.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>                               

                                
                                <SwiperSlide className="projects-three__single mt45">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img2.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>                                

                                
                                <SwiperSlide className="projects-three__single">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img3.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>                              

                                
                                <SwiperSlide className="projects-three__single mt45">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img4.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                
                                <SwiperSlide className="projects-three__single">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img1.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>                               

                                
                                <SwiperSlide className="projects-three__single mt45">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img2.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>                                

                                
                                <SwiperSlide className="projects-three__single">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img3.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>                              

                                
                                <SwiperSlide className="projects-three__single mt45">
                                    <div className="projects-three__single-img">
                                        <img src="assets/images/project/projects-v3-img4.jpg" alt="#" />
                                        <div className="overlay-content">
                                            <h2><a href="#">Landscaping</a></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <div className="owl-nav disabled d-flex justify-content-center">
                                    <button type="button" role="presentation" className="owl-prev">
                                    <span className="icon-left-arrow"></span>
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                      <span className="icon-right-arrow"></span>
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

export default PortfolioTwoArea;