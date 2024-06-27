import * as React from "react";
import Image from "next/image";
import { IUserProps } from "../sections/Ranking";


export default function App({user}: IUserProps) {
  return (
    <div
      className={` relative  flex flex-col justify-center items-center 
        -translate-x-3 -translate-y-[100px] !w-[150px] !h-[150px] 
        max-600:-translate-y-[30px] pl-2
      `}
    >
      <div className="   translate-y-[35px] max-900:translate-y-[-5px] max-400:!translate-y-[-13px]  max-900:h-[50px] max-900:w-[50px] max-400:!h-[40px] max-400:!w-[40px] w-[100px] h-[100px] ">
        <Image
          src={"/crown.png"}
          alt="group1"
          width={1000}
          height={1000}
          className=" w-[100px] h-[100px] object-contain"
        />
      </div>

      <div className="h-[150px] w-[150px] border-[8px] border-[#6BFE8B]  rounded-full max-900:h-[100px] max-900:w-[100px] max-900:border-[4px] 
      max-400:!h-[80px] max-400:!w-[80px]
      ">
        <Image
          src={user?.userID?.photoUrl || "/guy.png"}
          alt="guy"
          width={1000}
          height={1000}
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="max-900:w-[80px]  max-400:!w-[70px]">
        <Image
          src={"/rank-first.png"}
          alt="group1"
          width={1000}
          height={1000}
          className=" -translate-y-3 h-full w-full"
        />
      </div>
      <div className="text-center -translate-y-3">
        <h1 className="font-bold text-[24px] max-400:text-[15px]">{user?.userID?.username}</h1>
        <h2 className="text-[14px] font-medium  text-[#FFCA28] max-400:text-[12px]">{user?.points}</h2>
      </div>
    </div>
  );
}
