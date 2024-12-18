"use client";

import ScrollToTop from "@/components/common/ScrollToTop";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";

if(typeof window !== 'undefined') {
	require('bootstrap/dist/js/bootstrap')
}

const Wrapper = ({ children }: any) => {

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);
  
    return () => clearTimeout(timer);  
  }, []);


	return (
		<>
			<div className="page-wrapper">
				{children}
				<ScrollToTop />
			</div>
		</>
	);
};

export default Wrapper;
