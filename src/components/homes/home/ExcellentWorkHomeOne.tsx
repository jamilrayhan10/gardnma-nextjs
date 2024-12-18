"use client"; 

import Link from 'next/link';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ExcellentWorkHomeOne = () => {

  const percentage = 90;
  const percentage2 = 66;



  return (
    <>
       <section className="excellent-work-one">
            <div className="shape1 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
              <img className="float-bob-y" src="assets/images/shapes/excellent-work-v1-shape1.png" alt="#" /></div>
            <div className="excellent-work-one__bg" style={{background: `url(/assets/images/backgrounds/excellent-work-v1-bg.jpg)`}}>

                <div className="content-box">
                    <div className="img-box">
                        <img src="assets/images/resources/excellent-work-v1-img2.png" alt="#" />
                    </div>
                    <div className="text-box">
                        <h2>We Have Solution For Your Garden</h2>
                    </div>

                    <div className="btn-box">
                        <Link className="thm-btn" href="/contact">
                            <span className="txt">Contact Now</span>
                            <i className="fa fa-angle-double-right"></i>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6"></div>
                    <div className="col-xl-6">
                        <div className="excellent-work-one__content">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <h6>Excellent Work</h6>
                                    <span className="right"></span>
                                </div>
                                <h2 className="sec-title__title">We Work at a Landscape <br /> Company Process</h2>
                            </div>

                            <div className="text-box">
                                <p>There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo
                                    massa mollis estiegittis massa at urnaaculis estie. miristum nulla sed medy
                                    fringilla vitae.</p>
                            </div>

                            <div className="excellent-work-one__progress">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="excellent-work-one__progress-single">
                                            <div className="progress-box">
                                                <div className="graph-outer"> 
                                                  <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <h2>Agriculture <br /> Projects</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="excellent-work-one__progress-single">
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                <CircularProgressbar value={percentage2} text={`${percentage2}%`} />;

                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <h2>Quality <br /> products</h2>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <ul className="excellent-work-one__content-list">
                                <li>
                                    <p> <span className="icon-tick"></span> There are many variations of passage of
                                        lorem.</p>
                                </li>

                                <li>
                                    <p> <span className="icon-tick"></span> Available but the majority alteration.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default ExcellentWorkHomeOne;