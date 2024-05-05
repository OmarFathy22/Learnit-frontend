import * as React from "react";
import Image from "next/image";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div
      className={`h-[120px] w-[120px] relative flex flex-col justify-center items-center  -translate-x-[20px]
      max-600:translate-x-[60px] max-600:translate-y-[30px] max-400:!translate-x-[70px] max-400:!translate-y-[50px]
    `}
    >
      <div className="h-[120px] w-[120px] border-[8px] rounded-full border-[#6BEDFE] max-900:h-[80px] max-900:w-[80px] max-900:border-[4px] 
      max-400:!h-[60px] max-400:!w-[60px]
      ">
        <Image
          src={"/girl1.png"}
          alt="girl"
          width={1000}
          height={1000}
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="max-900:w-[80px]  max-400:!w-[60px]">
        <Image
          src={"/rank-second.png"}
          alt="group1"
          width={1000}
          height={1000}
          className=" -translate-y-3 h-full w-full"
        />
      </div>
      <div className="text-center -translate-y-3">
        <h1 className="font-bold text-[20px] max-400:text-[15px]">Sophia</h1>
        <h2 className="text-[14px] max-400:text-[10px] font-medium  text-[#C0C0C0]">1989</h2>
      </div>
    </div>
  );
}
