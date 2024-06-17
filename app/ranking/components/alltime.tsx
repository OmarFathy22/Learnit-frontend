import * as React from "react";
import Image from "next/image";
import PromotionIcon from "../../../components/svgs/promotion";
import RelegationIcon from "../../../components/svgs/relegation"; 
import {RootObject} from '@/app/home/components/sections/Ranking'
export interface IAppProps {
  users: RootObject[]
}

const calculateEstimation = (index: number) => {
  if (index >= 0 && index < 5) return "green";
  if (index >= 5 && index < 8) return "blue";
  return "red";
};
export default function App({users}: IAppProps) {
  return (
    <ul className=" bg-[--bg-secondary] rounded-md flex flex-col    ">
      <li className="flex justify-between items-center bg-[--bg-tertiary] px-[45px]  max-500:px-[20px]  py-3 ">
        <div className="flex items-center gap-[110px] max-500:gap-[70px]">
          <h2>Rank</h2>

          <h1 className="">Name</h1>
        </div>
        <div className=" ">Points</div>
      </li>
      {users?.map((user, index) => (
          <div key={index}>
            <li
              className={`pl-[45px] pr-[30px] max-500:px-[20px] py-3 ${
                index % 2 ? "bg-[--bg-tertiary]" : ""
              } `}
            >
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-[30px] ">
                  <h2>{index + 1}</h2>
                  <Image
                    src={user?.userID?.photoUrl || "/girl1.png"}
                    alt="girl"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[65px] h-[65px] max-500:w-[45px] max-350:!h-[30px] max-350:!w-[30px] max-500:h-[45px] max-500:border-[3px] border-[5px] border-[#FB6BFE] "
                  />
                  <h1 className="max-500:text-[10px] max-500:-translate-x-2 max-350:!translate-x-1">{user?.userID?.username}</h1>
                </div>
                <div className="rounded-full p-3 py-2 max-500:py-1 max-500:px-2 bg-[#46464C] max-500:text-[10px]">{user?.points}xp</div>
              </div>
            </li>
      
          </div>
        ))}
    </ul>
  );
}
