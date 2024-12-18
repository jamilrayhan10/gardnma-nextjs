

import Link from 'next/link';
import React from 'react';

const BlogHomeThree = () => {
  return (
    <>
      <section className="blog-three">
            <div className="shape1"><img src="assets/images/shapes/blog-v3-shape1.png" alt="#" /></div>
            <div className="container">
                <div className="sec-title-three text-center">
                    <div className="sec-title-three__tagline">
                        <h6>Our Blog</h6>
                    </div>
                    <h2 className="sec-title-three__title">Our Latest Updates</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src="assets/images/blog/blog-v3-img1.jpg" alt="#" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-v3-img4.jpg" alt="#" />
                                </div>

                                <div className="date-box">
                                    <p>30 June, 2023</p>
                                </div>
                                <div className="blog-three__single-content-inner">

                                    <h2><Link href="/blog-details">Things To Know Choose <br /> a Garden Services</Link>
                                    </h2>
                                    <ul className="meta-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-save-instagram"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#">Admin</a></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-conversation"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#"> 02 Comment</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src="assets/images/blog/blog-v3-img2.jpg" alt="#" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-v3-img5.jpg" alt="#" />
                                </div>

                                <div className="date-box">
                                    <p>19 May, 2023</p>
                                </div>
                                <div className="blog-three__single-content-inner">

                                    <h2><Link href="/blog-details">Complete Solution For <br /> Your Land Design</Link></h2>
                                    <ul className="meta-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-save-instagram"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#">Admin</a></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-conversation"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#"> 02 Comment</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src="assets/images/blog/blog-v3-img3.jpg" alt="#" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-v3-img6.jpg" alt="#" />
                                </div>

                                <div className="date-box">
                                    <p>29 July, 2023</p>
                                </div>
                                <div className="blog-three__single-content-inner">

                                    <h2><Link href="/blog-details">Best Garden Edging & <br /> Border Ideas</Link></h2>
                                    <ul className="meta-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-save-instagram"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#">Admin</a></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-conversation"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#"> 02 Comment</a></p>
                                            </div>
                                        </li>
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

export default BlogHomeThree;