"use client";

import React from 'react';
import Link from 'next/link';

const FooterOne = () => {
  return (
    <>
      <footer className="footer-one">
            <div className="footer-one__bg" style={{ backgroundImage: 'url(/assets/images/shapes/footer-v1-shape3.png)'}}></div>
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/footer-v1-shape1.png" alt="#" /></div>
            <div className="shape2 float-bob-y"><img src="assets/images/shapes/footer-v1-shape2.png" alt="#" /></div>
            {/* <!--Start Footer--> */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* <!--Start Footer Widget Single--> */}
                        <div className="col-xl-5 col-lg-5  wow animated fadeInUp" data-wow-delay="0.1s">
                            <div className="footer-widget__single">
                                <div className="footer-widget__single-about">
                                    <div className="logo-box">
                                        <Link href="/"><img src="assets/images/resources/footer-logo.png" alt="#" /></Link>
                                    </div>

                                    <form className="footer-widget__subscribe-box" onSubmit={e => e.preventDefault()}>
                                        <div className="title-box">
                                            <h5>Subsrcibe for Latest Articles and Resources</h5>
                                        </div>
                                        <div className="footer-widget__subscribe-input-box">
                                            <input type="email" placeholder="Email Address" name="email" />
                                            <button type="submit" className="footer-widget__subscribe-btn">
                                                <span>Go</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!--End Footer Widget Single--> */}

                        {/* <!--Start Footer One Right--> */}
                        <div className="col-xl-7 col-lg-7">
                            <div className="footer-one__right">
                                <div className="row">
                                    {/* <!--Start Footer One Right Single--> */}
                                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                                        <div className="footer-one__right-single mb50">
                                            <div className="title">
                                                <h2>Our Services</h2>
                                            </div>
                                            <div className="footer-one__right-single-services">
                                                <ul className="footer-one__right-single-list">
                                                    <li><Link href="/services">Lawn Moving</Link></li>
                                                    <li><Link href="/services">Hedge Cutting</Link></li>
                                                    <li><Link href="/services">Flower Planting</Link></li>
                                                    <li><Link href="/services">Working Process</Link></li>
                                                    <li><Link href="/services">Garden Restoration</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End Footer One Right Single--> */}

                                    {/* <!--Start Footer One Right Single--> */}
                                    <div className="col-xl-3 col-lg-3 wow animated fadeInUp" data-wow-delay="0.3s">
                                        <div className="footer-one__right-single mb50">
                                            <div className="title">
                                                <h2>Links</h2>
                                            </div>
                                            <div className="footer-one__right-single-links">
                                                <ul className="footer-one__right-single-list">
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/team">Our Team</Link></li>
                                                    <li><Link href="/contact">Contact Us</Link></li>
                                                    <li><a href="#">Our History</a></li>
                                                    <li><a href="#">Testimonials</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End Footer One Right Single--> */}

                                    {/* <!--Start Footer One Right Single--> */}
                                    <div className="col-xl-5 col-lg-5 wow animated fadeInUp" data-wow-delay="0.4s">
                                        <div className="footer-one__right-single">
                                            <div className="title">
                                                <h2>Contact</h2>
                                            </div>
                                            <div className="footer-one__right-single-contact">
                                                <p> <a href="mailto:yourmail@email.com">needhelp@company.com</a>
                                                    <br /> 80 Broklyn Road Street <br />
                                                    New York. USA</p>
                                                <a href=" mailto:yourmail@email.com">info@example.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End Footer One Right Single--> */}
                                </div>

                                <div className="footer-one__right-bottom wow animated fadeInUp" data-wow-delay="0.1s">
                                    <ul className="social-links">
                                        <li> <a href="#"><span className="icon-twitter"></span></a> </li>
                                        <li> <a href="#"><span className="icon-facebook"></span></a> </li>
                                        <li> <a href="#"><span className="icon-pinterest"></span></a> </li>
                                        <li> <a href="#"><span className="icon-instagram"></span></a> </li>
                                    </ul>

                                    <div className="footer-one__right-bottom-contact">
                                        <div className="icon-box">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="content-box">
                                            <p>Call Anytime</p>
                                            <h4><a href="tel:9288006780">+92 ( 8800 ) - 6780</a></h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!--End Footer One Right--> */}
                    </div>
                </div>
            </div>
            {/* <!--End Footer--> */}


            <div className="footer-one__bottom">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="copyright">
                            <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
                        </div>

                        <ul className="footer-one__bottom-menu">
                            <li><Link href="/about">Terms & Condition</Link></li>
                            <li><Link href="/about">Privacy </Link></li>
                            <li><Link href="/about">Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    </>
  );
};

export default FooterOne;