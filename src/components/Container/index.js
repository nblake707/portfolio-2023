import React from "react";
import { containerLayout } from "./index.module.css";

const Container = ({ children, id }) => {
  // adjust so that I can pass the height as a prop
  return <section id={id} className={containerLayout}>{children}</section>;
};

export default Container;
