"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroHomeTwo = () => {
  return (
		<>
			<section className="main-slider main-slider-two">
				<Swiper
					className="swiper-container thm-swiper__slider"
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
					{/* <!--Start Main Slider Two--> */}
					<SwiperSlide className="swiper-slide">
						<div
							className="image-layer"
							style={{
								background: `url(/assets/images/slides/slider-v2-img1.jpg)`,
							}}
						></div>
						<div className="shape1"></div>

						<div className="container">
							<div className="main-slider-two__content">
								<div className="tagline">
									<p>Welcome to cOMPANY</p>
								</div>
								<div className="title">
									<h2>
										Consulting <br /> Market Leader <br /> Expert
									</h2>
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
						<div
							className="image-layer"
							style={{
								background: `url(/assets/images/slides/slider-v2-img2.jpg)`,
							}}
						></div>
						<div className="shape1"></div>

						<div className="container">
							<div className="main-slider-two__content">
								<div className="tagline">
									<p>Welcome to cOMPANY</p>
								</div>
								<div className="title">
									<h2>
										Consulting <br /> Market Leader <br /> Expert
									</h2>
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
						<div
							className="image-layer"
							style={{
								background: `url(/assets/images/slides/slider-v2-img1.jpg)`,
							}}
						></div>
						<div className="shape1"></div>

						<div className="container">
							<div className="main-slider-two__content">
								<div className="tagline">
									<p>Welcome to cOMPANY</p>
								</div>
								<div className="title">
									<h2>
										Consulting <br /> Market Leader <br /> Expert
									</h2>
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
					{/* <!--End Main Slider Two--> */}

					<div className="main-slider__nav">
						<div
							className="swiper-button-prev main-slider__swiper-button-next"
							id="main-slider__swiper-button-next"
						>
							<i className="icon-left-arrow"></i>
						</div>
						<div
							className="swiper-button-next main-slider__swiper-button-prev"
							id="main-slider__swiper-button-prev"
						>
							<i className="icon-right-arrow"></i>
						</div>
					</div>
				</Swiper>
			</section>
		</>
	);
};

export default HeroHomeTwo;