import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  
  <section className={`${styles.flexCenter} flex-row flex-wrap mt-[100px] sm:mb-20 mb-6`}>
  {stats.map((stat) => (
    <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col m-3`} >
     <img src={stat.icon} alt="icons" className="w-[50%] h-[50%] object-contain" />
   
      <h4 className="font-poppins font-normal xs:text-[40.89px] text-cyan text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-[00CCBD]">
        {stat.value}
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-magenta text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3">
        {stat.title}
      </p>
    </div>
  ))}
</section>
  
  
)
export default Stats