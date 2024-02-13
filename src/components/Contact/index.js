import React, { useState } from "react";
import {
  containerLayout,
  contactSection,
  contact,
  leftColumn,
  rightColumn,
  formDiv,
  inputGroup,
  textBox,
} from "./index.module.css";

const Contact = () => {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <section id="contact" className={containerLayout}>
      <h2 className={contact}>Contact</h2>
      <div className={contactSection}>
        <div className={leftColumn}></div>
        <div className={rightColumn}>
          <h1>Get in touch</h1>
          <div className={formDiv}>
            <form>
              <div className={inputGroup}>
                <label for="first name">first name:</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  size={30}
                  value={formData}
                  onChange={handleChange}
                />
              </div>
              <div className={inputGroup}>
                <label for="last name">last name:</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  size={30}
                  value={formData}
                  onChange={handleChange}
                />
              </div>
              <div className={inputGroup}>
                <label for="email">email:</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  size={30}
                  value={formData}
                  onChange={handleChange}
                />
              </div>
              <div className={inputGroup}>
                <label for="subject">subject:</label>
                <input
                  type="text"
                  placeholder="Enter the subject"
                  size={30}
                  value={formData}
                  onChange={handleChange}
                />
              </div>
              <textarea 
              className={textBox}
              placeholder="Enter a message"
              rows="10" 
              cols="50"
              >  
              </textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
