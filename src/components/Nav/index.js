import React from "react";
import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
import { navBar, navList, navIcon } from "./index.module.css";
// import navIconPic from "../../images/icon.png";

const Nav = () => {
  return (
    <header>
      <nav className={navBar}>
        {/* <div>
          <StaticImage src='../../images/icon.png' alt="logo" />
        </div> */}
         {/* <img src={navIconPic} className={navIcon} alt="Navbar Icon" /> */}
        <ul className={navList}>
          <li>
            <Link to="/#about">
              About
            </Link>
          </li>
          <li>
            <Link to="/#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
