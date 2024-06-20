"use client";
import { useState } from "react";
import * as React from "react";
import Feed from "./feed";
import Dialog from "./joinDialog";
import AddPostBtn from './feed/addPostBtn';
import { IPosts } from "../interfaces/post";
import { getPolls } from '../actions';


export interface IAppProps {}

export default function App({Posts}: IPosts) {
  const [Polls, setPolls] = React.useState([]);
  const [active, setActive] = useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      const Polls = await getPolls();
      Polls.reverse();
      setPolls(Polls);
    };
    fetchData();
  }, []);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className="py-[40px] min-1000:hidden">
      <div className=" w-full flex justify-around">
        <h1
          onClick={onClick}
          className={`cursor-pointer  text-[20px] pb-1 max-350:!text-[15px] ${
            active ? "gradient-text gradient-b-border !border-b-[2px]" : ""
          }`}
        >
          Feed
        </h1>
        <h1
          onClick={onClick}
          className={`cursor-pointer text-[20px] pb-1 max-350:!text-[15px] ${
            !active ? "gradient-text gradient-b-border !border-b-[2px]" : ""
          }`}
        >
          Join A Dialog
        </h1>
        <AddPostBtn />
      </div>

      <div className="w-[80%] max-500:w-[90%] mx-auto mt-[20px]">
        {active ? <Feed Posts={Posts} Polls={Polls}/> : <Dialog />}
      </div>
    </div>
  );
}
