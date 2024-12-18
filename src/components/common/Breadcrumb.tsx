
import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({title, subtitle}: any) => {
  return (
    <>
       <section className="page-header">
            <div className="page-header__bg" style={{background: `url(/assets/images/backgrounds/page-header-bg.jpg)`}}>
            </div>
            <div className="shape1">
                <img src="assets/images/shapes/page-header-shape1.png" alt="#" />
            </div>

            <div className="container">
                <div className="page-header__inner">
                    <h2>{title}</h2>
                    <ul className="thm-breadcrumb">
                        <li><Link href="/">Home</Link></li>
                        <li><span>-</span></li>
                        <li>{subtitle}</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default Breadcrumb;