"use client";
import React, { useState } from 'react';
import Count from '@/components/common/count';


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

const FaqHomeThree = () => {

  const [active, setActive] = useState(1);
  const toggle = (id: number) => {
    if (active === id) {
      return setActive(id);
    }
    setActive(id);
  }

  return (
    <>
      <section className="faq-two">
            <div className="shape1 float-bob-y">
                <img src="assets/images/shapes/faq-v2-shape1.png" alt="#" />
            </div>
            <div className="container">
                <div className="row"> 
                    <div className="col-xl-5">
                        <div className="faq-two__accordion">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>faq</h6>
                                </div>
                                <h2 className="sec-title-three__title">Have you question?</h2>
                            </div>

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
                    <div className="col-xl-7">
                        <div className="faq-two__content">
                            <div className="faq-two__content-img">
                                <img src="assets/images/resources/faq-v2-img1.jpg" alt="#" />
                            </div>

                            <div className="faq-two__content-bottom clearfix">
                                <div className="experience-box text-center">
                                    <div className="icon-box">
                                        <span className="icon-gardener-1"></span>
                                    </div>

                                    <div className="text-box">
                                        <h3> <span className="odometer" data-count="12"> <Count number={12} text='+' /> </span> 
                                            Years of <br /> experience</h3>
                                    </div>
                                </div>

                                <div className="faq-two__content-bottom-inner">
                                    <ul className="faq-two__content-list">
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Entim estibulum dissim <br /> posuere discontent.</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Lorem Ispum on the tend <br /> to repeat constreat.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="faq-two__content-list style2">
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>If you are going to uses <br /> a passage in deves.</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-tick"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Suspe ndisse suscipit leo <br /> sagittis veitam atam.</p>
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

export default FaqHomeThree;