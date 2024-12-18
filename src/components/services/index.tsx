import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FeaturesHomeTwo from "../homes/home-2/FeaturesHomeTwo";
import ServiceHomeTwo from "../homes/home-2/ServiceHomeTwo";
import WorkProcessHomeOne from "../homes/home/WorkProcessHomeOne";
import BlogHomeTwo from "../homes/home-2/BlogHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";

const Services = () => {
	return (
		<>
			<HeaderThree />
			<Breadcrumb title="Our Services" subtitle="Our Services" />
			<FeaturesHomeTwo />
			<ServiceHomeTwo />
			<WorkProcessHomeOne />
			<BlogHomeTwo />
			<FooterOne />
		</>
	);
};

export default Services;
