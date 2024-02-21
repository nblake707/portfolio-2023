import * as React from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Bounce from "../components/Bounce";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contact";

const IndexPage = () => {
  return (
      <Layout>
        <Home />
        <Bounce />
        <About />
        <Projects />
        <Contacts />
      </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Nateyana Blake: Fullstack developer & Educator</title>;
