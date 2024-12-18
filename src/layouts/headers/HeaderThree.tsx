"use client"
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';
import UseSticky from '@/hooks/UseSticky';
import Search from '@/components/common/Search';
import OffCanvas from '@/components/common/OffCanvas';

const HeaderThree = () => {
  const { sticky } = UseSticky()
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState(false)

  return (
		<>
			<header className="main-header main-header-three">
				<div className="main-header-three__inner">
					<nav className="main-menu main-menu-one">
						<div className="main-menu__wrapper clearfix">
							<div className="container-fluid">
								<div className="main-menu__wrapper-inner">
									<div className="main-header-three__left">
										<div className="main-menu-box">
											<a onClick={() => setOpen(!open)} style={{cursor: "pointer"}} className="mobile-nav__toggler">
												<i className="fa fa-bars"></i>
											</a>
											<NavMenu />
										</div>
									</div>

									<div className="main-header-three__middle">
										<div className="logo-box-one">
											<Link href="/">
												<img
													src="assets/images/resources/logo-3.png"
													alt="Awesome Logo"
													title=""
												/>
											</Link>
										</div>
									</div>

									<div className="main-header-three__right">
										<div className="main-header-three__right-contact">
											<div className="icon-box">
												<span className="icon-phone"></span>
											</div>

											<div className="content-box">
												<p>Call In Anytime</p>
												<a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
											</div>
										</div>

										<div className="header-search-box">
											<a
												onClick={() => setSearch(!search)}
												style={{cursor: "pointer"}}
												className="main-menu__search search-toggler icon-magnifying-glass"
											></a>
										</div>

										<div className="right-box">
											<div className="top-box">
												<div className="icon-box">
													<span className="icon-dollar"></span>
												</div>
												<div className="text-box">
													<p>
														We do not received <br /> extra charges
													</p>
												</div>
											</div>

											<div className="btn-box">
												<Link href="/contact">Book Appointment</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</header>

			<div
				className={`stricky-header stricky-header--three stricked-menu main-menu ${
					sticky ? "stricky-fixed" : ""
				}`}
			>
				<div className="sticky-header__content">
					<div className="main-menu__wrapper clearfix">
						<div className="container-fluid">
							<div className="main-menu__wrapper-inner">
								<div className="main-header-three__left">
									<div className="main-menu-box">
										<a onClick={() => setOpen(!open)} style={{cursor: "pointer"}} className="mobile-nav__toggler">
											<i className="fa fa-bars"></i>
										</a>

										<NavMenu />
									</div>
								</div>

								<div className="main-header-three__middle">
									<div className="logo-box-one">
										<Link href="/">
											<img
												src="assets/images/resources/logo-3.png"
												alt="Awesome Logo"
												title=""
											/>
										</Link>
									</div>
								</div>

								<div className="main-header-three__right">
									<div className="main-header-three__right-contact">
										<div className="icon-box">
											<span className="icon-phone"></span>
										</div>

										<div className="content-box">
											<p>Call In Anytime</p>
											<a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
										</div>
									</div>

									<div className="header-search-box">
										<a
											onClick={() => setSearch(!search)}
											style={{cursor: "pointer"}}
											className="main-menu__search search-toggler icon-magnifying-glass"
										></a>
									</div>

									<div className="right-box">
										<div className="top-box">
											<div className="icon-box">
												<span className="icon-dollar"></span>
											</div>
											<div className="text-box">
												<p>
													We do not received <br /> extra charges 
												</p>
											</div>
										</div>

										<div className="btn-box">
											<Link href="/contact">Book Appointment</Link>
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

export default HeaderThree;