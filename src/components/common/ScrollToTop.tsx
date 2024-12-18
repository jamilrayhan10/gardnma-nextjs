"use client";
import UseSticky from "@/hooks/UseSticky";
import React, { useState, useEffect } from "react";

type style_type = {
	style?: boolean;
};
const ScrollToTop = ({ style }: style_type) => {
	const { sticky }: { sticky: boolean } = UseSticky();

	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, []);

	return (
		<>
			<button
				style={{ cursor: "pointer", display: sticky ? "block" : "none" }}
				onClick={scrollTop}
				className="scroll-to-top scrollUp"
				aria-label="Scroll to top"
			>
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 320 512"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
				</svg>
			</button>
		</>
	);
};

export default ScrollToTop;
