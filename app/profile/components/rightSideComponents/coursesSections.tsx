import * as React from "react";
import Slider from "./Slider";
import Image from "next/image";

export interface IAppProps {
  title: string;
  Icon ?: any;
}

export default function App({title , Icon}:IAppProps) {
  return (
    <div>
      <div className="flex items-center gap-2  mt-5 mb-2">
        <div className=" -translate-y-[1px]">
          {Icon && <Icon/>}
        </div>
        <h1 className="gradient-text text-[22px] ">{title}</h1>
      </div>
      {/* <ul className="flex flex-wrap gap-3"></ul> */}
      <div className="">
        <Slider>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <li className="flex mx-2 gap-3  bg-[--bg-primary] p-2 rounded-md">
                  <div className="min-w-[150px]">
                    <Image
                      src="/course.png"
                      width={1000}
                      height={1000}
                      alt="class"
                      className="w-[150px] h-[100px] rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-[15px]">
                      The Ultimate React Course 2024: React, Redux & More
                    </h1>
                    <h2 className="text-[--sub-text] text-[12px]">
                      Jonas Schmedtmann
                    </h2>
                  </div>
                </li>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
