
'use client'

import React, { useState } from 'react';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

interface FaqDataType{
  id: number;
  question: string;
  ans: string;
}

const faq_data:FaqDataType[] = [
  {
    id: 1,
    question: 'How Does Gardening Make You Feel ?',
    ans: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
  {
    id: 2,
    question: 'Do Gardens Help The Environment ?',
    ans: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
  // {
  //   id: 3,
  //   question: 'Do Gardens Help The Environment ?',
  //   ans: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  // },
]

const FaqHomeOne = () => {

  const [active, setActive] = useState(2);
  const toggle = (id: number) => {
    if (active === id) {
      return setActive(id);
    }
    setActive(id);
  }
  return (
    <>
      <section className="faq-one">
            <div className="shape1"></div>
            <div className="container">
                <div className="row">
                   
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__progress">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <h6>Our Faq</h6>
                                    <span className="right"></span>
                                </div>
                                <h2 className="sec-title__title">Our Frequently Asked <br /> Some Question</h2>
                            </div>

                         
                            <div className="faq-one__progress-single">
                                <h4 className="faq-one__progress-title">Soil Re-bulding
                                </h4>
                                <div className="bar">
                                    <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                        <div className="count-text">90%</div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="faq-one__progress-single">
                                <h4 className="faq-one__progress-title">Landscaping Ground
                                </h4>
                                <div className="bar">
                                    <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                        <div className="count-text">80%</div>
                                    </div>
                                </div>
                            </div>
                             
                            <div className="faq-one__progress-single mb0">
                                <h4 className="faq-one__progress-title">Planting Plants
                                </h4>
                                <div className="bar">
                                    <div className="bar-inner count-bar" data-percent="70%" style={{ width: '70%' }}>
                                        <div className="count-text">70%</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                   
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__accordion">
                            <ul className="accordion-box">

                              {faq_data.map((item, i) => (
                                  <li key={i} className={`accordion block ${active === item.id ? 'active-block' : ''}`}>
                                  <div className={`acc-btn ${active === item.id ? 'active' : ''}`} onClick={() => toggle(item.id)}>
                                      <div className="icon-outer">
                                          <i className="icon-up-arrow"></i>
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
            </div>
        </section>
    </>
  );
};

export default FaqHomeOne;