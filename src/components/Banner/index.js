import React from "react";
import { containerLayout, resumeDiv } from "./index.module.css";

const Banner = () => {
  return (
    <section id="works" className={containerLayout}>
    <div className={resumeDiv}>
        <h1>Resume</h1>
        <button>Download</button>
    </div>
    </section>
  )
  
};

export default Banner;
