import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogGridArea from './BlogGridArea';

const BlogGrid = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Blog Grid" subtitle="Blog Grid" />
    <BlogGridArea />
    <FooterOne />      
    </>
  );
};

export default BlogGrid;