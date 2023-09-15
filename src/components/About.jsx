import React from "react";
import styles, { layout } from "../style";
import Read from "./Read";

const About = () => {
  return (
    <section id="about" className={layout.section}>
      <div className={`text-center items-center ${layout.sectionInfo}`}>
        <h2 className={`text-magenta text-center ${styles.heading2}`}>
          <span className="text-magenta font-normal">What is Sleet?</span>{" "}
          <br className="sm:block hidden" />
          <span className="text-cyan font-normal">
            {" "}
            A Cold Storage Delivery Solution <br /> Near You!
          </span>
        </h2>
        <p
          className={`${styles.paragraph2} max-w-[750px] text-center mt-5 text-magenta`}
        >
          An integrated business-to-business cold storage logistics service that
          provide the digitalized solution to deliver without risking your foods
          to perishment. We are a committed service that operates with
          modernization in terms of developing technology.
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0 mt-[25px]">
          <Read />
        </div>
      </div>
    </section>
  );
};

export default About;
