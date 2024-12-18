"use client"
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <section className="blog-page">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-8">
                        <div className="blog-page__content">

                            
                            <div className="blog-page__single">
                                <div className="blog-page__single-img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-page-img1.jpg" alt="#" />
                                    </div>
                                    <div className="date-box">
                                        <h4>21<br /> May</h4>
                                    </div>
                                </div>

                                <div className="blog-page__single-content">
                                    <ul className="meta-box">
                                        <li>
                                            <a href="#"><i className="fa fa-user"></i>Jason Smith</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-comments"></i> 0 Comment</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-heart"></i> 0 Like</a>
                                        </li>
                                    </ul>

                                    <h2><Link href="/blog-details">Complete solution for your land & garden design</Link>
                                    </h2>
                                    <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                        natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                    <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit </p>

                                    <div className="btn-box">
                                        <Link href="/blog-details">Read more</Link>
                                    </div>

                                </div>
                            </div>
                            

                            
                            <div className="blog-page__single">
                                <div className="blog-page__single-img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-page-img2.jpg" alt="#" />
                                    </div>
                                    <div className="date-box">
                                        <h4>17<br /> aug</h4>
                                    </div>
                                </div>

                                <div className="blog-page__single-content">
                                    <ul className="meta-box">
                                        <li>
                                            <a href="#"><i className="fa fa-user"></i>Jason Smith</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-comments"></i> 0 Comment</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-heart"></i> 0 Like</a>
                                        </li>
                                    </ul>

                                    <h2><Link href="/blog-details">Ex-homeless shelter head agrees to settlement</Link>
                                    </h2>
                                    <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                        natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                    <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit </p>

                                    <div className="btn-box">
                                        <Link href="/blog-details">Read more</Link>
                                    </div>

                                </div>
                            </div>
                            

                            
                            <div className="blog-page__single">
                                <div className="blog-page__single-img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-page-img3.jpg" alt="#" />
                                    </div>
                                    <div className="date-box">
                                        <h4>23<br /> sep</h4>
                                    </div>
                                </div>

                                <div className="blog-page__single-content">
                                    <ul className="meta-box">
                                        <li>
                                            <a href="#"><i className="fa fa-user"></i>Jason Smith</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-comments"></i> 0 Comment</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-heart"></i> 0 Like</a>
                                        </li>
                                    </ul>

                                    <h2><Link href="/blog-details">The environment benefits of tower gardens</Link>
                                    </h2>
                                    <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                        natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                    <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit </p>

                                    <div className="btn-box">
                                        <Link href="/blog-details">Read more</Link>
                                    </div>

                                </div>
                            </div>
                            

                            <ul className="styled-pagination clearfix">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li className="arrow next active"><a href="#"><span className="icon-right-arrow"></span></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    

                    
                    <div className="col-xl-4">
                        <div className="sidebar">
                            
                            <div className="sidebar__single sidebar__search">
                                <form onSubmit={e => e.preventDefault()} className="sidebar__search-form">
                                    <input type="search" placeholder="Search..." />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            

                            
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Category</h3>
                                <ul className="sidebar__category-list">
                                    <li><a href="#">Gardening <span>(12)</span></a></li>
                                    <li className="active"><a href="#">Lawn Care
                                            <span>(15)</span></a></li>
                                    <li><a href="#">Gutter Cleaning <span>(08)</span></a></li>
                                    <li><a href="#">landscaping <span>(20)</span></a></li>
                                    <li><a href="#">Maintanace <span>(14)</span></a></li>
                                    <li><a href="#">Planting Trees <span>(05)</span></a></li>
                                </ul>
                            </div>
                            

                            
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Recent Post</h3>
                                <div className="sidebar__post-box">
                                    <div className="sidebar__post-single">
                                        <div className="sidebar-post__img">
                                            <img src="assets/images/blog/blog-page-img4.jpg" alt="#" />
                                        </div>
                                        <div className="sidebar__post-content-box">
                                            <h3><Link href="/blog-details">4 Steps to a Green Lawn in
                                                    the Spring</Link></h3>
                                        </div>
                                    </div>

                                    <div className="sidebar__post-single">
                                        <div className="sidebar-post__img">
                                            <img src="assets/images/blog/blog-page-img5.jpg" alt="#" />
                                        </div>
                                        <div className="sidebar__post-content-box">
                                            <h3><Link href="/blog-details">Uthan Lawn Care Will Make
                                                    You Fall in Love</Link></h3>
                                        </div>
                                    </div>

                                    <div className="sidebar__post-single">
                                        <div className="sidebar-post__img">
                                            <img src="assets/images/blog/blog-page-img6.jpg" alt="#" />
                                        </div>
                                        <div className="sidebar__post-content-box">
                                            <h3><Link href="/blog-details">3 Mosquito Infestations for
                                                    Warning Signs</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags Cloud</h3>
                                <ul className="sidebar__tags-list clearfix">
                                    <li><a href="#">Carpet</a></li>
                                    <li><a href="#">Office</a></li>
                                    <li><a href="#">Agent</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Love</a></li>
                                    <li><a href="#">Room</a></li>
                                    <li><a href="#">Project</a></li>
                                    <li><a href="#">Corporate</a></li>
                                </ul>
                            </div>
                            

                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </>
  );
};

export default BlogArea;