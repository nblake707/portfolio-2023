import React, { useRef } from "react";
import { useIsVisible } from "../../util/useIsVisible";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import {
  containerLayout,
  contactSection,
  contact,
  formDiv,
  contactHeadings,
} from "./index.module.css";

const Contact = () => {
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const [state, handleSubmit] = useForm("mrgjgabb");
  // if (state.succeeded) {
  //   return <p>Thanks for reaching out!</p>;
  // }

  return (
    <section id="contact" className={containerLayout}>
      <div
        ref={ref3}
        className={`${contactSection} h-full flex flex-row flex-wrap transition-opacity ease-in duration-1000 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={contactHeadings}>
          <h2>Contact</h2>
          <h3>Get in touch!</h3>
        </div>
        <div className={formDiv}>
          <form
            method="POST"
            action="https://formspree.io/f/mrgjgabb"
            className="flex max-w-lg flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" type="text" name="name" autoComplete="name" required shadow />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" className="custom-blue" />
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="name@website.com"
                autoComplete="email"
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
                <Label htmlFor="message" value="Your message" />
              </div>
              <Textarea
                id="message"
                name="message"
                placeholder="Leave a message..."
                required
                shadow
                rows={6}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button type="submit" disabled={state.submitting}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
