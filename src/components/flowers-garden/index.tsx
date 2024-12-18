
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import ArborManagementArea from '../arbor-management/ArborManagementArea';

const FlowersGarden = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Fruits & Flowers Garden" subtitle="Fruits & Flowers Garden" />
      <ArborManagementArea fruit={true} />
      <FooterOne />  
    </>
  );
};

export default FlowersGarden;