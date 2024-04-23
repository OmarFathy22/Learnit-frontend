import { useState } from "react";
import DownArrow from "../../../../components/svgs/down-arrow";
import { Collapse } from "react-collapse";

export interface IAppProps {
  title: string;
}
const dialogs = [
  "React",
  "Node js",
  ".Net",
  "python",
  // "machine learning",
  "AI",

];
export default function App({title}: IAppProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [chooseDialog, setChooseDialog] = useState(0);
  const handleOpen = () => {
    setIsOpened(!isOpened);
  };
  const handleChooseDialog = (index: number) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setChooseDialog(index);
  };
  return (
  <div className="bg-[--bg-primary] p-2 px-3 rounded-md">
      <div onClick={handleOpen} className=" cursor-pointer flex items-center justify-between ">
          <h1 className=" font-bold text-[17px]">{title}</h1>
          <div
            
            className=" font-bold text-[22px] cursor-pointer"
          >
            <div
              className={`transition-transform duration-500 ease-in-out transform ${
                isOpened ? "rotate-180" : ""
              }`}
            >
              <DownArrow width="17" height="17" />
            </div>
          </div>
      </div>
        <Collapse isOpened={isOpened} theme={{ collapse: "custom-collapse" }}>
        <ul className="flex flex-wrap gap-1 items-center  bg-[--bg-primary] rounded-md mt-1  max-h-[150px] overflow-auto">
              {dialogs.map((dialog, i) => (
                <li
                  key={i}
                  className="flex items-center py-1 px-3 gap-1  bg-[#323238] rounded-lg"
                >
                  <h1 className="text-[13px]">D/{dialog}</h1>
                  <button
                    onClick={handleChooseDialog(i)}
                    className={`p-1 px-3 text-[12px] rounded-full bg-[--bg-primary] ${i == 2 && "gradient-bg"} cursor-pointer` }
                  >
                    {i === 2 ? "Join" : "Joined"}
                    
                  </button>
                </li>
              ))}
            </ul>
        </Collapse>
  </div>
  );
}
