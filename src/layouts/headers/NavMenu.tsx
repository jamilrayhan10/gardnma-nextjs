

import menu_data from '@/data/menu-data';
import Link from 'next/link';
import React from 'react';

const NavMenu = () => {
  return (
    <>
        <ul className="main-menu__list">
          {menu_data.map((item, i) => (
              <li key={i} className={`${item.has_dropdown ? "dropdown current2" : ""}`}>
              <Link href={item.path}> {item.title} <span className="line"></span></Link>
              {item.has_dropdown && 
              <ul>
              {item?.sub_menus?.map((sub_item, index) => (
                <li key={index}> <Link href={sub_item.path}>{sub_item.title}</Link> </li>                                
              ))} 
              </ul>
              
              }
            </li>
          ))} 
        </ul>
    </>
  );
};

export default NavMenu;