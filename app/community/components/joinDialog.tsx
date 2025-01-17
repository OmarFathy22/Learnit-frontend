"use client";
import { useState } from "react";
import DownArrow from "../../../components/svgs/down-arrow";
import Categories from "./dialog/Categories";

export interface IAppProps {}
const dialogs = [
  "LearnIt",
  "React",
  "Node js",
  ".Net",
  "python",
  "machine learning",
  "AI",

];
export default function App(props: IAppProps) {
  const [chooseDialog, setChooseDialog] = useState(0);
  const handleChooseDialog = (index: number) => {
    setChooseDialog(index);
  };
  return (
    <div className="min-1000:max-w-[350px] max-1000:w-full !sticky top-[80px] max-600:top-[60px]  left-0 right-0">
    <div className="py-3 ">
        <h1 className="font-bold gradient-text text-[25px] mb-3 max-1000:hidden ">join a Dialog</h1>
        <div className="bg-[--bg-secondary] rounded-lg p-4">        
          <h1 className="font-bold text-[20px] ">Top Dialogs</h1>
          <ul className="custom-scrollbar  flex flex-wrap gap-1 items-center  bg-[--bg-primary] rounded-md mt-1  p-3 max-h-[150px] overflow-auto">
            {dialogs.map((dialog, i) => (
              <li
                key={i}
                className="flex items-center py-1 px-3 gap-1  bg-[#323238] rounded-lg"
              >
                <h1 className="text-[13px]">D/{dialog}</h1>
                <button
                  onClick={() =>handleChooseDialog(i)}
                  className={`p-1 px-3 text-[12px] rounded-full bg-[--bg-primary] ${i == 2 && "gradient-bg"} cursor-pointer` }
                >
                  {i === 2 ? "Join" : "Joined"}
                  
                </button>
              </li>
            ))}
          </ul>
         <h1 className="text-[20px] font-bold mt-3">Categories</h1>
        <ul className="flex flex-col gap-2 mt-2">
           {["Development" , "Network" , "Music" , "Cyper Security"].map((item, i) => (
            <Categories title={item} key={i}/>
           ))}
        </ul>
        </div>
    </div>
    </div>
  );
}
