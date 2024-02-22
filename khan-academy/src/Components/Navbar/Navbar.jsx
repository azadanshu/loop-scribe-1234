// import React from 'react'
import logo_light from "../../data/logo-black.png";  //
import logo_dark from "../../data/logo-white.png";

import search_icon_light from "../../data/search-black.png";
import search_icon_dark from "../../data/search-white.png";

import toggle_dark from "../../data/day.png";
import toggle_light from "../../data/night.png";

import "./Navbar.css";
import { Link } from "react-router-dom";



const Navbar = ({theme,setTheme}) => {
const toggle_mode=()=>{
  theme=='light'? setTheme('dark'):setTheme('light');
}

  return (
    <div className="navbar-container">
      <img src={theme=='light'?logo_light:logo_dark} className="logo" />
      <ul className="linkUl">
        <li><Link to="" className="links">Courses</Link></li>
        <li><Link to="" className="links">Donate</Link></li>
        <li><Link to="/login" className="links">Login</Link></li>
        <li><Link to="/signup" className="links">Signup</Link></li>
      </ul>
      <div className="search-box">
        <input type="" placeholder="search" />
        <img src={theme=='light'? search_icon_dark : search_icon_light} />
      </div>
      <img src={theme=='light'? toggle_light : toggle_dark} onClick={()=>toggle_mode()} className="toggle-icon" />
    </div>
  );
};

export default Navbar;
