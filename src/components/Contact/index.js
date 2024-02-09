import React from "react";
import {
  containerLayout,
  contactSection,
  contact,
  leftColumn,
  rightColumn,
  formDiv,
} from "./index.module.css";

const Contact = () => {
  return (
    <section id="contact" className={containerLayout}>
      <h2 className={contact}>Contact</h2>
      <div className={contactSection}>
        <div className={leftColumn}></div>
        <div className={rightColumn}>
          <div className={formDiv}>
            <form>
              <input />
              <input />
              <input />
              <input />
              <textarea></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
