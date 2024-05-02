import * as React from "react";
import Image from "next/image";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div
      className={` relative  border-[8px] border-[#6BFE8B]  rounded-full 
        -translate-x-3 -translate-y-[100px] !w-[150px] !h-[150px] 
      `}
    >
      <div className="absolute top-[-90px] p-7">
        <Image
          src={"/crown.png"}
          alt="group1"
          width={1000}
          height={1000}
          className="rounded-full w-[100px] h-[100px] object-contain"
        />
      </div>

      <div>
        <Image
          src={"/guy.png"}
          alt="guy"
          width={1000}
          height={1000}
          className="rounded-full w-full h-full"
        />
      </div>
      <div>
        <Image
          src={"/rank-first.png"}
          alt="group1"
          width={1000}
          height={1000}
          className="rounded-full -translate-y-3 h-full w-full"
        />
      </div>
    </div>
  );
}
