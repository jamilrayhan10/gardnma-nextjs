"use client";

import VideoPopup from '@/modals/VideoPopup';
import NiceSelect from '@/ui/NiceSelect';
import React, { useState } from 'react';

const ContactHomeThree = () => {
  const selectHandler = (e: any) => { };
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);


  return (
    <>

     {/* video modal start */}
     <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"8Oa21aCw8nU"}
      />
      {/* video modal end */}
       <section className="free-quote-one">
            <div className="shape1">
              <img src="assets/images/shapes/free-quote-v1-shape1.png" alt="#" />
              </div>
            <div className="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
              <img className="float-bob-y" src="assets/images/shapes/free-quote-v1-shape2.png" alt="#" />
            </div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-5">
                        <div className="free-quote-one__img">
                            <div className="free-quote-one__img1">
                                <div className="free-quote-one__img-content">
                                    <h2>Get <br /> A <br /> Quote</h2>
                                </div>
                                <img src="assets/images/resources/free-quote-v1-img1.png" alt="#" />
                            </div>

                            <div className="free-quote-one__img2">
                                <img src="assets/images/resources/free-quote-v1-img2.png" alt="#" />

                                <div className="video-box">
                                    <a 
                                    onClick={() => setIsVideoOpen(true)}
                                    style={{ cursor: "pointer" }}
                                    className="video-popup">
                                        <div className="free-quote-one__video">
                                            <span className="icon-play-button"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    
                    <div className="col-xl-7">
                        <div className="free-quote-one__content">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>free quote</h6>
                                </div>
                                <h2 className="sec-title-three__title">Get an insurance quote <br /> to get started!</h2>
                            </div>

                            <div className="free-quote-one__content-text">
                                <p>There are many variats of passages the majority available <br />
                                    have suffered a in some form by available companu <br />
                                    alte pic alte in some form by to at available.</p>
                            </div>

                            <div className="free-quote-one__content-form">
                                <form id="contact-form" name="contact_form" className="default-form2"
                                    onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input type="text" name="form_name" value="" placeholder="Full name"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input type="email" name="form_email" value=""
                                                    placeholder="Email address" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <div className="select-box"> 

                                                    <NiceSelect
                                                      className="selectmenu wide d-flex align-items-center"
                                                      options={[
                                                        { value: "00", text: "Select Categories" },
                                                        { value: "01", text: "Categories 01" },
                                                        { value: "02", text: "Categories 02" },
                                                        { value: "04", text: "Categories 03" },
                                                      ]}
                                                      defaultCurrent={0}
                                                      onChange={selectHandler}
                                                      placeholder="Select an option"
                                                      name="myNiceSelect"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="free-quote-one__content-form-btn">
                                                <button className="thm-btn" type="submit"
                                                    data-loading-text="Please wait...">
                                                    <span className="txt">Send</span>
                                                    <i className="icon-double-chevron"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactHomeThree;