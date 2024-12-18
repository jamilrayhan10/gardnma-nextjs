"use client"
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';
import UseSticky from '@/hooks/UseSticky';
import Search from '@/components/common/Search';
import OffCanvas from '@/components/common/OffCanvas';

const HeaderTwo = () => {
  const { sticky } = UseSticky()
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState(false)


  return (
		<>
			<header className="main-header main-header-one main-header-two">
				{/* <!--Start Main Header Two Top--> */}
				<div className="main-header-two__top">
					<div className="auto-container">
						<div className="main-header-two__top-inner">
							<div className="main-header-two__top-left">
								<ul className="main-header-two__top-contact-info">
									<li>
										<div className="inner">
											<div className="icon-box">
												<span className="icon-back-in-time"></span>
											</div>
											<div className="text-box">
												<p>Opening time</p>
												<h6>Mon-Fri:9.00-19:00</h6>
											</div>
										</div>
									</li>

									<li>
										<div className="inner">
											<div className="icon-box">
												<span className="icon-phone-call-1"></span>
											</div>
											<div className="text-box">
												<p>Call anytime </p>
												<h6>
													<a href="tel:980009630">+ 98 (000) - 9630</a>
												</h6>
											</div>
										</div>
									</li>

									<li>
										<div className="inner">
											<div className="icon-box">
												<span className="icon-message"></span>
											</div>
											<div className="text-box">
												<p>Send email </p>
												<h6>
													<a href="mailto:yourmail@email.com">
														info@company.com
													</a>
												</h6>
											</div>
										</div>
									</li>

									<li>
										<div className="inner">
											<div className="icon-box">
												<span className="icon-placeholder"></span>
											</div>
											<div className="text-box">
												<p>380 St Kilda Road</p>
												<h6>Melbourne, Australia</h6>
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div className="main-header-two__top-social-links">
								<div className="title-box">
									<h4>Follow Now</h4>
								</div>

								<ul className="social-links">
									<li>
										<a href="#">
											<span className="icon-twitter"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="icon-facebook"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="icon-pinterest"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="icon-instagram"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <!--End Main Header Two Top--> */}

				{/* <!--Start Main Header One Bottom--> */}
				<div className="main-header-one__bottom">
					<div
						className="main-header-two__bottom-bg"
						style={{
							backgroundImage:
								"url(/assets/images/shapes/main-header-v2-bg.png)",
						}}
					></div>
					<div className="main-header-one__bottom-inner">
						<nav className="main-menu main-menu-one">
							<div className="main-menu__wrapper clearfix">
								<div className="auto-container">
									<div className="main-menu__wrapper-inner">
										<div className="main-header-one__bottom-left">
											<div className="logo-box-one">
												<Link href="/">
													<img
														src="assets/images/resources/logo-2.png"
														alt="Awesome Logo"
														title=""
													/>
												</Link>
											</div>
										</div>

										<div className="main-header-one__bottom-middle">
											<div className="main-menu-box">
												<a onClick={() => setOpen(!open)} style={{cursor: "pointer"}} className="mobile-nav__toggler">
													<i className="fa fa-bars"></i>
												</a>
												<NavMenu />
											</div>
										</div>

										<div className="main-header-one__bottom-right">
											<div className="header-search-box">
												<a
													onClick={() => setSearch(!search)}
													style={{cursor: "pointer"}}
													className="main-menu__search search-toggler icon-magnifying-glass"
												></a>
											</div>
											<div className="main-header-one__bottom-right-btn">
												<Link href="/contact">Book Appointment</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
				{/* <!--End Main Header Two Bottom--> */}
			</header>

			<div className={`stricky-header stricky-header--two stricked-menu main-menu ${sticky ? 'stricky-fixed' : ''}`}>
				<div className="sticky-header__content">
					<div className="main-menu__wrapper clearfix">
						<div className="auto-container">
							<div className="main-menu__wrapper-inner">
								<div className="main-header-one__bottom-left">
									<div className="logo-box-one">
										<Link href="/">
											<img
												src="assets/images/resources/logo-2.png"
												alt="Awesome Logo"
												title=""
											/>
										</Link>
									</div>
								</div>

								<div className="main-header-one__bottom-middle">
									<div className="main-menu-box">
										<a href="#" className="mobile-nav__toggler">
											<i className="fa fa-bars"></i>
										</a>

										<NavMenu />
									</div>
								</div>

								<div className="main-header-one__bottom-right">
									<div className="header-search-box">
										<a
											onClick={() => setSearch(!search)}
											style={{cursor: "pointer"}}
											className="main-menu__search search-toggler icon-magnifying-glass"
										></a>
									</div>
									<div className="main-header-one__bottom-right-btn">
										<Link href="/contact">Book Appointment</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{search &&<Search setSearch={setSearch} search={search} />}
			<OffCanvas setOpen={setOpen} open={open} />


		</>
	);
};

export default HeaderTwo;