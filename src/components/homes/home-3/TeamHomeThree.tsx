
import Link from 'next/link';
import React from 'react';

const TeamHomeThree = ({style_2} : any) => {
  return (
    <>
      <section className={`team-two ${style_2 ? "team-two--about" : ""}`}>
        {style_2 ? null :
        <>
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/team-v2-shape1.png" alt="#" /></div>
            <div className="shape2 float-bob-y"><img src="assets/images/shapes/team-v2-shape2.png" alt="#" /></div>
        </>
        
        }
            <div className="container">
                <div className="sec-title-three text-center">
                    <div className="sec-title-three__tagline">
                        <h6>Our Team</h6>
                    </div>
                    <h2 className="sec-title-three__title">Our expert members</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1000ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img1.jpg" alt="#" />
                                <ul className="social-links clearfix">
                                    <li className="share"><a href="#"><span className="icon-share"></span></a>
                                        <ul className="social-links-inner">
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="team-two__single-content">
                                <h2><Link href="/team-details">Amanda Tim</Link></h2>
                                <p>Stocker</p>
                            </div>
                        </div>
                    </div>                    
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms"
                        data-wow-duration="1000ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img2.jpg" alt="#" />
                                <ul className="social-links clearfix">
                                    <li className="share"><a href="#"><span className="icon-share"></span></a>
                                        <ul className="social-links-inner">
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="team-two__single-content">
                                <h2><Link href="/team-details">Humbled Dow</Link></h2>
                                <p>Gardenist</p>
                            </div>
                        </div>
                    </div>                  

                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                        data-wow-duration="1000ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img3.jpg" alt="#" />
                                <ul className="social-links clearfix">
                                    <li className="share"><a href="#"><span className="icon-share"></span></a>
                                        <ul className="social-links-inner">
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="team-two__single-content">
                                <h2><Link href="/team-details">Munia Anchor</Link></h2>
                                <p>Garden Experts</p>
                            </div>
                        </div>
                    </div>                  

                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1000ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img4.jpg" alt="#" />
                                <ul className="social-links clearfix">
                                    <li className="share"><a href="#"><span className="icon-share"></span></a>
                                        <ul className="social-links-inner">
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="team-two__single-content">
                                <h2><Link href="/team-details">Albert Hopper</Link></h2>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default TeamHomeThree;