import React from "react";
import Container from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import { projectSection, marginDiv, projectTiles, projectImg } from "./index.module.css";

const Projects = () => {
  return (
    <Container id="works">
      <div className={projectSection}>
      <div className={marginDiv}>
      <h2>Works</h2>
      </div>
      {/* use a loop here to present the photos */}
      <div className={projectTiles}>
        <StaticImage 
        src="../../images/markus-winkler-afW1hht0NSs-unsplash.jpg"
        alt="Code on computer screen"
        objectFit="cover"
        className={projectImg}
        />
        <StaticImage 
        src="../../images/scott-webb-ywuH99ygfec-unsplash.jpg"
        alt="Code on computer screen"
        objectFit="cover"
        className={projectImg}
        />
        <StaticImage 
        src="../../images/amy-shamblen-pJ_DCj9KswI-unsplash.jpg"
        alt="Code on computer screen"
        objectFit="cover"
        className={projectImg}
        />
        <StaticImage 
        src="../../images/solen-feyissa-TaOGbz_S-Qw-unsplash.jpg"
        alt="Code on computer screen"
        objectFit="cover"
        className={projectImg}
        />
         <StaticImage 
        src="../../images/red.jpg"
        alt="Code on computer screen"
        objectFit="cover"
        className={projectImg}
        />
         <StaticImage 
        src="../../images/scott-webb-ywuH99ygfec-unsplash.jpg"
        alt="Code on computer screen"
        objectFit="cover"
        className={projectImg}
        />
      </div>
      </div>
    </Container>
  );
};

export default Projects;
