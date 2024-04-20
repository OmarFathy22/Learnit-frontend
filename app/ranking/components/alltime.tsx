import * as React from "react";
import Image from "next/image";
import PromotionIcon from "../../../components/svgs/promotion";
import RelegationIcon from "../../../components/svgs/relegation"; 

export interface IAppProps {}
const calculateEstimation = (index: number) => {
  if (index >= 0 && index < 5) return "green";
  if (index >= 5 && index < 8) return "blue";
  return "red";
};
export default function App(props: IAppProps) {
  return (
    <ul className=" bg-[--bg-secondary] rounded-md flex flex-col    ">
      <li className="flex justify-between items-center bg-[--bg-tertiary] pl-[45px] pr-[30px] py-3 ">
        <div className="flex items-center gap-[110px]">
          <h2>Rank</h2>

          <h1 className="">Name</h1>
        </div>
        <div className="mr-5 ">Points</div>
      </li>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <li
              className={`pl-[45px] pr-[30px] py-3 ${
                index % 2 ? "bg-[--bg-tertiary]" : ""
              } `}
            >
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-[30px]">
                  <h2>{index + 1}</h2>
                  <Image
                    src={"/girl1.png"}
                    alt="girl"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[65px] h-[65px] border-[5px] border-[#FB6BFE] "
                  />
                  <h1 className="">Liam Davis</h1>
                </div>
                <div className="rounded-full p-3 py-2 bg-[#46464C]">1000xp</div>
              </div>
            </li>
      
          </div>
        ))}
    </ul>
  );
}
