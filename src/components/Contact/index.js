import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import {
  containerLayout,
  contactSection,
  contact,
  leftColumn,
  rightColumn,
  formDiv,
} from "./index.module.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgjgabb");
  // if (state.succeeded) {
  //   return <p>Thanks for reaching out!</p>;
  // }

  return (
    <section id="contact" className={containerLayout}>
      <h2 className={contact}>Contact</h2>
      <div className={contactSection}>
        <div className={leftColumn}></div>
        <div className={rightColumn}>
          <h1>Get in touch</h1>
          <div className={formDiv}>
            <form
              method="POST"
              action="https://formspree.io/f/mrgjgabb"
              className="flex max-w-md flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput id="name" type="text" name="name" required shadow />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@website.com"
                  required
                  shadow
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Leave a message..."
                  required
                  shadow
                  rows={4}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <Button type="submit" disabled={state.submitting}>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
