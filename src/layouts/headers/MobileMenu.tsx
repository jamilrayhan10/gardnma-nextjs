"use client"
import Link from "next/link";
import React, { useState } from "react";
import menu_data from "@/data/menu-data";

const MobileMenu = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
	return (
		<>
			<ul className="main-menu__list">
        {menu_data.map((item, i) => (
          <li className={`${item.has_dropdown ? "dropdown" : ""}`} key={i}>
					<Link href={`${item.path}`} className={`${navTitle === item.title ? "expanded" : ""}`}> {item.title} <span className="line"></span>
          {item.has_dropdown && 
						<button aria-label="dropdown toggler" className={`dropdown-toggle-btn ${navTitle === item.title ? "expanded" : ""}`}
            onClick={() => openMobileMenu(item.title)}>
							<i className="fa fa-angle-down"></i>
						</button>
          }
					</Link>
					<ul style={{ display: navTitle === item.title ? "block" : "none"}}>
            {item.sub_menus?.map((sub_item, index) => (
              <li key={index}>
							<Link href={sub_item.path}>{sub_item.title}</Link>
						</li>
            ))} 
					</ul>
				</li>
        ))} 
			</ul>
		</>
	);
};

export default MobileMenu;
