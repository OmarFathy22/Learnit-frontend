import * as React from "react";
import Image from "next/image";
import PromotionIcon from "../../../components/svgs/promotion";
import RelegationIcon from "../../../components/svgs/relegation"; 
import {RootObject} from '@/app/home/components/sections/Ranking'


export interface IAppProps {
  users: RootObject[]
}
export default function App({users}: IAppProps) {
  const calculateEstimation = (index: number) => {
    const fiftyPercentIndex = Math.floor(users?.length * 0.5);
    const eightyPercentIndex = Math.floor(users?.length * 0.8);
  
    if (index >= 0 && index < fiftyPercentIndex) return "green";
    if (index >= fiftyPercentIndex && index < eightyPercentIndex) return "blue";
    return "red";
  };
  return (
    <ul className=" bg-[--bg-secondary] rounded-md flex flex-col    ">
      <li className="flex justify-between items-center bg-[--bg-tertiary] px-[45px]  max-500:px-[25px] py-3 ">
        <div className="flex items-center gap-[110px] max-500:gap-[70px]">
          <h2>Rank</h2>

          <h1 className="">Name</h1>
        </div>
        <div className=" ">Points</div>
      </li>
      {users?.map((user, index) => (
          <div key={index}>
            <li
              className={`pl-[45px] pr-[30px] max-500:px-[25px] py-3 ${
                index % 2 ? "bg-[--bg-tertiary]" : ""
              } relative gradient-border-left-${calculateEstimation(index)} `}
            >
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-[30px]">
                  <h2>{index + 1}</h2>
                  <Image
                    src={user?.userID?.photoUrl || "/girl1.png"}
                    alt="girl"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[65px] h-[65px] max-500:w-[45px] max-350:!h-[30px] max-350:!w-[30px] max-500:h-[45px] max-500:border-[3px] border-[5px] border-gray-300 "
                  />
                  <h1 className="max-500:text-[10px] max-500:-translate-x-2 max-350:!translate-x-1">{user?.userID?.username}</h1>
                </div>
                <div className="rounded-full p-3 py-2 max-500:py-1 max-500:px-2 bg-[#46464C] max-500:text-[10px]">{user?.points}xp</div>
              </div>
            </li>
          <div className="bg-[--bg-primary]">
              {index == Math.floor(users?.length * 0.5) - 1? (
                <div className="py-2 flex justify-around items-center   mx-auto ">
                  <h1 ><PromotionIcon/></h1>
                  <h1 className=" font-bold gradient-text-green text-[20px] max-400:text-[15px]">Promotion Zone</h1>
                  <h1><PromotionIcon/></h1>
                </div>
              ) : index == Math.floor(users?.length * 0.8) - 1 ? (
                <div className="py-2 flex justify-around items-center   mx-auto ">
                  <h1><RelegationIcon/></h1>
                  <h1 className="font-bold gradient-text-red text-[20px] max-400:text-[15px]">Relegation Zone</h1>
                  <h1><RelegationIcon/></h1>
                </div>
              ) : (
                ""
              )}
          </div>
          </div>
        ))}
    </ul>
  );
}
