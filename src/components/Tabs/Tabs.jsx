import { useAtom } from "jotai";
import React from "react";
import { tabPosition } from "../../store/global";

const Tabs = () => {
  const [tabs, setTabs] = useAtom(tabPosition);

  return (
    <div className="w-full mt-10 flex justify-center items-center">
      <div
        className="mr-16 hover:cursor-pointer"
        onClick={() => {
          setTabs("search");
        }}
      >
        <span
          className={
            tabs === "search"
              ? `font-semibold border-b-4 border-black`
              : `font-semibold`
          }
        >
          Search Jobs
        </span>
      </div>
      <div
        className="mr-16 hover:cursor-pointer"
        onClick={() => {
          setTabs("applied");
        }}
      >
        <span
          className={
            tabs === "applied"
              ? `font-semibold border-b-4 border-black`
              : `font-semibold`
          }
        >
          Applied
        </span>
      </div>
      <div
        className="mr-16 hover:cursor-pointer"
        onClick={() => {
          setTabs("saved");
        }}
      >
        <span
          className={
            tabs === "saved"
              ? `font-semibold border-b-4 border-black`
              : `font-semibold`
          }
        >
          Saved Jobs
        </span>
      </div>
    </div>
  );
};

export default Tabs;
