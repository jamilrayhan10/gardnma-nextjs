import React from 'react';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import PortfolioOneArea from './PortfolioOneArea';

const PortfolioOne = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Portfolio One" subtitle="Portfolio One" />
      <PortfolioOneArea />
      <FooterOne />
    </>
  );
};

export default PortfolioOne;