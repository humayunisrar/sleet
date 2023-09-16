import React from "react";

const Button = ({ text, styles }) => (
  <button type="button" className={`py-4 px-6 font-inter font-medium text-[18px rounded-[10px] outline-none ${styles}`}>
    {text}
  </button>
);

export default Button;
