import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  containerLayout,
  aboutSection,
  paddingDiv,
  headingDiv,
  textDiv,
} from "./index.module.css";

const About = () => {
  return (
    <section id="about" className={containerLayout}>
      <div className={aboutSection}>
        <div className={paddingDiv}>
          <div className={headingDiv}>
            <h2>About Me</h2>
            <StaticImage
              src="../../images/correctClass.jpg"
              alt="Classroom"
              objectFit="cover"
              width={410}
              height={270}
              style={{ margin: "3% 0 10% 0" }}
            />
            <StaticImage
              src="../../images/code_tint.jpg"
              alt="Code on computer screen"
              objectFit="cover"
              width={410}
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
              Hello, my name is Nateyana! I'm a software engineer and educator
              from NYC. I discovered programming by chance and what started as a
              surprise interest eventually blossomed into a new career path.
              After receiving a grant I was able to attend a Java apprenticeship
              program that landed me a teaching position at Columbia University.
              Since then I've worked with various companies such as Netflix,
              Amazon, and edX. Feel free to view my resume by clicking the
              button below:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
