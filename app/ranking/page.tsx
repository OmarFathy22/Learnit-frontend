"use client";
import * as React from "react";
import { useState } from "react";
import AllTime from "./components/alltime";
import Monthly from "./components/monthly";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const [active, setActive] = useState(true);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className=" mx-auto rounded-md w-[70%] py-[50px] pb-[100px] ">
      <div className="w-full flex justify-center items-center gap-[200px] py-5">
        <h1
          onClick={onClick}
          className={`cursor-pointer text-[20px] ${active ? "gradient-text" : ""}`}
        >
          Monthly
        </h1>
        <h1
          onClick={onClick}
          className={`cursor-pointer text-[20px] ${!active ? "gradient-text" : ""}`}
        >
          All Time
        </h1>
      </div>

      {active ? <Monthly /> : <AllTime />}
    </div>
  );
}
