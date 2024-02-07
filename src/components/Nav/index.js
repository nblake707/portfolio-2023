import React, { useState } from "react";
import { Link } from "gatsby";
import { menuOverlay, active } from "./index.module.css";

const Nav = ({ active }) => {

  return (
    <>
      <div className={active ? `${menuOverlay} ${menuOverlay.active}` : `${menuOverlay}`}>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#works">Works</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
