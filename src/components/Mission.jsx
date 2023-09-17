import React, { useState } from "react";
import { missions } from "../constants";
import styles from "../style";

const Mission = () => {
  // State to track the active mission and its content
  const [activeMission, setActiveMission] = useState(missions[0]);

  // Function to handle button click and change active mission
  const handleMissionClick = (mission) => {
    setActiveMission(mission);
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col flex-wrap mt-[100px] sm:mb-20 gap-[70px]`}
    >
      <div className="flex text-center justify-center items-center">
        <h2 className={`text-magenta text-center font-normal text-[50px] w-4/5`} >
          Our innovations are what aid us to provide you with a better and superior service
        </h2>
      </div>

      <div className="flex flex-col  justify-center items-center">
        <div className="flex flex-row justify-between w-11/12">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className={`flex-1 flex justify-start w-1/2 items-center flex-col m-3 cursor-pointer text-center`}
              onClick={() => handleMissionClick(mission)}
            >
              <h4 className={`font-inter text-magenta font-semibold xs:text-[40.89px] text-[48px] xs:leading-[53.16px] leading-[43.16px] ${activeMission.id === mission.id ? " border-highlight border-b-[10px]" : ""
                }`}>
                {mission.title}
              </h4>
            </div>
          ))}
        </div>

        <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-11/12 sm:flex-row flex-col bg-magenta rounded-[20px] box-shadow`}>
          <p className={`${styles.flexCenter} text-center font-normal text-[35px] text-white`}>
            {activeMission.content}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Mission;
