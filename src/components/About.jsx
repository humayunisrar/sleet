import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className={`${layout.section} ${styles.paddingY}`}>
      <div className={`text-center items-center ${layout.sectionInfo}`}>
       
       <div className="flex flex-col items-center gap-3">
       <h2 className={`text-magenta text-center ${styles.heading2}`}>
        </h2>
          <span className={`${styles.header}`}>What is Sleet?</span>
          <span className={`${styles.heading2}`}>
            {" "}
            A Cold Storage Delivery Solution <br /> Near You!
          </span>
        </div>
        <p
          className={`${styles.paragraph2} max-w-[750px] text-center mt-5 text-magenta`}
        >
          An integrated business-to-business cold storage logistics service that
          provide the digitalized solution to deliver without risking your foods
          to perishment. We are a committed service that operates with
          modernization in terms of developing technology.
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0 mt-[25px]">
          <Button text="Read More" styles="text-white bg-primary"/>
        </div>
      </div>
    </section>
  );
};

export default About;
