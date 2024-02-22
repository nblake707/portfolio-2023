import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Nav from "../Nav";
import {
  introContainer,
  divOne,
  mainHeading,
  divTwo,
  textDiv,
  imgDiv,
  mePic,
  toggleIcon,
  containerLayout,
} from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const menuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <section id="home" className={containerLayout}>
      <div className={introContainer}>
        <div className={divOne}>
          <div className={textDiv}>
            <h1 className={mainHeading}>hello</h1>
            <TypeAnimation
              sequence={[
                "I'm Nateyana, welcome to my portfolio!",
                1000,
                "I'm a full-stack software engineer.",
                1000,
                "I'm a curriculum developer.",
                1000,
                "I'm an educator.",
                1000,
              ]}
              speed={35}
              style={{ fontSize: "1.2rem", fontFamily: "Inconsolata" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className={divTwo}>
          <div onClick={menuToggle}>
            {isActive ? (
              <>
                <StaticImage
                  src="../../images/close-match.png"
                  alt="Close menu icon"
                  className={toggleIcon}
                  width={50}
                  height={50}
                />
                <Nav active={isActive} />
              </>
            ) : (
              <StaticImage
                src="../../images/open-match.png"
                alt="Open menu icon"
                className={toggleIcon}
                width={50}
                height={50}
              />
            )}
          </div>

          <div className={imgDiv}>
            <StaticImage
              src="../../images/me-3.jpeg"
              alt="Picture of website owner"
              className={mePic}
              width={450}
              height={455}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
