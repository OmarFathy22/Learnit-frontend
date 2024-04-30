import * as React from 'react';

export interface IAppProps {
  votedOption: number;
  item: { count: number };
  index: number;
  MaxPercent: () => number;
}

export default function App ({MaxPercent,index,item,votedOption}: IAppProps) {
  return (
    <div
    ref={(el) => {
      if (el && votedOption >= 0) {
        el.animate([{ width: "0%" }, { width: `${item.count}%` }], {
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
