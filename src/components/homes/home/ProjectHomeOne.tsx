"use client"

import React from 'react';
import Count from '@/components/common/count';

const ProjectHomeOne = () => {
  return (
    <>
       <section className="projects-one">
            <div className="projects-one__bg" style={{ background: `url(/assets/images/backgrounds/projects-v1-bg.jpg)` }}>
            </div>
            <div className="container">
                <div className="sec-title">
                    <div className="sec-title__tagline">
                        <h6>Our Projects </h6>
                        <span className="right"></span>
                    </div>
                    <h2 className="sec-title__title">We Have Successful  
                      <span className="odometer" data-count="50">
                       {' '} <Count number={50} />
                    </span> 
                       <br /> More Projects</h2>
                </div>

                <div className="projects-one__inner">
                    <ul className="row filter-layout masonary-layout">
                        <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                            <div className="projects-one__single mb60">
                                <div className="projects-one__single-img">
                                    <img src="assets/images/project/projects-v1-img1.jpg" alt="#" />
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-right-arrow-1"></span></a>
                                    </div>
                                    <div className="overlay-content">
                                        <span>farming</span>
                                        <h2><a href="#">Harvest <br />
                                                Innovations</a></h2>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                            <div className="projects-one__single mb30">
                                <div className="projects-one__single-img">
                                    <img src="assets/images/project/projects-v1-img2.jpg" alt="#" />
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-right-arrow-1"></span></a>
                                    </div>
                                    <div className="overlay-content">
                                        <span>farming</span>
                                        <h2><a href="#">Harvest <br />
                                                Innovations</a></h2>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                            <div className="projects-one__single">
                                <div className="projects-one__single-img">
                                    <img src="assets/images/project/projects-v1-img3.jpg" alt="#" />
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-right-arrow-1"></span></a>
                                    </div>
                                    <div className="overlay-content">
                                        <span>farming</span>
                                        <h2><a href="#">Harvest <br />
                                                Innovations</a></h2>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                            <div className="projects-one__single">
                                <div className="projects-one__single-img">
                                    <img src="assets/images/project/projects-v1-img4.jpg" alt="#" />
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-right-arrow-1"></span></a>
                                    </div>
                                    <div className="overlay-content">
                                        <span>farming</span>
                                        <h2><a href="#">Harvest <br />
                                                Innovations</a></h2>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                            <div className="projects-one__single">
                                <div className="projects-one__single-img">
                                    <img src="assets/images/project/projects-v1-img5.jpg" alt="#" />
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-right-arrow-1"></span></a>
                                    </div>
                                    <div className="overlay-content">
                                        <span>farming</span>
                                        <h2><a href="#">Harvest <br />
                                                Innovations</a></h2>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                            <div className="projects-one__single mb0">
                                <div className="projects-one__single-img">
                                    <img src="assets/images/project/projects-v1-img6.jpg" alt="#" />
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-right-arrow-1"></span></a>
                                    </div>
                                    <div className="overlay-content">
                                        <span>farming</span>
                                        <h2><a href="#">Harvest <br />
                                                Innovations</a></h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default ProjectHomeOne;