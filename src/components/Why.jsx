
import React from 'react'
import styles, { layout } from "../style";
import { features } from "../constants";

const Why = ({ icon, title, content, index }) => (

    <section className={`${styles.flexCenter} flex-row flex-wrap mt-[100px] sm:mb-20 mb-6`}>
    {features.map((feature) => (
      <div key={feature.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
       <img src={feature.icon} alt="icons" className="w-[20%] h-[20%] object-contain" />
        <h4 className="font-poppins font-normal xs:text-[40.89px] text-cyan text-[30px] xs:leading-[53.16px] leading-[43.16px] text-[00CCBD]">
          {feature.title}
        </h4>
        <div className={`flex-col flex font-poppins flex-wrap mt-[100px] sm:mb-20 mb-6`}><p className="  font-normal xs:text-[20.45px] text-magenta text-[18px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3">
          {feature.content}
        </p>
        </div></div>
        
      
    ))}
    
  </section>
    );
    

export default Why