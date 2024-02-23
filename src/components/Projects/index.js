import React, { useRef } from "react";
import { useIsVisible } from "../../util/useIsVisible";
import { Card, Button } from "flowbite-react";
import socialMedia from "../../images/social-media.jpg";
import vendingMachine from "../../images/vending-machine.jpg";
import eCom from "../../images/eCom.jpg";
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
            imgAlt="View of iPhone displaying social media apps"
            imgSrc={socialMedia}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Deep Thoughts
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">
              Lofi social media app made with React, Express, Apollo, and
              Mongodb Atlas. Deployed using Render.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/nblake707/deepThoughts"
                target="_blank"
              >
                <Button
                  className="mr-4"
                  outline
                  gradientDuoTone="tealToLime"
                  pill
                >
                  Code
                </Button>
              </a>
              <a href="https://deepthoughts-ss7d.onrender.com/" target="_blank">
                <Button className="" outline gradientDuoTone="tealToLime" pill>
                  Live
                </Button>
              </a>
            </div>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Three vending machines in a row"
            imgSrc={vendingMachine}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Vending Machine
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">
              Vending machine application made with Java, Spring Boot, and React.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/nblake707/VendingMachineWebApp"
                target="_blank"
              >
                <Button
                  className="mr-4"
                  outline
                  gradientDuoTone="tealToLime"
                  pill
                >
                  Code
                </Button>
              </a>
              <a href="#" target="_blank">
                <Button className="" outline gradientDuoTone="tealToLime" pill>
                  Live
                </Button>
              </a>
            </div>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Colorful coats handing on a storefront rack"
            imgSrc={eCom}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              E-Commerce Store
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">
              Made with React, Apollo, and the React Context API for state
              management. Deployed with Render. 
            </p>
            <div className="flex justify-center">
              <a href="https://github.com/nblake707/shop-shop" target="_blank">
                <Button
                  className="mr-4"
                  outline
                  gradientDuoTone="tealToLime"
                  pill
                >
                  Code
                </Button>
              </a>
              <a href="#" target="_blank">
                <Button className="" outline gradientDuoTone="tealToLime" pill>
                  Live
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
