import * as React from 'react';
import { IPoll } from '../../interfaces/post';

export interface IAppProps {
  votedOption: number;
  item: { count: number };
  index: number;
  MaxPercent: () => number;
  Poll: IPoll;
}

export default function App ({MaxPercent,index,item,votedOption , Poll}: IAppProps) {
  return (
    <div
    ref={(el) => {
      if (el && votedOption >= 0) {
        el.animate([{ width: "0%" }, { width: `${(item.count / Poll.totalVotes.length)*100}%` }], {
          duration: 500,
          fill: "forwards",
        });
      }
    }}
    className={`rounded-md ${votedOption < 0 && "hidden"}  ${
      MaxPercent() === index ? "gradient-bg" : "gradient-bg-opacity"
    } z-[1] w-full h-full absolute top-0 bottom-0 left-0`}
  />
  );
}
