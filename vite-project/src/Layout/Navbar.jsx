import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Site Logo</h1>
      <ul>
        <li>
          <NavLink to={"/"}  >Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} >About</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
