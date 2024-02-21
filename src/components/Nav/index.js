import React from "react";
import { Link } from "gatsby";
import { menuOverlay, active } from "./index.module.css";

const Nav = ({ active }) => {
  return (
    // Need to update. Fade in animation tied to active class.
    <>
      <div
        className={
          active ? `${menuOverlay} ${menuOverlay.active}` : `${menuOverlay}`
        }
      >
        <ul>
          <li>
            <Link to="/#home">Home</Link>
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
