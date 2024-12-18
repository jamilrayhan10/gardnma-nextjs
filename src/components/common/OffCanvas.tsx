
import MobileMenu from '@/layouts/headers/MobileMenu';
import React from 'react';

const OffCanvas = ({open, setOpen} : any) => {
  return (
    <>
       <div className={`mobile-nav__wrapper ${open ? "expanded" : ""}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setOpen(false)}>
                <i className="icon-plus"></i>
            </span>
            <div className="logo-box">
                <a href="index.html" aria-label="logo image">
                    <img src="assets/images/resources/mobile-nav-logo.png" alt="" />
                </a>
            </div>
            <div className="mobile-nav__container">
              <MobileMenu />
            </div>
            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <a href="tel:123456789">444 000 777 66</a>
                </li>
            </ul>
            <div className="mobile-nav__social">
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-facebook-square"></a>
                <a href="#" className="fab fa-pinterest-p"></a>
                <a href="#" className="fab fa-instagram"></a>
            </div>

        </div>
    </div>
    </>
  );
};

export default OffCanvas;