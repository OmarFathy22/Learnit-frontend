"use client";
import { useState } from "react";
import DownArrow from "../../../components/svgs/down-arrow";
import Image from "next/image";
import Comment from '../../../components/svgs/Comment'

export interface IAppProps {}
const dialogs = [
  "React",
  "Node js",
  ".Net",
  "python",
  "machine learning",
  "AI",
];
export default function App(props: IAppProps) {
  const [postType, setPostType] = useState(0);
  const [chooseDialog, setChooseDialog] = useState(0);
  const handlePostType = (index: number) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setPostType(index);
  };
  const handleChooseDialog = (index: number) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setChooseDialog(index);
  };
  return (
    <div className="flex-1 ">
      <div className="py-3">
        <h1 className="font-bold gradient-text text-[25px] mb-3">Add a Post</h1>
        <div className="bg-[#101011] p-4 rounded-md">
          <div className="flex items-center gap-2">
            <div>
              <Image
              className="rounded-full"
                src="/girl1.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
            <h1 className="gradient-text text-[18px]">D/python</h1>
          </div>
        <div className="py-2">
            <h1 className="text-[#ADD5F2] text-[22px] font-bold pb-2">
              python app with cpanel hosting in godaddy
            </h1>
            <div className="">
                <h1>I have a one python file "main.py" for a telegram bot API, I'm trying to host it on godaddy cpanel, in cpanel, I created the python app, cpanel generated a passenger_wsgi.py file, I tried to replace my main.py code in passenger_wsgi.py and tried to append passenger_wsgi.py with my main.py code and tried to specify main.py file in Application startup file instead of passenger_wsgi.py, and I installed all packages using pip, but nothing works, how to host my telegram bot to cpanel?</h1>
            </div>
        </div>
          <div className="gradient-text flex items-center gap-[5px]">
            <div className=" translate-y-[1px]">
              <Comment/>
            </div>
            <h1>44</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
