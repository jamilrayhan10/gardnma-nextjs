import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogDetailsArea from './BlogDetailsArea';

const BlogDetails = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb title="Blog Details" subtitle="Blog Details" />
    <BlogDetailsArea />
    <FooterOne />      
    </>
  );
};

export default BlogDetails;