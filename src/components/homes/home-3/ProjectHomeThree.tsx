"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectHomeThree = () => {
  return (
    <>
      <section className="projects-three">
            <div className="projects-three__bg"
                style={{background: `url(/assets/images/backgrounds/projects-v3-bg.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
            <div className="projects-three__bg-two"
                style={{background: `url(/assets/images/project/projects-v3-img5.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                <ul className="projects-three__bg-two-content">
                    <li className="text-center">
                        <div className="icon-box">
                            <span className="icon-watering-plants"></span>
                        </div>

                        <div className="title-box">
                            <h2><a href="#">Take Care <br /> More</a></h2>
                        </div>
                    </li>

                    <li className="text-center">
                        <div className="icon-box">
                            <span className="icon-pruning-shears"></span>
                        </div>

                        <div className="title-box">
                            <h2><a href="#">Take Care <br /> More</a></h2>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="container">
                <div className="row filter-layout masonary-layout">
                    <div className="col-xl-12">
                        <div className="projects-three__inner">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>Our Portfolio</h6>
                                </div>
                                <h2 className="sec-title-three__title">Our latest projects</h2>
                            </div>

                            <Swiper className="owl-carousel owl-theme thm-owl__carousel projects-three__carousel" 
                                loop={true}
                                autoplay={{
                                  delay: 10000,
                                  disableOnInteraction: false
                                }}
                                navigation={{
                                  nextEl: ".projects-three__carousel .owl-next",
                                  prevEl: ".projects-three__carousel .owl-prev"
                                }}
                                slidesPerView={4}
                                spaceBetween={30}
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
                                
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="projects-three-brand">
                <div className="auto-container">
                    <Swiper className="thm-swiper__slider swiper-container"                    
                            spaceBetween={100}
                            slidesPerView={5}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                0: {
                                    spaceBetween: 30,
                                    slidesPerView: 1
                                },
                                375: {
                                    spaceBetween: 30,
                                    slidesPerView: 1
                                },
                                575: {
                                    spaceBetween: 30,
                                    slidesPerView: 2
                                },
                                768: {
                                    spaceBetween: 30,
                                    slidesPerView: 3
                                },
                                992: {
                                    spaceBetween: 30,
                                    slidesPerView: 4
                                },
                                1200: {
                                    spaceBetween: 30,
                                    slidesPerView: 5
                                }                                  
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
            </div>
             
        </section>
    </>
  );
};

export default ProjectHomeThree;