import React from "react";
import Container from "../Container";
import { aboutSection } from "./index.module.css";

const About = () => {
  return (
   <Container id="about">
    <div className={aboutSection}>
      <h2>About Me</h2>  
    </div>
   </Container>
  );
};

export default About;