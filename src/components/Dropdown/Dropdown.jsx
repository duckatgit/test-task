import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFlashOutline } from "react-icons/io5";

const Dropdown = ({ title }) => {
  return (
    <div className="px-2 py-1 border-black border-2 flex justify-center items-center w-auto rounded-full mt-5 cursor-pointer ml-5">
      <IoFlashOutline className="font-semibold" />
      <span className=" ml-2 font-semibold">{title}</span>
      <IoIosArrowDown className="ml-2" />
    </div>
  );
};

export default Dropdown;
