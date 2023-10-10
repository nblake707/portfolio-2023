import * as React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contact";

const IndexPage = () => {
  return (
      <Layout>
        <About />
        <Projects />
        <Contacts />
      </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
