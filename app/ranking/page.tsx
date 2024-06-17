"use client";
import * as React from "react";
import { useState } from "react";
import AllTime from "./components/alltime";
import Monthly from "./components/monthly";
import {IUserProps} from '@/app/home/components/sections/Ranking'
import { getMonthlyUsers , getAllTimeUsers } from "./actions";
export interface IAppProps {
  users: IUserProps[]
}

export default function App({users}: IAppProps) {
  const [active, setActive] = useState(true);
  const [monthlyUsers, setMonthlyUsers] = useState([]);
  const [allTimeUsers, setAllTimeUsers] = useState([]);
  const onClick = () => {
    setActive(!active);
  };
  React.useEffect(() => {
    getMonthlyUsers().then((data) => {
      setMonthlyUsers(data);
    });
    getAllTimeUsers().then((data) => {
      setAllTimeUsers(data);
    });
  }, []);
  return (
    <div className=" mx-auto rounded-md w-[80%] max-900:w-full global-padding py-[40px]  ">
      <div className="w-full flex justify-center items-center gap-[200px] max-500:gap-[100px]  max-350:!gap-[50px]  pb-3">
        <h1
          onClick={onClick}
          className={`cursor-pointer text-[20px] max-350:!text-[15px] ${active ? "gradient-text" : ""}`}
        >
          Monthly
        </h1>
        <h1
          onClick={onClick}
          className={`cursor-pointer text-[20px] max-350:!text-[15px] ${!active ? "gradient-text" : ""}`}
        >
          All Time
        </h1>
      </div>

      {active ? <Monthly users = {monthlyUsers} /> : <AllTime users = {allTimeUsers} />}
    </div>
  );
}
