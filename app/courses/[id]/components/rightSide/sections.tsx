"use client";
import { useState } from "react";
import * as React from "react";
import { TiVideo } from "react-icons/ti";
import DownArrow from "../../../../../components/svgs/down-arrow";
import DownArrowGrad from "../../../../../components/svgs/down-arrow-gradient";
import { Collapse } from "react-collapse";

export interface IAppProps {
  title: string;
}

export default function App({title}: IAppProps) {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div>
      <div onClick={handleOpen} className="px-10 py-3 cursor-pointer flex items-center justify-between border-b-[1px] border-b-[#474747]">
        <h1 className="gradient-text font-bold text-[20px]">{title}</h1>
        <div
          
          className="gradient-text font-bold text-[22px] cursor-pointer"
        >
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              isOpened ? "rotate-180" : ""
            }`}
          >
            {isOpened ? <DownArrowGrad /> :<DownArrow width="20" height="20" />}
          </div>
        </div>
      </div>

      <Collapse isOpened={isOpened} theme={{ collapse: "custom-collapse" }}>
        <ul className="bg-[--bg-tertiary]">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <li
                key={i}
                className="flex items-center justify-between px-10 py-3 border-b-[1px] border-b-[#474747]"
              >
                <div>
                  <h1 className="gradient-text-green">
                    1. Welcome to the beginning
                  </h1>
                  <div className="flex items-center gap-1">
                    <h1 className="text-gray-300 text-[12px]">
                      <TiVideo />
                    </h1>
                    <h1 className="text-[12px] text-gray-300">2 Min</h1>
                  </div>
                </div>
                <h1 className="px-3 py-[2px] rounded-md border-[1px] cursor-pointer">
                  Quiz
                </h1>
              </li>
            ))}
        </ul>
      </Collapse>
    </div>
  );
}
