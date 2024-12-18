import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import TeamArea from "./TeamArea";
import ExcellentWorkHomeOne from "../homes/home/ExcellentWorkHomeOne";
import TestimonialHomeTwo from "../homes/home-2/TestimonialHomeTwo";

const Team = () => {
	return (
		<>
			<HeaderThree />
			<Breadcrumb title="Team" subtitle="Team" />
			<TeamArea />
			<ExcellentWorkHomeOne />
      <TestimonialHomeTwo />
			<FooterOne />
		</>
	);
};

export default Team;
