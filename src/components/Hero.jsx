import styles from "../style";
import { hero } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col py-20 xs:pt-0 pt-60`}>

    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full gap-2`}>

      <h1 className={`${styles.heading1} font-inter font-medium ss:text-[68px] text-[58px] text-white ss:leading-[100.8px] leading-[56px]`}>
        End-To-End Cold Store <br className="sm:block hidden" />{" "}
        <span>Delivery Solution</span>{" "}
      </h1>
      <p className={`${styles.paragraph} w-full mt-5`}>
        Sleet is the pioneering cold store logistics solution to be Saudi Arabia based
        <br />that changes the way that logistics operates by relentless innovation and
        <br />digitalized approaches
      </p>
      <div className="ss:flex hidden md:mr-4 mr-0 mt-10">
        <Button text="Get in Touch" styles="text-primary bg-white" />
      </div>

    </div>

    <div className={`flex-auto flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={hero} alt="hero" className="w-[100%] h-[100%] relative z-[5]" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Button />
    </div>
  </section>
);

export default Hero;