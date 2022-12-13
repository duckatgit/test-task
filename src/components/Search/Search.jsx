import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full flex justify-center items-center mt-8">
      <input
        type="text"
        placeholder="Search"
        className="w-[50%] h-10 bg-[#F0F2F8] rounded-full pl-10 outline-none"
      />
      <div className="flex justify-center items-center h-full ml-5">
        <span className="font-semibold">Sort By: Newest</span>
        <IoIosArrowDown className="ml-4" />
      </div>
    </div>
  );
};

export default Search;
