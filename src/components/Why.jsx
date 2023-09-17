import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";

const Why = ({ icon, title, content, index }) => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap mt-[60px] sm:mb-20 mb-6`}
  >
    <div className="flex text-center justify-center items-center">
        <h2 className={`text-magenta text-center font-normal text-[50px] leading-[60px] mb-[70px]`} >
          How does our cold chain stand out?
        </h2>
      </div> 

    {features.map((feature) => (
      <div
        key={feature.id}
        className={`flex justify-start items-start w-[46%] flex-col m-3`}
      >
        <div className="flex flex-row items-end gap-2">
          <img
            src={feature.icon}
            alt="icons"
            className="w-[30%] h-[30%] object-contain"
          />
          <h4 className="font-inter font-normal xs:text-[40.89px] text-black text-[30px] mb-1 xs:leading-[36px] leading-[36px]">
            {feature.title}
          </h4>
        </div>

        <div
          className={`flex-col flex font-inter flex-wrap mt-[100px] sm:mb-20 mb-6`}
        >
          <p className="font-normal xs:text-[20.45px] justify-center align-middle text-magenta text-[18px] xs:leading-[21px] leading-[21.6px] mt-0 ml-1">
            {feature.content}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default Why;
