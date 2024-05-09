"use client";
import { useState } from "react";
import * as React from "react";
import Feed from "./feed";
import Dialog from "./joinDialog";
import AddPostBtn from './feed/addPostBtn';
import { Posts } from "../interfaces/post";

export interface IAppProps {}

export default function App({Posts}: Posts) {
  const [active, setActive] = useState(true);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className="py-[40px] min-1000:hidden">
      <div className=" w-full flex justify-around">
        <h1
          onClick={onClick}
          className={`cursor-pointer  text-[20px] pb-1 max-350:!text-[15px] ${
            active ? "gradient-text gradient-b-border !border-b-[2px]" : ""
          }`}
        >
          Feed
        </h1>
        <h1
          onClick={onClick}
          className={`cursor-pointer text-[20px] pb-1 max-350:!text-[15px] ${
            !active ? "gradient-text gradient-b-border !border-b-[2px]" : ""
          }`}
        >
          Join A Dialog
        </h1>
        <AddPostBtn />
      </div>

      <div className="w-[80%] max-500:w-[90%] mx-auto mt-[20px]">
        {active ? <Feed Posts={Posts} /> : <Dialog />}
      </div>
    </div>
  );
}
