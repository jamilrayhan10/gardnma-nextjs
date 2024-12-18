"use client"
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import UseSticky from '@/hooks/UseSticky'; 
import Link from 'next/link';
import Search from '@/components/common/Search';
import OffCanvas from '@/components/common/OffCanvas';


const HeaderOne = () => {

  const { sticky } = UseSticky()
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState(false)


  return (
		<>
			<header className="main-header main-header-one">
				<div className="main-header-one__top">
					<div className="auto-container">
						<div className="main-header-one__top-inner">
							<div className="main-header-one__top-left">
								<ul className="main-header__contact-info">
									<li>
										<div className="inner">
											<div className="icon-box">
												<span className="icon-time"></span>
											</div>
											<div className="text-box">
												<p>Mon to Sat: 09:00 am to 05:00 pm</p>
											</div>
										</div>
									</li>

									<li>
										<div className="inner">
											<div className="icon-box">
												<span className="icon-email"></span>
											</div>
											<div className="text-box">
												<p>
													<a href="mailto:yourmail@email.com">
														needhelp@company.com
													</a>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div className="main-header-one__top-right">
								<div className="main-header-one__top-menu">
									<ul className="main-header-one__top-menu-list">
										<li>
											<a href="#">Our Faqs </a>
										</li>
										<li>
											<a href="#">Pricing </a>
										</li>
										<li>
											<a href="#">Contact </a>
										</li>
									</ul>
								</div>

								<ul className="main-header-one__top-social-links">
									<li>
										<a href="#">
											<span className="icon-facebook"></span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="icon-twitter"></span>
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

				<div className="main-header-one__bottom">
					<div className="main-header-one__bottom-inner">
						<nav className="main-menu main-menu-one">
							<div className="main-menu__wrapper clearfix">
								<div className="auto-container">
									<div className="main-menu__wrapper-inner">
										<div className="main-header-one__bottom-left">
											<div className="logo-box-one">
												<Link href="/">
													<img
														src="assets/images/resources/logo-1.png"
														alt="Awesome Logo"
														title="logo"
													/>
												</Link>
											</div>
										</div>

										<div className="main-header-one__bottom-middle">
											<div className="main-menu-box">
												<a  onClick={() => setOpen(!open)} style={{cursor: "pointer"}} className="mobile-nav__toggler">
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
												<Link href="/contact">Get A Quote</Link>
											</div>

											<div className="contact-box">
												<div className="icon">
													<span className="icon-chatting"></span>
												</div>
												<div className="text">
													<p>Call Anytime</p>
													<a href="tel:926668880000">92 666 888 0000</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</header>

			<div
				className={`stricky-header stricky-header--one stricked-menu main-menu ${
					sticky ? "stricky-fixed" : ""
				}`}
			>
				<div className="sticky-header__content">
					<div className="main-menu__wrapper clearfix">
						<div className="auto-container">
							<div className="main-menu__wrapper-inner">
								<div className="main-header-one__bottom-left">
									<div className="logo-box-one">
										<Link href="/">
											<img
												src="assets/images/resources/logo-1.png"
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
										<Link href="/contact">Get A Quote</Link>
									</div>

									<div className="contact-box">
										<div className="icon">
											<span className="icon-chatting"></span>
										</div>
										<div className="text">
											<p>Call Anytime</p>
											<a href="tel:926668880000">92 666 888 0000</a>
										</div>
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

export default HeaderOne;