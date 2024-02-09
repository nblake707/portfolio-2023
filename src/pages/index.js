import * as React from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Banner from "../components/Banner";
import Contacts from "../components/Contact";

const IndexPage = () => {
  return (
      <Layout>
        <Home />
        <About />
        <Projects />
        <Banner />
        <Contacts />
      </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Nateyana Blake: Fullstack developer & Educator</title>;
