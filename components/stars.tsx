import * as React from "react";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

export interface IAppProps {
  stars: number;
}

export default function App({ stars }: IAppProps) {
  return (
    <ul className="flex text-[#FFCA28]">
      {Array(stars)
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
            <IoStarOutline size={15} />
          </li>
        ))}
    </ul>
  );
}
