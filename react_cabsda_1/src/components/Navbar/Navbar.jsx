import React,{ Component} from 'react';
import navv from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={navv.nav}>
          <div >
            <div className={navv.golovna}>    
              <NavLink to="/Content" activeClassName={navv.activeLink} className={navv.sil}>Головна</NavLink>
            </div>
            <div className={navv.golovna}>
              <NavLink to="/Goods" activeClassName={navv.activeLink} className={navv.sil}>Товари</NavLink> 
            </div>
            <div className={navv.golovna}>
              <NavLink to="/Photos" activeClassName={navv.activeLink} className={navv.sil}>Фотографії</NavLink> 
            </div>
            <div className={navv.golovna}>
              <NavLink to="/Kontacts" activeClassName={navv.activeLink} className={navv.sil}>Контакти</NavLink> 
            </div>
            <div className={navv.golovna}>
              <NavLink to="/Delivery" activeClassName={navv.activeLink}className={navv.sil}>Доставка</NavLink> 
            </div>
            <div>
            </div>
          </div>
       </nav>
    )
}
export default Navbar;