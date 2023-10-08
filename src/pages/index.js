import * as React from "react";
import loadable from '@loadable/component';
import Layout from "../components/Layout";
import About from "../components/About";

// lazy loading components for better performance (only load when needed)
// const About = loadable(() => import('../components/About'));
const Projects = loadable(() => import('../components/Projects'));
const Contacts = loadable(() => import('../components/Contact'));

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
