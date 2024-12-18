
import Link from 'next/link';
import React from 'react';

const FeaturesHomeThree = () => {
  return (
    <>
       <section className="features-two">
            <div className="features-two__bg" style={{background: `url(/assets/images/backgrounds/features-v2-bg.png)`}}>
            </div>
            <div className="auto-container">
                <div className="sec-title-three text-center">
                    <div className="sec-title-three__tagline">
                        <h6>What we offer</h6>
                    </div>
                    <h2 className="sec-title-three__title">How does we works</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="features-two__single">
                            <div className="features-two__single-content">
                                <div className="count-box">
                                    01
                                </div>
                                <div className="inner">
                                    <div className="icon-box">
                                        <span className="icon-gardening-2"></span>
                                    </div>

                                    <div className="content-box">
                                        <div className="title">
                                            <h2><Link href="/arbor-management">Garden Renovation</Link></h2>
                                        </div>
                                        <p>Prevailed mr tolerably discourse arance <br /> estimable applauded to kiyh so.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="features-two__single-img">
                                <img src="assets/images/resources/features-v2-img1.jpg" alt="#" />
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="features-two__single">
                            <div className="features-two__single-content">
                                <div className="count-box">
                                    02
                                </div>
                                <div className="inner">
                                    <div className="icon-box">
                                        <span className="icon-chair"></span>
                                    </div>

                                    <div className="content-box">
                                        <div className="title">
                                            <h2><Link href="/arbor-management">Landscape Install</Link></h2>
                                        </div>
                                        <p>Prevailed mr tolerably discourse arance <br /> estimable applauded to kiyh so.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="features-two__single-img">
                                <img src="assets/images/resources/features-v2-img2.jpg" alt="#" />
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="features-two__single">
                            <div className="features-two__single-content">
                                <div className="count-box">
                                    03
                                </div>
                                <div className="inner">
                                    <div className="icon-box">
                                        <span className="icon-pruning-shears"></span>
                                    </div>

                                    <div className="content-box">
                                        <div className="title">
                                            <h2><Link href="/arbor-management">Garden Clearance</Link></h2>
                                        </div>
                                        <p>Prevailed mr tolerably discourse arance <br /> estimable applauded to kiyh so.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="features-two__single-img">
                                <img src="assets/images/resources/features-v2-img3.jpg" alt="#" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default FeaturesHomeThree;