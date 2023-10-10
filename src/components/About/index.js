import React from "react";
import Container from "../Container";
import {
  introContainer,
  divOne,
  mainHeading,
  subHeading,
  divTwo,
  textDiv,
} from "./index.module.css";
// import "./bubbles.scss";

const About = () => {
  return (
    <Container id="about">
      <div className={introContainer}>
        <div className={divOne}>
          <div className={textDiv}>
            <h1 className={mainHeading}>Hello, I'm Nateyana.</h1>
            {/* maybe typing text here */}
            <p className={subHeading}>Web Developer and Educator</p>
          </div>
        </div>
        <div className={divTwo}>
          {/* <div className={`${divTwo} bubbles`}>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div> */}
        </div>
      </div>
    </Container>
  );
};

export default About;
