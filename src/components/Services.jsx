import React from "react";
import styles, { layout } from "../style";
import { services } from "../constants";

const Services = ({ icon, title, content, index }) => (
  <section
    className={`${styles.paddingY} flex justify-start items-start w-full flex-row bg-magenta flex-wrap gap-12`}
  >
    <div className="flex flex-row justify-start text-left items-center gap-5">
        <h2 className={`text-white text-left justify-start font-normal text-[50px] leading-[60px]`} > 
          Our Services
        </h2>
        <div>
          <span className="flex flex-row border-highlight h-20 border-l-[10px] rounded-[55px] leading-5"></span></div>
          <span className={`text-white text-left justify-start font-normal text-[30px] leading-[50px]`}>We are dedicated to <br/> providing smooth and facilating services</span>
      </div> 
      <div className="flex flex-row flex-wrap">
    {services.map((service) => (
      <div
        key={service.id}
        className={`flex justify-start items-center p-5 w-1/3 flex-col gap-6`}
      >
        <div className="flex flex-row justify-center items-end gap-2">
          <img
            src={service.icon}
            alt="icons"
            className="w-[125px] h-[125px] object-fill"
          />
        </div>

        <div
          className={`flex-col flex font-inter items-center flex-wrap sm:mb-20 gap-3`}
        >
          <h4 className="font-inter font-normal xs:text-[18px] text-white text-[18px] xs:leading-[36px] leading-[36px]">
            {service.title}
          </h4>
          <p className="font-normal text-center xs:text-[15px] justify-center align-middle text-white text-[15px] xs:leading-[25px] leading-[25px]">
            {service.content}
          </p>
        </div>
      </div>
    ))}</div>
  </section>
);

export default Services;
