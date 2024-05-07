import * as React from "react";
import Slider from "./commnuitySlider";

export interface IAppProps {
  title:string
}
const dialogs = [
  "React",
  "Node js",
  ".Net",
  "python",
  "machine learning",
  "AI",
  "AI",
  "AI",
  "AI",
  "AI",
  "AI",
];
export default function App({title}: IAppProps) {
  return (
    <div>
      <h1 className="mb-2 font-bold text-[18px] ">{title}</h1>
      <ul className="flex justify-between gap-2   py-3   overflow-auto custom-scrollbar">

        {dialogs.map((dialog, i) => (
          <div
            key={i}
            className=" !flex items-center !w-[95%] justify-between  py-1 px-3 gap-1  bg-[#323238]  rounded-lg"
          >
            <h1 className="text-[13px] whitespace-nowrap">D/{dialog}</h1>
            <button
              className={`p-1 px-3 text-[12px] rounded-full bg-[--bg-primary] ${
                i == 2 && "gradient-bg"
              } cursor-pointer`}
            >
              {i === 2 ? "Join" : "Joined"}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
