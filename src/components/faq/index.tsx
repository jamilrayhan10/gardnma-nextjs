import React from 'react'; 
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import FaqHomeThree from '../homes/home-3/FaqHomeThree';

const Faq = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Faq" subtitle="Faq" />
    <FaqHomeThree /> 
    <FooterOne />      
    </>
  );
};

export default Faq;