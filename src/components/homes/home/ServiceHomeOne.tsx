

import Link from 'next/link';
import React from 'react';

const ServiceHomeOne = () => {
  return (
    <>
      <section className="services-one">
        <div className="gradient-bg"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              <span className="left"></span>
              <h6>Our Services</h6>
              <span className="right"></span>
            </div>
            <h2 className="sec-title__title">Professional Featured</h2>
          </div>

          <div className="row">
            {/* Start Services One Single */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
              <div className="services-one__single">
                <div className="shape1"><img src="assets/images/shapes/services-v1-shape2.png" alt="#" /></div>
                <div className="shape2"><img src="assets/images/shapes/services-v1-shape3.png" alt="#" /></div>
                <div className="shape3"><img src="assets/images/shapes/services-v1-shape4.png" alt="#" /></div>
                <div className="services-one__single-img">
                  <div className="services-one__single-img-bg" style={{ backgroundImage: 'url(assets/images/shapes/services-v1-shape1.png)' }}></div>
                  <div className="overlay-icon">
                    <div className="icon-box">
                      <span className="icon-gardening-1"></span>
                    </div>
                  </div>
                  <img src="assets/images/services/services-v1-img1.jpg" alt="#" />
                </div>

                <div className="services-one__single-content text-center">
                  <h2><Link href="/arbor-management">Irrigation And <br /> Drainage </Link></h2>
                  <p>I was impresed by the agrion services, not lorem ipsum is simply free text.</p>
                </div>
              </div>
            </div>
            {/* End Services One Single */}

            {/* Start Services One Single */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
              <div className="services-one__single">
                <div className="shape1"><img src="assets/images/shapes/services-v1-shape2.png" alt="#" /></div>
                <div className="shape2"><img src="assets/images/shapes/services-v1-shape3.png" alt="#" /></div>
                <div className="shape3"><img src="assets/images/shapes/services-v1-shape4.png" alt="#" /></div>
                <div className="services-one__single-img">
                  <div className="services-one__single-img-bg" style={{ backgroundImage: 'url(assets/images/shapes/services-v1-shape1.png)' }}></div>
                  <div className="overlay-icon">
                    <div className="icon-box">
                      <span className="icon-gardening-1"></span>
                    </div>
                  </div>
                  <img src="assets/images/services/services-v1-img2.jpg" alt="#" />
                </div>

                <div className="services-one__single-content text-center">
                  <h2><Link href="/arbor-management">Tree And Shrub <br /> Services </Link></h2>
                  <p>I was impresed by the agrion services, not lorem ipsum is simply free text.</p>
                </div>
              </div>
            </div>
            {/* End Services One Single */}

            {/* Start Services One Single */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
              <div className="services-one__single">
                <div className="shape1"><img src="assets/images/shapes/services-v1-shape2.png" alt="#" /></div>
                <div className="shape2"><img src="assets/images/shapes/services-v1-shape3.png" alt="#" /></div>
                <div className="shape3"><img src="assets/images/shapes/services-v1-shape4.png" alt="#" /></div>
                <div className="services-one__single-img">
                  <div className="services-one__single-img-bg" style={{ backgroundImage: 'url(assets/images/shapes/services-v1-shape1.png)' }}></div>
                  <div className="overlay-icon">
                    <div className="icon-box">
                      <span className="icon-gardening-1"></span>
                    </div>
                  </div>
                  <img src="assets/images/services/services-v1-img3.jpg" alt="#" />
                </div>

                <div className="services-one__single-content text-center">
                  <h2><Link href="/arbor-management">Garden Commercial <br /> Landscaping </Link></h2>
                  <p>I was impresed by the agrion services, not lorem ipsum is simply free text.</p>
                </div>
              </div>
            </div>
            {/* End Services One Single */}

            {/* Start Services One Single */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
              <div className="services-one__single">
                <div className="shape1"><img src="assets/images/shapes/services-v1-shape2.png" alt="#" /></div>
                <div className="shape2"><img src="assets/images/shapes/services-v1-shape3.png" alt="#" /></div>
                <div className="shape3"><img src="assets/images/shapes/services-v1-shape4.png" alt="#" /></div>
                <div className="services-one__single-img">
                  <div className="services-one__single-img-bg" style={{ backgroundImage: 'url(assets/images/shapes/services-v1-shape1.png)' }}></div>
                  <div className="overlay-icon">
                    <div className="icon-box">
                      <span className="icon-gardening-1"></span>
                    </div>
                  </div>
                  <img src="assets/images/services/services-v1-img4.jpg" alt="#" />
                </div>

                <div className="services-one__single-content text-center">
                  <h2><Link href="/arbor-management">Lawn And Garden br Care</Link></h2>
                  <p>I was impresed by the agrion services, not lorem ipsum is simply free text.</p>
                </div>
              </div>
            </div>
            {/* End Services One Single */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHomeOne;