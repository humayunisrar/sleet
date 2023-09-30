import styles from "../style";
import { hero } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col relative z-10 justify-between`}>

    <div className={`${styles.flexStart} flex-col gap-2 md:w-3/5`}>

      <h1 className={`${styles.heading1} font-inter font-medium text-white`}>
        End-To-End Cold Store <br className="sm:block hidden" />{" "}
        <span>Delivery Solution</span>{" "}
      </h1>
      <p className={`${styles.paragraph} w-full mt-2`}>
        Sleet is the pioneering cold store logistics solution to be Saudi Arabia based that changes the way that logistics operates by relentless innovation and digitalized approaches.
      </p>
      <div className="ss:flex hidden md:mr-4 mr-0 mt-10">
        <Button text="Get in Touch" styles="text-primary bg-white" />
      </div>

    </div>

    <div className={`${styles.flexCenter} md:my-0 my-10`}>
      <img src={hero} alt="hero" className="w-full px-2 object-contain h-fit" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Button />
    </div>
  </section>
);

export default Hero;