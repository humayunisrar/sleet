import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  bg-primary flex-col rounded-t-[50px]`}>
    

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ml-5">
         Ⓒ +1 5589 55488 55 <br/> +1 6678 254445 41
      </p>

      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
         Ⓒ Copyright Sleet. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 mr-5">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;