import { useAtom } from "jotai";
import React, { useState } from "react";
import Chips from "../../components/chips/Chips";
import Dropdown from "../../components/Dropdown/Dropdown";
import Search from "../../components/Search/Search";
import ToggleSwitch from "../../components/ToogleSwitch/ToggleSwitch";
import { switchPosition } from "../../store/global";

const SearchJobs = () => {
  const [value, setValue] = useAtom(switchPosition);
  return (
    <div className="w-full flex justify-center items-center flex-col mt-5">
      <span className="mt-3 font-semibold text-lg">
        What types of jobs interest you?
      </span>
      <div className="flex justify-center items-center mt-5">
        <span className="mr-10">Full Time</span>
        <ToggleSwitch label="Notifications" />
        <span className="ml-10">Freelance</span>
      </div>

      <div className="flex w-[60%] flex-wrap h-auto justify-center mt-10">
        <Chips name="Architecture" />
        <Chips name="Commercial Architecture" />
        <Chips name="Computational Design" />
        <Chips name="Green Architecture" />
        <Chips name="Interior Architecture" />
        <Chips name="Interior Design" />
        <Chips name="Landscape Architecture" />
        <Chips name="Sustainable Architecture" />
        <Chips name="Urban Design" />
        <Chips name="Urban Planning" />
        <Chips name="Vernacular Architecture" />
        <Chips name="Parametic Architecture" />
        <Chips name="Residential Architecture" />
      </div>

      <Search />
      <div className="w-[60%] flex">
        <Dropdown title="On-Site" />
        <Dropdown title="Long-Term" />
      </div>
    </div>
  );
};

export default SearchJobs;
