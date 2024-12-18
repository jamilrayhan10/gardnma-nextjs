
"use client"
import Link from 'next/link';
import React, { useState } from 'react';


interface FaqDataType{
  id: number;
  question: string;
  ans: string;
}
const faq_data:FaqDataType[] = [
  {
    id: 1,
    question: '1. How Does Gardening Make You Feel ?',
    ans: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
  {
    id: 2,
    question: '2. What Does an Inch of water mean ?',
    ans: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
  {
    id: 3,
    question: '3. How Does Gardening Make You Feel ?',
    ans: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
]


const GardenManagementArea = () => {
  const [active, setActive] = useState(2);
  const toggle = (id: number) => {
    if (active === id) {
      return setActive(id);
    }
    setActive(id);
  }

  return (
    <>
      <section className="services-details">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-8">
                        <div className="services-details__content">
                            <div className="services-details__content-img1">
                                <img src="assets/images/services/services-details-img6.jpg" alt="#" />
                            </div>

                            <div className="text-box1">
                                <h2>Garden Management</h2>
                                <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt
                                    mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>

                                <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>

                                <ul>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <div className="text">
                                            <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <div className="text">
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-box2">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequun magni
                                    dolores eos qui ratione volsnesciunt.Neque porro quisquam est, qui dolorem ipsum
                                    quia dolor sit amet, consectetur, sed quia non numquam eius modi tempora incidunt ut
                                    labore et dolore </p>

                                <ul>
                                    <li>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt
                                        </p>
                                    </li>

                                    <li>
                                        <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

                                        </p>
                                    </li>

                                    <li>
                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, </p>

                                    </li>
                                </ul>
                            </div>


                            <div className="services-details__content-img2">
                                <img src="assets/images/services/services-details-img2.jpg" alt="#" />
                            </div>

                            <div className="text-box3">
                                <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt
                                    mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, </p>

                                <p className="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa quisit ,officia deserunt mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis is amet natus error sit voluptatem accusantium doloremque
                                    laudantium, totam reaperia eaque ipsa quae ab ilnventore veritatis et quasi
                                    architecto beatae vitae dicta sunt </p>
                            </div>


                            <div className="text-box4">
                                <div className="img-box">
                                    <img src="assets/images/services/services-details-img3.jpg" alt="#" />
                                </div>

                                <div className="content-box">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. </p>

                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text">
                                                <p>Duis aute irure dolor in reprehenderit in</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text">
                                                <p> voluptate velit esse cillum dolore eu fugiat </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text">
                                                <p>Kuis nostr exercitation ullamco laboris</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-box5">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, </p>
                            </div>


                            
                            <div className="faq-two__accordion faq-two__accordion--services">
                                <ul className="accordion-box">
                                    {faq_data.map((item, i) => (
                                        <li key={i} className={`accordion block ${active === item.id ? 'active-block' : ''}`}>
                                          <div className={`acc-btn ${active === item.id ? 'active' : ''}`} onClick={() => toggle(item.id)}>
                                              <div className="icon-outer">
                                                  <i className="icon-plus-1"></i>
                                              </div>
                                              <h3>
                                                  {item.question}
                                              </h3>
                                          </div>
                                          <div className={`acc-content ${active === item.id ? 'current' : ''}`}>
                                              <p>{item.ans}</p>
                                          </div>
                                      </li>
                                      ))} 
                                </ul>
                            </div>
                        </div>
                    </div>
                    


                    
                    <div className="col-xl-4">
                        <div className="sidebar">
                            
                            <div className="sidebar__single sidebar__search wow animated fadeInUp" data-wow-delay="0.1s">
                                <form onSubmit={e => e.preventDefault()} className="sidebar__search-form">
                                    <input type="search" placeholder="Search..." />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            

                            
                            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                <h3 className="sidebar__title">Services</h3>
                                <ul className="sidebar__category-list">
                                    <li className="active"><a href="#">Arbor Management <span>(12)</span></a></li>
                                    <li><Link href="/garden-management">Garden Management
                                            <span>(15)</span></Link></li>
                                    <li><Link href="/nursery">Nursery/Tree Farm <span>(08)</span></Link></li>
                                    <li><Link href="/trimming">Trimming & Pruning <span>(20)</span></Link></li>
                                    <li><Link href="/weeds-control">Pests & Weeds Control <span>(14)</span></Link></li>
                                    <li><Link href="/flowers-garden">Fruits & Flowers Garden <span>(05)</span></Link></li>
                                </ul>
                            </div>
                            

                            
                            <div className="sidebar__single sidebar__single-button-box wow animated fadeInUp"
                                data-wow-delay="0.3s">
                                <div className="btn-one">
                                    <a href="#">Download Doc <span className="fa fa-download"></span></a>
                                </div>

                                <div className="btn-one btn-one--two">
                                    <a href="#">Download Pdf<span className="fa fa-file-pdf"></span></a>
                                </div>
                            </div>
                            

                            
                            <div className="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.4s">
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
                            

                            
                            <div className="sidebar__single sidebar__support wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="sidebar__support-bg"
                                    style={{background: `url(/assets/images/services/services-details-img4.jpg)`}}>
                                </div>
                                <h3 className="sidebar__suppot-title">Have Any Query?</h3>
                                <p className="sidebar__suppot-text">Great fruit grass their are first over spirit good whose
                                    very subdue</p>
                                <div className="sidebar__support-btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">Send Message</span>
                                    </a>
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

export default GardenManagementArea;