
import Link from 'next/link';
import React from 'react';

const CtaHomeTwo = () => {
  return (
    <>
      <section className="slogan-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="slogan-one__inner">
                            <div className="shape1"><img src="assets/images/shapes/slogan-v1-shape1.png" alt="#" /></div>
                            <div className="slogan-one__bg" style={{background: `url(/assets/images/backgrounds/slogan-v1-bg.png)`}}>
                            </div>
                            <div className="content-box">
                                <h2><span>Provides</span> hassle-free backyard <br />
                                    transformations</h2>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" href="/contact">
                                    <span className="txt">Get A Quote</span>
                                    <i className="fa fa-angle-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CtaHomeTwo;