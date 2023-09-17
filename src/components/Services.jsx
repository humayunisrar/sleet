import React from "react";
import styles, { layout } from "../style";
import { services } from "../constants";

const Services = ({ icon, title, content, index }) => (
  <section
    className={`${styles.flexCenter} w-full flex-row bg-magenta flex-wrap mt-[100px] sm:mb-20 mb-6`}
  >
    <div className="justify-start text-left items-start">
        <h2 className={`text-white text-left justify-start font-normal text-[50px] leading-[60px] mt-6  mb-[70px]`} > 
          Our Services
          <span className="border-highlight border-l-[10px] ml-5 rounded-[55px] leading-5"></span>
          <span className={`text-white text-left justify-start font-normal text-[50px] leading-[60px] mt-6 ml-5 mb-[70px]`}>We are dedicated to providing smooth and facilating services</span>
        </h2>
      </div> 
      <div className="flex flex-row flex-wrap">
    {services.map((service) => (
      <div
        key={service.id}
        className={`flex justify-start items-center w-1/3 flex-col gap-6`}
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
          <p className="font-normal text-center xs:text-[20.45px] justify-center align-middle text-white text-[15px] xs:leading-[21px] leading-[18px]">
            {service.content}
          </p>
        </div>
      </div>
    ))}</div>
  </section>
);

export default Services;
