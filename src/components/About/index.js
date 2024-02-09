import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { containerLayout, aboutSection, paddingDiv, textDiv } from "./index.module.css";

const About = () => {
  return (
    <section id="about" className={containerLayout}>
      <div className={aboutSection}>
        <div className={paddingDiv}>
          <div>
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
              Hello, my name is Nateyana! I'm a web developer, coding
              instructor, and curriculum engineer from NYC. I discovered
              programming by chance and what started as a surprise interest
              eventually became a new career path. After receiving a scholarship
              through the CUNY Tech Hire program I was able to attend The
              Software Guild, a fast-paced apprenticeship program specializing
              in data-driven Java development. This hybrid grant program made it
              possible for me to fully immerse myself in the world of
              programming. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam blanditiis harum quisquam
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
