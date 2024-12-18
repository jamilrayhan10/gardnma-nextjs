"use client"
import Count from '@/components/common/count';
import React from 'react';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}
const ProjectHomeTwo = () => {
  return (
    <>
      <section className="projects-two">
            <div className="shape1 rotate-me"><img src="assets/images/shapes/projects-v2-shape1.png" alt="#" /></div>
            <div className="shape2 float-bob-y"><img src="assets/images/shapes/projects-v2-shape2.png" alt="#" /></div>
            <div className="container">
                <div className="row">

                     
                    <div className="col-xl-6">
                        <div className="projects-two__content">
                            <div className="sec-title style2">
                                <div className="sec-title__tagline">
                                    <div className="img-box"><img src="assets/images/resources/sec-title-img2.png" alt="#" />
                                    </div>
                                    <h6>Our Portfolio</h6>
                                </div>
                                <h2 className="sec-title__title">Our Latest Projects</h2>
                            </div>

                            <div className="projects-two__content-text1">
                                <p>There are many variations of passages of available, but the majority
                                    have suffered alteration in some form, by injected randomised
                                    words which don’t look even slightly believable.</p>
                            </div>
                            <div className="projects-two__content-tab tabs-box"> 

                                <ul className="tab-buttons clearfix" id="myTab" role="tablist">
                                  <li className="tab-btn" role="presentation">
                                    <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">
                                    Investment
                                    </button>
                                  </li>
                                  <li className="tab-btn active-btn" role="presentation">
                                    <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                    Financial
                                    </button>
                                  </li>
                                  <li className="tab-btn" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                    Landscaping
                                    </button>
                                  </li>
                                </ul>
                                 


                                <div className="tab-content" id="myTabContent">
                                     
                                    <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                        <div className="projects-two__tabs-content">
                                            <div className="projects-two__tabs-content-img">
                                                <div className="border-box"></div>
                                                <img src="assets/images/project/projects-v2-img1.jpg" alt="#" />
                                                <div className="overlay-content">

                                                    <ul>
                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>1. Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>01</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>02</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>03</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                   
                                     
                                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="projects-two__tabs-content">
                                            <div className="projects-two__tabs-content-img">
                                                <div className="border-box"></div>
                                                <img src="assets/images/project/projects-v2-img1.jpg" alt="#" />
                                                <div className="overlay-content">

                                                    <ul>
                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>2. Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>01</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>02</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>03</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                               
                                     
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="projects-two__tabs-content">
                                            <div className="projects-two__tabs-content-img">
                                                <div className="border-box"></div>
                                                <img src="assets/images/project/projects-v2-img1.jpg" alt="#" />
                                                <div className="overlay-content">

                                                    <ul>
                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>3. Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>01</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>02</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="inner">
                                                                <div className="text-box">
                                                                    <h4>Private Garden</h4>
                                                                    <p>Assistant</p>
                                                                </div>

                                                                <div className="number-box">
                                                                    <span>03</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                     

                     
                    <div className="col-xl-6">
                        <div className="projects-two__counter clearfix">
                            <div className="projects-two__counter-img"
                                style={{background: `url(/assets/images/project/projects-v2-img2.jpg)`}}>
                            </div>

                            <div className="projects-two__counter-box">
                                <ul>
                                    <li>
                                        <h2><span className="odometer" data-count="87"> <Count number={87} /> </span> <span className="plus">+</span>
                                        </h2>
                                        <p>Total apartments</p>
                                        <div className="border-box"></div>
                                    </li>

                                    <li>
                                        <h2><span className="odometer" data-count="291"> <Count number={291} /> </span> <span
                                                className="plus">+</span>
                                        </h2>
                                        <p>Quality features</p>
                                        <div className="border-box"></div>
                                    </li>

                                    <li>
                                        <h2><span className="odometer" data-count="9"> <Count number={9} /> </span> <span className="plus">+</span>
                                        </h2>
                                        <p>Award Wins</p>
                                        <div className="border-box"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 

                </div>
            </div>
        </section>
    </>
  );
};

export default ProjectHomeTwo;