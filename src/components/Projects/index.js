import React from "react";
import Container from "../Container";
import { projectSection, marginDiv, projectTiles } from "./index.module.css";

const Projects = () => {
  return (
    <Container id="works">
      <div className={projectSection}>
      <div className={marginDiv}>
      <h2>Works</h2>
      </div>
      <div className={projectTiles}>

</div>
      </div>
    </Container>
  );
};

export default Projects;
