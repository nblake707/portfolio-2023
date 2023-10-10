import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { navBar, navList } from "./index.module.css";

const Nav = () => {
  return (
    <header>
      <nav className={navBar}>
        <StaticImage src="../../images/icon.png" alt="logo" />
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
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
