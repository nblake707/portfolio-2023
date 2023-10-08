import React from "react";
import Container from "../Container";
import { introContainer, divOne, divTwo, textDiv } from "./index.module.css";

const About = () => {
  return (
    <Container id="about">
      <div className={introContainer}>
        <div className={divOne}>
          <div className={textDiv}>
            <h1>Hello, I'm Nateyana</h1>
            {/* maybe typing text here */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className={divTwo}></div>
      </div>
    </Container>
  );
};

export default About;
