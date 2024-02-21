import React, { useRef } from "react";
import { useIsVisible } from "../../util/useIsVisible";
import { Card } from "flowbite-react";
import {
  containerLayout,
  projectSection,
  projectHeading,
  cardDiv,
} from "./index.module.css";

const Projects = () => {
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  return (
    <section id="works" className={containerLayout}>
      <div
        ref={ref2}
        className={`${projectSection} transition-opacity ease-in duration-1000 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={projectHeading}>
          <h2>Works</h2>
        </div>
        <div className={cardDiv}>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc=""
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc=""
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc=""
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
