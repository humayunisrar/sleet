import styles from "../style";
import { socialMedia } from "../constants";
import { phone } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  bg-primary flex-col rounded-t-[50px]`}>

    <div className="w-full flex xs:px-10 px-2 justify-between items-center md:flex-row xs:gap-0 gap-5 flex-col">
    <div class="flex flex-col items-start justify-start xs:gap-2 gap-1">
  <div class="flex flex-row items-center justify-center">
    <img src={phone} alt="" />
    <p class="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ml-5">
      <a href="tel:+155895548855">+1 5589 55488 55</a>
    </p>
  </div>
  <div class="flex flex-row items-center justify-center">
    <img src={phone} alt="" />
    <p class="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ml-5">
      <a href="tel:+1667825444541">+1 6678 254445 41</a>
    </p>
  </div>
</div>


      <div className="flex flex-row">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Ⓒ Copyright Sleet. All Rights Reserved.
        </p>
      </div>


      <div className="flex flex-row md:mt-0 mt-6 mr-5">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;