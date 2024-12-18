import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import GardenManagementArea from "./GardenManagementArea";

const GardenManagement = () => {
	return (
		<>
			<HeaderThree />
			<Breadcrumb title="Garden Management" subtitle="Garden Management" />
			<GardenManagementArea />
			<FooterOne />
		</>
	);
};

export default GardenManagement;
