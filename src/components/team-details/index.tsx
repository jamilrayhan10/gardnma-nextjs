import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import TeamDetailsArea from './TeamDetailsArea';

const TeamDetails = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Team Details" subtitle="Team Details" />
    <TeamDetailsArea />
    <FooterOne />      
    </>
  );
};

export default TeamDetails;