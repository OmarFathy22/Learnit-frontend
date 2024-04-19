import * as React from "react";
import { Montserrat_Alternates } from "next/font/google";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

export interface IAppProps {}
const montserrat_Alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App(props: IAppProps) {
  return (
    <div
      className={`bg-[--bg-primary] h-[100px] w-full  flex items-center justify-between px-[70px] ${montserrat_Alternates.className}`}
    >
      <h1 className={`gradient-text text-[24px] `}>LearnIt</h1>
      <div className="search flex items-center gap-3 bg-[#46464C1A] px-3 py-2 rounded-full">
        <CiSearch size={20} />
        <input
          className={`bg-transparent outline-none w-[300px] `}
          type="text"
          placeholder="Search for courses..."
        />
      </div>
      <ul
        className={`flex gap-[30px] items-center text-[16px] cursor-pointer`}
      >
        <li className="gradient-text">Home</li>
        <li>Community</li>
        <li>Ranking</li>
        <li>
          <CgProfile size={20} />
        </li>
      </ul>
    </div>
  );
}
