import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import ArborManagementArea from '../arbor-management/ArborManagementArea';

const Nursery = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Nursery/Tree Farm" subtitle="Nursery/Tree Farm" />
    <ArborManagementArea nursery={true} />
    <FooterOne />      
    </>
  );
};

export default Nursery;