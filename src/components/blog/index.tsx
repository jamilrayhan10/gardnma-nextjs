import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogArea from './BlogArea';

const Blog = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Blog" subtitle="Blog" />
    <BlogArea />
    <FooterOne />      
    </>
  );
};

export default Blog;