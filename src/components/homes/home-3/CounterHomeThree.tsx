
import Count from '@/components/common/count';
import React from 'react';

const CounterHomeThree = () => {
  return (
    <>
      <section className="counter-one">
            <div className="auto-container">
                <div className="counter-one__inner">
                    <div className="container">
                        <ul className="counter-one__box">
                            <li className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-shovels"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><span className="odometer" data-count="191"> <Count number={191} text='+' /> </span>  </h2>
                                        <h3>Project Done</h3>
                                    </div>
                                </div>
                            </li>

                            <li className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-agriculture"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><span className="odometer" data-count="2"> <Count number={2} text='k' /> </span></h2>
                                        <h3>Global Reach</h3>
                                    </div>
                                </div>
                            </li>

                            <li className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-gardener-1"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><span className="odometer" data-count="37"> <Count number={37} text='+' /> </span> </h2>
                                        <h3>User Active</h3>
                                    </div>
                                </div>
                            </li>

                            <li className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-gardener-1"></span>
                                    </div>

                                    <div className="content-box">
                                        <h2><span className="odometer" data-count="9"> <Count number={9} text='+' /> </span> </h2>
                                        <h3>Awards Win</h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CounterHomeThree;