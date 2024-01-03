import React from "react";
import Container from "../Container";
import { contactSection, contact, leftColumn, rightColumn } from "./index.module.css";

const Contact = () => {
  return (
    <Container id="contact">
      <div className={contactSection}>
        <div className={leftColumn}>
          <h1 className={contact}>Contact</h1>
        </div>
        <div className={rightColumn}>
          <p>
            <a
              href="mailto:      
        "
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
