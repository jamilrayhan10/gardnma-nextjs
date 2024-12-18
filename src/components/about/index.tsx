import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import TeamHomeThree from "../homes/home-3/TeamHomeThree";
import AboutHomeThree from "../homes/home-3/AboutHomeThree";
import ServiceHomeThree from "../homes/home-3/ServiceHomeThree";
import CounterHomeThree from "../homes/home-3/CounterHomeThree";
import FeaturesHomeThree from "../homes/home-3/FeaturesHomeThree";
import TestimonialHomeTwo from "../homes/home-2/TestimonialHomeTwo";

const About = () => {
	return (
		<>
			<HeaderThree />
			<Breadcrumb title="About Us" subtitle="About Us" />
			<FeaturesHomeThree />
			<AboutHomeThree />
			<ServiceHomeThree />
			<CounterHomeThree />
			<TestimonialHomeTwo />
			<TeamHomeThree style_2={true} />
			<FooterOne />
		</>
	);
};

export default About;
