"use client";
import { useState } from "react";
import * as React from "react";
import Image from "next/image";

export interface IAppProps {
  title: string;
  options: { title: string; count: number }[];
}

export default function App({ title, options }: IAppProps) {
  const [chooseOption, setChooseOption] = useState(-1);
  const [votedOption, setVotedOption] = useState(-1);

  const handleOption = (option: number) => {
    if (votedOption >= 0)
      return (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
      };
    console.log(chooseOption);
    return (event: React.MouseEvent<HTMLLIElement>) => {
      setChooseOption(option);
    };
  };
  const handleVotedOption = (option: number) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      setVotedOption(option);
    };
  };
  return (
    <div className="bg-[#101011] p-4 rounded-md mt-4">
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
          Which front-end framework do you prefer for web development?
        </h1>
        <ul>
          {options.map((item, index) => (
            <li
              onClick={handleOption(index)}
              key={index}
              className={` cursor-pointer bg-[--bg-primary] relative ${
                chooseOption === index &&
                votedOption < 0 &&
                "border-2 border-[#737374]"
              }  rounded-lg  mb-2`}
            >
              <div
                className={`p-2 flex  justify-between rounded-md bg-[--bg-primary] ${
                  votedOption === index && ` `
                }`}
              >
                <h1 className="w-full z-[1000]">
                  {index + 1}. {item.title}
                </h1>
                <h1 className={`z-[1000] ${votedOption < 0 && "hidden"}`}>
                  {item.count}%
                </h1>
              </div>
              { votedOption >= 0 && <div style={{width:`${item.count}%` }} className={`rounded-l-md ${item.count === 100 && "rounded-r-md"}  gradient-bg  z-[1] w-full h-full absolute top-0  bottom-0 left-0`}/>}
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={votedOption >= 0}
        onClick={handleVotedOption(chooseOption)}
        className="p-1 px-4 rounded-full bg-[--bg-secondary] disabled:opacity-[0.5] disabled:cursor-not-allowed"
      >
        vote
      </button>
    </div>
  );
}
