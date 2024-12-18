import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import ArborManagementArea from '../arbor-management/ArborManagementArea';

const WeedsControl = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Pests & Weeds Control" subtitle="Pests & Weeds Control" />
    <ArborManagementArea weeds={true} />
    <FooterOne />  
    </>
  );
};

export default WeedsControl;