"use client";
import React from 'react';
import { Autoplay,   } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialHomeOne = () => {
  return (
    <>
      <section className="testimonial-one">
            <div className="shape2"></div>
            <div className="shape5"></div>
            <div className="container">
                <div className="row">
                    {/* <!--Start Testimonial One Img--> */}
                    <div className="col-xl-6">
                        <div className="testimonial-one__img">
                            <div className="shape1"></div>
                            <div className="shape3"></div>
                            <div className="shape4"></div>
                            <div className="testimonial-one__img1">
                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt="#" />
                            </div>
                            <div className="testimonial-one__img2">
                                <img src="assets/images/testimonial/testimonial-v1-img2.png" alt="#" />
                            </div>

                            <div className="testimonial-one__img3">
                                <img src="assets/images/testimonial/testimonial-v1-img3.png" alt="#" />
                            </div>

                            <div className="testimonial-one__img4">
                                <img src="assets/images/testimonial/testimonial-v1-img4.png" alt="#" />
                            </div>

                            <div className="testimonial-one__img5">
                                <img src="assets/images/testimonial/testimonial-v1-img5.png" alt="#" />
                            </div>

                            <div className="testimonial-one__img6">
                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt="#" />
                            </div>

                            <div className="testimonial-one__img7">
                                <div className="inner">
                                    <img src="assets/images/testimonial/testimonial-v1-img6.png" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Testimonial One Img--> */}


                    {/* <!--Start Testimonial One Content--> */}
                    <div className="col-xl-6">
                        <div className="testimonial-one__content">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <h6>Our Client</h6>
                                    <span className="right"></span>
                                </div>
                                <h2 className="sec-title__title">Our Sweet Client Say</h2>
                            </div>

                            <div className="testimonial-one__content-inner">

                                <Swiper className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
                                    loop={true}
                                    autoplay={{
                                        delay: 10000, // equivalent to autoplayTimeout
                                        disableOnInteraction: false,
                                    }}
                                    speed={500} // equivalent to smartSpeed
                                    spaceBetween={0} // equivalent to margin
                                    navigation={false} // set to false since "nav" is false
                                    pagination={{ clickable: true }} // equivalent to dots: true
                                    modules={[Autoplay]}
                                    slidesPerView={1} 
                                    >

                                    {/* <!--Start Testimonial One Single--> */}
                                    <SwiperSlide className="testimonial-one__single">
                                        <div className="testimonial-one__single-bg"
                                            style={{background: `url(/assets/images/shapes/testimonial-v1-shape1.png)`}}>
                                        </div>
                                        <div className="inner">
                                            <div className="img-box">
                                                <div className="inner-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img7.jpg"
                                                        alt="#" />
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>

                                            <div className="content-box">
                                                <p>There are many variations of passage of available but the majority
                                                    have
                                                    suffered alteration in some form by injected humor or randomed.</p>

                                                <div className="client-info">
                                                    <div className="text-box">
                                                        <h2>Bonnie tolbet</h2>
                                                        <p>Customer</p>
                                                    </div>

                                                    <div className="rating-box">
                                                        <ul>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* <!--End Testimonial One Single--> */}

                                    {/* <!--Start Testimonial One Single--> */}
                                    <SwiperSlide className="testimonial-one__single">
                                        <div className="testimonial-one__single-bg"
                                            style={{background: `url(/assets/images/shapes/testimonial-v1-shape1.png)`}}>
                                        </div>
                                        <div className="inner">
                                            <div className="img-box">
                                                <div className="inner-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img7.jpg"
                                                        alt="#" />
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>

                                            <div className="content-box">
                                                <p>There are many variations of passage of available but the majority
                                                    have
                                                    suffered alteration in some form by injected humor or randomed.</p>

                                                <div className="client-info">
                                                    <div className="text-box">
                                                        <h2>Bonnie tolbet</h2>
                                                        <p>Customer</p>
                                                    </div>

                                                    <div className="rating-box">
                                                        <ul>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* <!--End Testimonial One Single--> */}

                                    {/* <!--Start Testimonial One Single--> */}
                                    <SwiperSlide className="testimonial-one__single">
                                        <div className="testimonial-one__single-bg"
                                            style={{background: `url(/assets/images/shapes/testimonial-v1-shape1.png)`}}>
                                        </div>
                                        <div className="inner">
                                            <div className="img-box">
                                                <div className="inner-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img7.jpg"
                                                        alt="#" />
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-quote"></span>
                                                </div>
                                            </div>

                                            <div className="content-box">
                                                <p>There are many variations of passage of available but the majority
                                                    have
                                                    suffered alteration in some form by injected humor or randomed.</p>

                                                <div className="client-info">
                                                    <div className="text-box">
                                                        <h2>Bonnie tolbet</h2>
                                                        <p>Customer</p>
                                                    </div>

                                                    <div className="rating-box">
                                                        <ul>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* <!--End Testimonial One Single--> */}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Testimonial One Content--> */}
                </div>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeOne;