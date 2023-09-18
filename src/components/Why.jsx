import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";

const Why = ({ icon, title, content, index }) => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-row flex-wrap`}
  >
    <div className="flex text-center justify-center items-center">
        <h2 className={`text-magenta text-center font-normal text-[50px] leading-[60px] mb-[70px]`} >
          How does our cold chain stand out?
        </h2>
      </div> 

    {features.map((feature) => (
      <div
        key={feature.id}
        className={`flex justify-start items-start p-5 w-[46%] flex-col m-3 gap-5`}
      >
        <div className="flex flex-row items-end gap-5">
          <img
            src={feature.icon}
            alt="icons"
            className="w-[30%] h-[30%] object-contain"
          />
          <h4 className="font-inter font-normal xs:text-[30px] text-black text-[30px] xs:leading-[36px] leading-[36px]">
            {feature.title}
          </h4>
        </div>

        <div
          className={`flex-col flex font-inter flex-wrap`}
        >
          <p className="font-normal xs:text-[20.45px] justify-center align-middle text-magenta text-[18px] xs:leading-[30px] leading-[21.6px] mb-5 mt-0 ml-1">
            {feature.content}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default Why;
