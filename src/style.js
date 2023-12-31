const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-inter font-semibold xs:text-[58px] text-[46px] text-white xs:leading-[78px] leading-[54px]",
    heading2: "font-inter font-normal xs:text-[50px] text-[32px] text-cyan xs:leading-[60px] leading-[48px]",
    header: "font-inter font-normal text-magenta uppercase xs:text-[40px] text-[36px]",
    paragraph: "font-inter font-normal text-white xs:text-[18px] text-[16px] leading-[30.8px]",
    paragraph2: "font-inter font-normal text-dimWhite xs:text-[30px] text-[24px] xs:leading-[32.8px] leading-[28px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-8",
    paddingY: "sm:py-16 py-8",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;