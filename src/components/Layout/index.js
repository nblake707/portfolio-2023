import React from "react";
import Nav from "../nav";
import Footer from "../Footer";
import "./reset.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
