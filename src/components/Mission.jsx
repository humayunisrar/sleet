import React from "react";
import { missions } from "../constants";
import styles from "../style";

const Mission = () => (
  
  <section
    className={`${styles.flexCenter} flex-row flex-wrap mt-[100px] sm:mb-20 mb-6`}
  >
    
    {missions.map((mission) => (
      <div
        key={mission.id}
        className={`flex-1 flex justify-start items-center flex-col m-3`}
      >
        <h4 className="font-poppins text-magenta font-semibold xs:text-[40.89px] text-[48px] xs:leading-[53.16px] leading-[43.16px] text-[00CCBD]">
          {mission.title}
        </h4>
      </div>
    ))}

    <div
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-magenta rounded-[20px] box-shadow`}
    >
      <p
        className={`${styles.paragraph} ${styles.flexCenter} text-center text-white max-w-[700px] mt-3 h-[170px]`}
      >
        To provide a technologically advanced system of B-to-B delivery
        solutions with added quality and argumanted services to enhance and
        guarantee the shelft life of your temprature sensitive products.
      </p>
    </div>
  </section>
);

export default Mission;
