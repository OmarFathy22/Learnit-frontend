"use client";
import { useState } from "react";
import DownArrow from "../../../components/svgs/down-arrow";
import { CreateNewPost } from "../actions";

export interface IAppProps {}
const dialogs = [
  "React",
  "Node js",
  ".Net",
  "python",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "machine learning",
  "AI",
];
export default function App(props: IAppProps) {
  const [postType, setPostType] = useState(0);
  const [chooseDialog, setChooseDialog] = useState(0);
  const [options, setOptions] = useState(["" , ""]);
  const addOption = () => {
    if(options.length < 4)
    setOptions([...options , ""]);
  };
  const RemoveOption = () => {
    if(options.length > 2)
    setOptions([...options.slice(0 , options.length - 1)]);
  };
  const handlePostType = (index: number) => {
    setPostType(index);
  };
  const handleChooseDialog = (index: number) => {
    setChooseDialog(index);
  };

  return (
    <div className="min-1300:max-w-[350px]  h-full     ">
      <div className="min-1300:py-3 sticky left-0 top-[80px] max-600:top-[60px]">
        <h1 className="font-bold gradient-text text-[25px] mb-3 max-1300:hidden">
          Add a Post
        </h1>
        <div className="bg-[--bg-secondary] rounded-lg ">
          <h1 className="font-bold text-[20px] px-4 pb-1 py-4">Post Type</h1>
          <div className="flex items-center border-b-[2px] border-b-[#323238] px-3 gap-2 pb-2">
            <div className="flex items-center py-1 px-3 gap-2  bg-[#323238] rounded-lg">
              <h1>Text</h1>
              <div
                onClick={() => handlePostType(0)}
                className="rounded-full p-[6px] bg-[--bg-primary] cursor-pointer "
              >
                <div
                  className={`${
                    postType === 0 && "gradient-bg"
                  } rounded-full p-2  `}
                />
              </div>
            </div>
            <div className="flex items-center py-1 px-3 gap-2  bg-[#323238] rounded-lg">
              <h1>Poll</h1>
              <div
                onClick={() => handlePostType(1)}
                className="rounded-full p-[6px] bg-[--bg-primary] cursor-pointer "
              >
                <div
                  className={`${
                    postType === 1 && "gradient-bg"
                  } rounded-full p-2  `}
                />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-[20px] px-4 py-1">Dialog</h1>
          <ul className="custom-scrollbar flex flex-wrap gap-1 items-center max-1300:max-h-[100px]   px-4 max-h-[100px] overflow-auto">
            {dialogs.map((dialog, i) => (
              <li
                key={i}
                className="flex items-center py-1 px-3 gap-1  bg-[#323238] rounded-lg"
              >
                <h1 className="text-[13px]">D/{dialog}</h1>
                <div
                  onClick={() => handleChooseDialog(i)}
                  className="rounded-full p-[6px] bg-[--bg-primary] cursor-pointer "
                >
                  <div
                    className={`${
                      chooseDialog === i && "gradient-bg"
                    } rounded-full p-2  `}
                  />
                </div>
              </li>
            ))}
          </ul>
          <form action={CreateNewPost} className="border-t-[2px] border-t-[#323238] mt-2">
            <div className="px-4 py-2">
              <h1 className="font-bold text-[15px]">Title</h1>
              <div>
                <input name="title"  className="bg-[--bg-primary] rounded-md p-2 w-full mt-1" />
              </div>
            </div>
            {!postType ? (
              <div className="px-4">
                <h1 className="font-bold text-[15px]">Content</h1>
                <div>
                  <textarea name="content" className="bg-[--bg-primary] rounded-md p-3 w-full min-h-[120px] mt-1 resize-none " />
                </div>
              </div>
            ) : (
              <ul className="max-h-[200px] overflow-auto custom-scrollbar">
                {options.map((option, i) => (
                  <li key={i} className="px-4 py-2">
                  <h1 className="font-bold text-[15px]">option {i + 1}</h1>
                  <div>
                    <input className="bg-[--bg-primary] rounded-md p-2 w-full mt-1" />
                  </div>
                </li>
                ))}
                <button onClick={() => addOption()} className="px-4 text-[--links]">Add Option</button>
                <button onClick={() => RemoveOption()} className="px-4 text-red-500">Remove Option</button>
              </ul>
            )}
          <div className="flex justify-end">
              <button type="submit"  className="gradient-bg mx-4 mt-3 mb-4 py-1  px-5 rounded-md text-[17px] font-bold text-[#222]">
                Post
              </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
