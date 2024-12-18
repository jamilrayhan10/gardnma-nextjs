
import Link from 'next/link';
import React from 'react';

const BlogHomeOne = () => {
  return (
    <>
       <section className="blog-one">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__tagline">
                        <span className="left"></span>
                        <h6>Recent Posts</h6>
                        <span className="right"></span>
                    </div>
                    <h2 className="sec-title__title">Latest News From Blog</h2>
                </div>
                <div className="row">
                    {/* <!--Start Blog One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-content">
                                <ul className="meta-box clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-calendar"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#"> January 2, 2023 </a></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-user"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#"> by Admin</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="blog-one__single-content-inner">
                                    <h2><Link href="/blog-details">Ex-homeless shelter head
                                            agrees to settlement</Link></h2>
                                    <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                </div>


                                <div className="blog-one__single-content-bottom clearfix">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="comment-box">
                                                <a href="#"> <span className="icon-conversation"></span> 3 comments</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="btn-box">
                                                <a href="#">Read More <span className="icon-right-arrow-1"></span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="blog-one__single-img">
                                <img src="assets/images/blog/blog-v1-img1.jpg" alt="#" />
                            </div>
                        </div>
                    </div>
                    {/* <!--End Blog One Single--> */}

                    {/* <!--Start Blog One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-content">
                                <ul className="meta-box clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-calendar"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#"> January 2, 2023 </a></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-user"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#"> by Admin</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="blog-one__single-content-inner">
                                    <h2><Link href="/blog-details">Complete solution for your
                                            land & garden design</Link></h2>
                                    <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                </div>


                                <div className="blog-one__single-content-bottom clearfix">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="comment-box">
                                                <a href="#"> <span className="icon-conversation"></span> 3 comments</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="btn-box">
                                                <a href="#">Read More <span className="icon-right-arrow-1"></span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="blog-one__single-img">
                                <img src="assets/images/blog/blog-v1-img2.jpg" alt="#" />
                            </div>
                        </div>
                    </div>
                    {/* <!--End Blog One Single--> */}

                    {/* <!--Start Blog One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-content">
                                <ul className="meta-box clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-calendar"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#"> January 2, 2023 </a></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-user"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="#"> by Admin</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="blog-one__single-content-inner">
                                    <h2><Link href="/blog-details">The environment benefits
                                            of tower gardens</Link></h2>
                                    <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                </div>


                                <div className="blog-one__single-content-bottom clearfix">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="comment-box">
                                                <a href="#"> <span className="icon-conversation"></span> 3 comments</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="btn-box">
                                                <a href="#">Read More <span className="icon-right-arrow-1"></span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="blog-one__single-img">
                                <img src="assets/images/blog/blog-v1-img3.jpg" alt="#" />
                            </div>
                        </div>
                    </div>
                    {/* <!--End Blog One Single--> */}

                </div>
            </div>
        </section>
    </>
  );
};

export default BlogHomeOne;