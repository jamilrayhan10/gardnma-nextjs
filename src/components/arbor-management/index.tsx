import React from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import ArborManagementArea from "./ArborManagementArea";

const ArborManagement = () => {
	return (
		<>
			<HeaderThree />
			<Breadcrumb title="Arbor Management" subtitle="Arbor Management" />
      <ArborManagementArea arbor={true} />
      <FooterOne />
		</>
	);
};

export default ArborManagement;
