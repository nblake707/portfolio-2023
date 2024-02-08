import React from "react";
import Container from "../Container";
import { contactSection, contact, leftColumn, rightColumn } from "./index.module.css";

const Contact = () => {
  return (
    <Container id="contact">
      <div className={contactSection}>
        <div className={leftColumn}>
          <h2 className={contact}>Contact</h2>
        </div>
        <div className={rightColumn}>
          <p>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
