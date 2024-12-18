
"use client"

import Link from 'next/link';
import React from 'react';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

const WhyChoose = () => {
  return (
    <>
      <section className="why-choose-one">
        <div className="shape1"></div>
        <div className="shape2"><img src="assets/images/shapes/why-choose-v1-shape1.png" alt="#" /></div>
        <div className="shape3"><img src="assets/images/shapes/why-choose-v1-shape2.png" alt="#" /></div>
        <div className="why-choose-one__bg"
          style={{ background: `url(/assets/images/pattern/why-choose-v1-pattern.png)` }}></div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              <span className="left"></span>
              <h6>People love</h6>
              <span className="right"></span>
            </div>
            <h2 className="sec-title__title">Why Choose Us Our Garden</h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="why-choose-one__inner">
                <div className="why-choose-one__tab-box tabs-box">

                  <div className="row filter-layout masonary-layout">

                    <div className="col-xl-4">
                      <ul className="nav nav-tabs tab-buttons clearfix list-unstyled" id="myTab" role="tablist">
                        <li className="tab-btn wow fadeInLeft" role="presentation">
                          <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            Guarantee Services
                          </button>
                        </li>
                        <li className="tab-btn wow fadeInLeft" role="presentation">
                          <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            Environmental Friendly
                          </button>
                        </li>
                        <li className="tab-btn wow fadeInLeft" role="presentation">
                          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            Support Team
                          </button>
                        </li>
                      </ul>
                    </div>


                    <div className="col-xl-8">
                      <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="tabs-content__inner">
                            <div className="tabs-content__inner-bg"
                              style={{ background: `url(/assets/images/resources/why-choose-v1-img1.jpg)` }}>
                            </div>
                            <div className="tabs-content__list clearfix">
                              <ul className="clearfix">
                                <li>
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-gardening"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">1. Gardening <br />
                                      Design</Link></h4>
                                  </div>
                                </li>

                                <li className="mt30">
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-farmer"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Available <br />
                                      24/7</Link></h4>
                                  </div>
                                </li>

                                <li>
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-shovels"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experience <br />
                                      of 20 year</Link></h4>
                                  </div>
                                </li>

                                <li className="mt30">
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-pruning-shears"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experts <br />
                                      Worker</Link></h4>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div className="tabs-content__inner">
                            <div className="tabs-content__inner-bg"
                              style={{ background: `url(/assets/images/resources/why-choose-v1-img1.jpg)` }}>
                            </div>
                            <div className="tabs-content__list clearfix">
                              <ul className="clearfix">
                                <li>
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-gardening"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">2. Gardening <br />
                                      Design</Link></h4>
                                  </div>
                                </li>

                                <li className="mt30">
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-farmer"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Available <br />
                                      24/7</Link></h4>
                                  </div>
                                </li>

                                <li>
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-shovels"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experience <br />
                                      of 20 year</Link></h4>
                                  </div>
                                </li>

                                <li className="mt30">
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-pruning-shears"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experts <br />
                                      Worker</Link></h4>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                          <div className="tabs-content__inner">
                            <div className="tabs-content__inner-bg"
                              style={{ background: `url(/assets/images/resources/why-choose-v1-img1.jpg)` }}>
                            </div>
                            <div className="tabs-content__list clearfix">
                              <ul className="clearfix">
                                <li>
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-gardening"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">3. Gardening <br />
                                      Design</Link></h4>
                                  </div>
                                </li>

                                <li className="mt30">
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-farmer"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Available <br />
                                      24/7</Link></h4>
                                  </div>
                                </li>

                                <li>
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-shovels"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experience <br />
                                      of 20 year</Link></h4>
                                  </div>
                                </li>

                                <li className="mt30">
                                  <div className="inner text-center">
                                    <div className="icon-box">
                                      <span className="icon-pruning-shears"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experts <br />
                                      Worker</Link></h4>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;