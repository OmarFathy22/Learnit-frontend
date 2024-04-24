import * as React from "react";
import Bill from "../../../components/svgs/Bill";
import Image from "next/image";
import Edit from '../../../components/svgs/Edit';



export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="col-span-1 h-[100vh] sticky left-0 top-0  bottom-0 right-0  bg-[--bg-secondary] ">
      <div className="p-5 flex items-center justify-between">
          <button className="rounded-md  ">
           <Edit/>
          </button>
        <Bill />
      </div>
      <div className="w-full flex flex-col items-center mt-5 ">
        <Image
          src="/guy.png"
          alt="profile_photo"
          width={1000}
          height={1000}
          className="w-[100px] h-[100px] rounded-full border-[4px] mb-1 border-[#2EDE60]"
        />
        <h1 className="text-[20px] font-bold">Ahmed Sobhy</h1>
      </div>
      <ul className="mt-5 flex items-center justify-between text-center px-[50px]">
        <li>
          <h1 className="font-bold">1387</h1>
          <h1 className="text-[--sub-text]">Total Points</h1>
        </li>
        <li>
          <h1 className="font-bold text-[#2EDE60]">Emerald</h1>
          <h1 className="text-[--sub-text]">Rank</h1>
        </li>
        <li>
          <h1 className="font-bold">4</h1>
          <h1 className="text-[--sub-text]">Certificates</h1>
        </li>
      </ul>

      <ul className="mt-5">
        {["Facebook", "Linkedin"].map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-[50px] py-3 border-b-[1px] border-[#474747]"
          >
            <h1>{item}</h1>
            <h1 className="text-[#ADD5F2]">Connect</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
