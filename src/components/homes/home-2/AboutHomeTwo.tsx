 

import Count from '@/components/common/count';
import React from 'react';
 
const AboutHomeTwo = () => {
  return (
    <>
       <section className="about-two">
            <div className="about-two__bg" style={{background: `url(/assets/images/backgrounds/about-v2-bg.png)`}}></div>
            <div className="container">
                <div className="row"> 
                    <div className="col-xl-6">
                        <div className="about-two__img">
                            <div className="about-two__img1">
                                <img src="assets/images/about/about-v2-img1.jpg" alt="#" />
                            </div>
                            <div className="about-two__img2 wow zoomIn" data-wow-delay="100ms" data-wow-duration="3500ms">
                                <img src="assets/images/about/about-v2-img2.jpg" alt="#" />
                            </div>
                            <div className="counter-box">
                                <h2>
                                    <Count number={12} text='+' /> 
                                    </h2>
                                <p>Years of <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6">
                        <div className="about-two__content">
                            <div className="sec-title style2">
                                <div className="sec-title__tagline">
                                    <div className="img-box"><img src="assets/images/resources/sec-title-img2.png" alt="#" />
                                    </div>
                                    <h6>Welcome to our garden</h6>
                                </div>
                                <h2 className="sec-title__title">We Provide Gardening <br /> Best Services</h2>
                            </div>

                            <div className="about-two__content-text1">
                                <p>There are many variations of passages of available, but the majority have suffered
                                    alteration in some form, by injected humour, or randomised words which don’t look
                                    even slightly believable.</p>
                            </div>

                            <div className="about-two__content-text2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="single-box">
                                            <div className="icon-box">
                                                <span className="icon-planting"></span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Soil Marking & <br /> Carbo</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="single-box">
                                            <div className="icon-box">
                                                <span className="icon-planting"></span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Commercial <br /> Planting</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-two__content-text3">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even.</p>
                            </div>

                            <div className="about-two__progress">
                                <div className="about-two__progress-single">
                                    <div className="title">
                                        <h4>Landscaping Ground</h4>
                                    </div>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="88%" style={{width: "88%"}}>
                                            <div className="count-text">88%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-two__progress-single mb0">
                                    <div className="title">
                                        <h4>Soil Re-bulding</h4>
                                    </div>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="60%" style={{width: "60%"}}>
                                            <div className="count-text">60%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutHomeTwo;