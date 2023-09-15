import styles from "../style";
import { hero } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-normal ss:text-[72px] text-[58px] text-white ss:leading-[100.8px] leading-[69.6px]">
           End-To-End Cold Store <br className="sm:block hidden" />{" "}
            <span>Delivery Solution</span>{" "}
          </h1>
          
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Sleet is the pioneering cold store logistics solution to be Saudi Arabia based 
        <br/>that changes the way that logistics operates by relentless innovation and
        <br/>digitalized approaches
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0 mt-5">
            <Button />
          </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero} alt="hero" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Button />
      </div>
    </section>
  );
};

export default Hero;