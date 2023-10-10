import React from "react";
import Container from "../Container";
import { contactSection } from "./index.module.css";

const Contact = () => {
  return (
    <Container id="contact">
      <div className={contactSection}>
        <h1>Contact</h1>
        <p>
          <a
            href="mailto:      
        "
          >
            Email
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Contact;
