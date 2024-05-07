"use client";
import * as React from "react";
import Logo from "./svgs/logo";
import { usePathname } from "next/navigation";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname.includes("/courses") && "hidden"
      } bg-[--bg-secondary] pt-[20px] min-h-[120px] border-t-[1px] border-t-[#474747]`}
    >
      <div className="  w-full flex justify-around  items-start p-7">
        <div>
          <h1 className="gradient-text text-[20px]">Quick Links</h1>
          <h1 className="text-[--links]">Home</h1>
          <h1 className="text-[--links]">Community</h1>
          <h1 className="text-[--links]">Ranking</h1>
          <h1 className="text-[--links]">Profile</h1>
        </div>
        <div>
          <h1 className="gradient-text text-[20px]">Contact Us</h1>
          <h1>
            <span>Email: </span>{" "}
            <span className="text-[--links]">contact@learnit.com</span>
          </h1>
          <h1>
            <span>Phone: </span>{" "}
            <span className="text-[--links]">+1 (123) 456-7890</span>
          </h1>
        </div>
      
      </div>
      <div className="flex justify-center items-center gap-2 py-10 gradient-t-border">
        <h1>
          <Logo />
        </h1>
        <h1>© 2024 LearnIt. All Rights Reserved.</h1>
      </div>
    </div>
  );
}
