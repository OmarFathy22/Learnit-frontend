import * as React from "react";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
export interface IAppProps {
  stars: number;
}

export default function App({ stars }: IAppProps) {
  return (
    <ul className="flex text-[#FFCA28]">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <li key={i}>
            <IoIosStar size={15} />
          </li>
        ))}
      {Array(5 - stars)
        .fill(0)
        .map((_, i) => (
          <li key={i} className="">
            <IoStarHalf size={15} />
          </li>
        ))}
    </ul>
  );
}
