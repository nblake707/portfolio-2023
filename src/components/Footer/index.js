import React from "react";
import github from "./logos/github.svg";
import linkedIn from "./logos/linkedin.svg";
import medium from "./logos/medium.svg";
import { footer, copyright, socialIcon } from "./index.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        <a href="https://github.com/nblake707" target="_blank">
          <img src={github} alt="Github logo" className={socialIcon} />
        </a>

        <a href="https://www.linkedin.com/in/nateyanablake/" target="_blank">
          <img src={linkedIn} alt="LinkedIn logo" className={socialIcon} />
        </a>

        <a href="https://medium.com/me/stories/public" target="_blank">
          <img src={medium} alt="Medium logo" className={socialIcon} />
        </a>
      </div>
      <p className={copyright}>© {new Date().getFullYear()} Nateyana Blake</p>
    </footer>
  );
};

export default Footer;
