import React from "react";
import WhyChoose from "./WhyChoose";
import FaqHomeOne from "./FaqHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import ContactHomeOne from "./ContactHomeOne";
import ServiceHomeOne from "./ServiceHomeOne";
import ProjectHomeOne from "./ProjectHomeOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import WorkProcessHomeOne from "./WorkProcessHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import ExcellentWorkHomeOne from "./ExcellentWorkHomeOne"; 

const HomeOne = () => {
	return (
		<>
			<HeaderOne />
			<HeroAreaHomeOne />
			<WhyChoose />
			<AboutHomeOne />
			<BrandsHomeOne />
			<ContactHomeOne />
			<ServiceHomeOne />
			<ProjectHomeOne />
			<WorkProcessHomeOne />
			<FaqHomeOne />
			<TestimonialHomeOne />
			<ExcellentWorkHomeOne />
			<BlogHomeOne />
			<FooterOne />
		</>
	);
};

export default HomeOne;
