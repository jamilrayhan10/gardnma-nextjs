import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import PortfolioTwoArea from './PortfolioTwoArea';
import HeaderThree from '@/layouts/headers/HeaderThree';
import PriceingHomeTwo from '../homes/home-2/PriceingHomeTwo';

const PortfolioTwo = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Portfolio Two" subtitle="Portfolio Two" />
    <PortfolioTwoArea />
    <PriceingHomeTwo />
    <FooterOne />      
    </>
  );
};

export default PortfolioTwo;