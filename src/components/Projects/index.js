import React from "react";
import Container from "../Container";
import { projectSection, marginDiv, projectCards } from "./index.module.css";

const Projects = () => {
  return (
    <Container id="works">
      <div className={projectSection}>
      <div className={marginDiv}>
      <h2>Works</h2>
      <div className={projectCards}>

      </div>
      </div>
      </div>
    </Container>
  );
};

export default Projects;
