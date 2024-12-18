
"use client"
import NiceSelect from '@/ui/NiceSelect';
import React from 'react';

const ContactHomeOne = () => {

  const selectHandler = (e: any) => { };


  return (
    <>
      <section className="contact-one">
        <div className="contact-one__img wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
          <img className="float-bob-y" src="assets/images/resources/content-v1-img1.png" alt="#" />
        </div>
        <div className="shape1"><img src="assets/images/shapes/contact-v1-shape1.png" alt="#" /></div>
        <div className="shape2"><img src="assets/images/shapes/contact-v1-shape2.png" alt="#" /></div>
        <div className="container">
          <div className="row">
            {/* Start Contact One Form */}
            <div className="col-xl-8">
              <div className="contact-one__form">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6>Contact Us</h6>
                    <span className="right"></span>
                  </div>
                  <h2 className="sec-title__title">You Can Easily Book Our <br /> Appointment</h2>
                </div>


                <form id="contact-form" name="contact_form" className="default-form2" onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input type="text" name="form_name"  placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input type="email" name="form_email"  placeholder="Email Address" required />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input type="text" name="form_subject"  placeholder="Select Date" id="datepicker" />
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
                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                          <span className="txt">Book Now</span>
                          <i className="icon-double-chevron"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Contact One Form */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHomeOne;