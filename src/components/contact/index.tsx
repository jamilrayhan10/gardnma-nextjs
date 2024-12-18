import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import ContactArea from './ContactArea';
import GoogleMap from './GoogleMap';

const Contact = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Contact" subtitle="Contact" />
    <ContactArea />
    <GoogleMap />
    <FooterOne />      
    </>
  );
};

export default Contact;