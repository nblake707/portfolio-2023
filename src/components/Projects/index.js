import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  containerLayout,
  projectSection,
  marginDiv,
  projectTiles,
  projectImg,
} from "./index.module.css";

const Projects = () => {
  const [isHover, setIsHover] = useState(false);

  const setHover = () => {};

  return (
    <section id="works" className={containerLayout}>
      <div className={projectSection}>
        <div className={marginDiv}>
          <h2>Works</h2>
        </div>
        {/* use a loop here to present the photos */}
       <div className={projectTiles}>
          {/* display text only on hover */}
          {/* <p>Recipe App</p> */}
           <StaticImage
            src="../../images/markus-winkler-afW1hht0NSs-unsplash.jpg"
            alt="Code on computer screen"
            objectFit="cover"
            className={projectImg}
          />
          <p>Search App</p>
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
    </section>
  );
};

export default Projects;
