import React from "react";
import { containerLayout, contactSection, contact, leftColumn, rightColumn } from "./index.module.css";

const Contact = () => {
  return (
    <section id="contact" className={containerLayout}>
      <div className={contactSection}>
        <div className={leftColumn}>
          <h2 className={contact}>Contact</h2>
        </div>
        <div className={rightColumn}>
          <p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
