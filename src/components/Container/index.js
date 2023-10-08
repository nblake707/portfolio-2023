import React from "react";
import { containerLayout } from "./index.module.css";

const Container = ({ children, id }) => {
  return <section id={id} className={containerLayout}>{children}</section>;
};

export default Container;
