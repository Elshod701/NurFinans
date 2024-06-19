import clsx from "clsx";
import React from "react";

const MyButton = ({ children, variant }) => {
  return (
    <button
      className={clsx({
        "rounded-br-[20px] rounded-tl-[20px] bg-[#0000DE] text-[#fff] py-[14px] px-[34px] text-[14px] font-ubuntu-regular hover:bg-[#00005e] transition-all duration-300":
          variant === "primary",
        "rounded-br-[20px] rounded-tl-[20px] bg-[#fff]  text-[#0000DE] py-[14px] px-[34px] text-[14px] font-ubuntu-regular  hover:bg-[#efefef] transition-all duration-300":
          variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default MyButton;
