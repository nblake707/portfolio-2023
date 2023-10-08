import React from "react";
import { Link } from "gatsby";
import { navBar, navList, linkStyle } from "./index.module.css";

const Nav = () => {
  return (
    <nav className={navBar}>
      <ul className={navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
