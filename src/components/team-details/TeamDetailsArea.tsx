"use client";
import NiceSelect from '@/ui/NiceSelect';
import React from 'react';

const TeamDetailsArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
       <section className="team-details">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-8 col-lg-7">
                        <div className="team-details__content">
                            <div className="title-box">
                                <h2>Rason Singh</h2>
                                <p>Jr. Landscaper</p>
                            </div>

                            <div className="team-details__content-text1">
                                <p>There are many variats of passages the majority lte pic alte in some formesrs
                                    have suffered a in some form by available companu juterwfe hgfter lkeiiyerr
                                    alte pic alte in some form by to at available toppicted to discuat thisledti
                                    misson to succtess busineg top higfhedfte lebels in the worlds.yewt</p>
                            </div>

                            <div className="team-details__content-text2">
                                <p>There are many variats of passages the majority lte pic alte in some form ate
                                    have suffered a in some form by available companu juterwfe hgfterees.</p>
                            </div>

                            <div className="team-details__progress">

                                
                                <div className="team-details__progress-single">
                                    <h4 className="team-details__progress-title">Soil Re-bulding
                                    </h4>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="90%" style={{width: '90%'}}>
                                            <div className="count-text">90%</div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="team-details__progress-single">
                                    <h4 className="team-details__progress-title">Landscaping Ground
                                    </h4>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{width: '75%'}}>
                                            <div className="count-text">75%</div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="team-details__progress-single mb0">
                                    <h4 className="team-details__progress-title">Planting Plants
                                    </h4>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="85%" style={{width: '85%'}}>
                                            <div className="count-text">85%</div>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>

                            <div className="contact-one__form contact-one__form--team-details">
                                <form id="contact-form" name="contact_form" className="default-form2"
                                    action="assets/inc/sendmail.php" method="post">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="form_name" value="" placeholder="Your Name"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="email" name="form_email" value=""
                                                    placeholder="Email Address" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="form_subject" value=""
                                                    placeholder="Select Date" id="datepicker" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="time" placeholder="Select time" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
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

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__form-btn">
                                                <button className="thm-btn" type="submit"
                                                    data-loading-text="Please wait...">
                                                    <span className="txt">Book Now</span>
                                                    <i className="icon-double-chevron"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    


                    
                    <div className="col-xl-4 col-lg-5">
                        <div className="team-details__right">
                            
                            <div className="team-details__right-single mb40">
                                <div className="team-details__right-single-img">
                                    <img src="assets/images/resources/team-details-img1.jpg" alt="#" />
                                </div>

                                <div className="contact-info">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-phone-call-1"></span>
                                                </div>

                                                <div className="content-box">
                                                    <p> Tel : <a href="tel:12345615523">+ 123-4561-5523</a></p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-message"></span>
                                                </div>

                                                <div className="content-box">
                                                    <p> Email : <a
                                                            href="mailto:yourmail@email.com">needhelp@company.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-placeholder"></span>
                                                </div>

                                                <div className="content-box">
                                                    <p>Add : Flat 20, Reynolds Neck</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            

                            
                            <div className="team-details__right-single">
                                <div className="team-details__right-single-img">
                                    <img src="assets/images/resources/team-details-img2.jpg" alt="#" />
                                </div>

                                <div className="team-details__right-single-content">
                                    <div className="title">
                                        <p>Follow Me On :</p>
                                    </div>
                                    <ul className="social-links">
                                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
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

export default TeamDetailsArea;