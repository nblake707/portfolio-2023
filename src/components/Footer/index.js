import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { footer, copyright } from "./index.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        <StaticImage
          src="../../images/icon.png"
          alt="logo"
          width={60}
          height={65}
        />
      </div>
      <p className={copyright}>© {new Date().getFullYear()} Nateyana Blake</p>
    </footer>
  );
};

export default Footer;
