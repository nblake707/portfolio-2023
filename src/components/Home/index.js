import React, { useState } from "react";
import Container from "../Container";
import Nav from "../Nav";
import {
  introContainer,
  divOne,
  mainHeading,
  subHeading,
  divTwo,
  textDiv,
  imgDiv,
  mePic,
  toggleIcon,
} from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const menuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Container id="about">
      <div className={introContainer}>
        <div className={divOne}>
          <div className={textDiv}>
            <h1 className={mainHeading}>hello</h1>
            {/* maybe typing text here */}
            <p className={subHeading}>Web Developer and Educator</p>
          </div>
        </div>
        <div className={divTwo}>
          <div 
          // className={toggleIcon} 
          onClick={menuToggle}>
            {isActive ? (
              <>
                <StaticImage
                  src="../../images/close-match.png"
                  alt="Close menu icon"
                  className={toggleIcon}
                  width={50}
                  height={50}
                />
                <Nav active={isActive}/>
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
    </Container>
  );
};

export default Home;
