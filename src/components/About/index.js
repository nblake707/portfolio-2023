import React from "react";
import Container from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import { aboutSection, marginDiv, textDiv } from "./index.module.css";

const About = () => {
  return (
    <Container id="about">
      <div className={aboutSection}>
        <div className={marginDiv}>
          <div>
            <h2>About Me</h2>
            <StaticImage
              src="../../images/correctClass.jpg"
              alt="Classroom"
              objectFit="cover"
              width={400}
              height={270}
              style={{ margin: "3% 0 10% 0" }}
            />
            <StaticImage
              src="../../images/code_tint.jpg"
              alt="Code on computer screen"
              objectFit="cover"
              width={400}
              height={270}
            />
          </div>

          <div className={textDiv}>
            <h3>
              my
              <br />
              story
            </h3>
            <p>
             Hello, my name is Nateyana! I'm a web developer, coding instructor, and curriculum engineer
             from NYC. 
             I discovered programming by chance and what started as a surprise interest eventually became a new career path. After receiving a 
             scholarship through the CUNY Tech Hire program I was able to attend The Software Guild, 
             a fast-paced apprenticeship program specializing in data-driven Java development. 
             This hybrid grant program made it possible for me to fully immerse myself in the world of programming.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
