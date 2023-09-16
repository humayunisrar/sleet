import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  
  <section className={`${styles.flexCenter} flex-row flex-wrap mt-[100px] sm:mb-20 mb-6`}>
  {stats.map((stat) => (
    <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col m-3 gap-2`} >
     <img src={stat.icon} alt="icons" className="w-[50%] h-[50%] object-contain" />
   
      <h4 className="font-inter font-normal xs:text-[43px] text-cyan text-[43px] xs:leading-[53.16px] leading-[43.16px] text-[00CCBD]">
        {stat.value}
      </h4>
      <p className="font-inter font-normal xs:text-[30px] text-magenta text-[30px] text-center xs:leading-[36px] leading-[21.58px] ml-3 w-1/2">
        {stat.title}
      </p>
    </div>
  ))}
</section>
  
  
)
export default Stats