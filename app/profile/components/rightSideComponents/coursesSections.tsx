import * as React from "react";
import Slider from "./Slider";
import Image from "next/image";
import { ICourse } from "@/app/community/interfaces/post";

export interface IAppProps {
  title: string;
  Icon?: any;
  courses: ICourse[];
}

export default function App({ courses, title, Icon }: IAppProps) {
  console.log("courses", courses);
  return (
    <div>
      <div className="flex items-center gap-2  mt-5 mb-2">
        <div className=" -translate-y-[1px] ">{Icon && <Icon />}</div>
        <h1 className=" text-[22px] gradient-text">{title}</h1>
      </div>
      {/* <ul className="flex flex-wrap gap-3"></ul> */}
      <div className="">
        {courses?.length > 0 ? (
          <ul className="flex justify-between gap-2 py-3   overflow-auto custom-scrollbar">
            {courses.map((item, index) => (
                <div key={index} className="">
                  <li className="flex mx-2 gap-3 w-[400px]  h-[130px] bg-[--bg-primary] p-2 rounded-md">
                    <div className="w-[200px]">
                      <Image
                        src={item?.bannerImage || "course.png"}
                        width={1000}
                        height={1000}
                        alt="class"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="font-bold text-[15px] line-clamp-4">
                        {item.courseName}
                      </h1>
                      <h2 className="text-[--sub-text] text-[12px]">
                        Omar Fathy
                      </h2>
                    </div>
                  </li>
                </div>
              ))}
          </ul>
        ) : (
          <h1 className="text-[18px] font-bold text-center">No {title} yet</h1>
        )}
      </div>
    </div>
  );
}
