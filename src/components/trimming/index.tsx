
import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ArborManagementArea from '../arbor-management/ArborManagementArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Trimming = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Trimming & Pruning" subtitle="Trimming & Pruning" />
    <ArborManagementArea trimming={true} />
    <FooterOne />      
    </>
  );
};

export default Trimming;