"use client";
import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import AnimatedBar from "./AnimatedBar";
import { IPoll } from "../../interfaces/post";
import { UpdatePoll } from "../../actions";
import { useContext } from "react";
import { UserContext } from "@/hooks/useUser";

export interface IAppProps {
  Poll: IPoll;
}

export default function App({ Poll }: IAppProps) {
  const { user } = useContext(UserContext);

  const [options, setOptions] = useState(Poll?.options);
  const MaxPercent = () => {
    let maxi = 0,
      idx = 0;
    for (let i = 0; i < Poll?.options.length; i++) {
      if (Poll?.options[i].count > maxi) {
        maxi = Poll?.options[i].count;
        idx = i;
      }
    }
    return idx;
  };
  const [chooseOption, setChooseOption] = useState(-1);
  const [votedOption, setVotedOption] = useState(-1);
  React.useEffect(() => {
    if(Poll.totalVotes.includes(user._id)){
      setVotedOption(1)
    }
  }, [Poll.totalVotes,user._id]);

  const handleOption = (option: number) => {
    if (votedOption >= 0) {
      return;
    }
    setChooseOption(option);
  };
  const handleVotedOption = (option: number) => {
    return async () => {
      options[option].count++;
      Poll.totalVotes.push(user._id);
      console.log(Poll);
      await UpdatePoll(Poll._id, options, Poll.totalVotes);
      setVotedOption(option);
    };
  };
  return (
    <div className="bg-[#101011] p-4 rounded-md ">
      <div className="flex items-center gap-2">
        <div>
          <Image
            className="rounded-full"
            src="/girl1.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
        <h1 className="gradient-text text-[18px]">D/python</h1>
      </div>
      <div className="py-2">
        <h1 className="text-[#ADD5F2] text-[22px] font-bold pb-2">
          {Poll?.title}
        </h1>
        <ul>
          {options.map((item, index) => (
            <li
              onClick={() => handleOption(index)}
              key={index}
              className={` cursor-pointer bg-[--bg-primary] relative ${
                chooseOption === index && votedOption < 0
                  ? "border-[2px] border-orange-500"
                  : "border-[2px] border-transparent"
              }  rounded-lg  mb-2`}
            >
              <div
                className={`p-2 flex  justify-between rounded-lg bg-[--bg-primary] ${
                  votedOption === index && ` `
                }`}
              >
                <h1 className="w-full z-[2]">
                  {index + 1}. {item.title}
                </h1>
                <h1 className={`z-[2] ${votedOption < 0 && "hidden"}`}>
                  {Poll.totalVotes.length > 0
                    ? `${((item.count / Poll.totalVotes.length) * 100).toFixed(
                        2
                      )}%`
                    : "0%"}
                </h1>
              </div>
              <AnimatedBar
                MaxPercent={MaxPercent}
                index={index}
                votedOption={votedOption}
                item={item}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={votedOption >= 0 || Poll.totalVotes.includes(user._id)}
        onClick={handleVotedOption(chooseOption)}
        className="p-1 px-4 rounded-full bg-[--bg-secondary] disabled:opacity-[0.5] disabled:cursor-not-allowed"
      >
        {Poll.totalVotes.includes(user._id) ? "voted" : "vote"}
      </button>
    </div>
  );
}
