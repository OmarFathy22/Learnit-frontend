"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Montserrat_Alternates } from "next/font/google";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import ProfileIcon from "./svgs/profileIcon";
import Image from "next/image";

export interface IAppProps {}
const montserrat_Alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App(props: IAppProps) {
  const pathname = usePathname();
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Community",
      path: "/community",
    },
    {
      name: "Ranking",
      path: "/ranking",
    },
  ];

  return (
    <div
      className={`bg-[--bg-primary] h-[100px] w-full  flex items-center justify-between px-[70px] ${montserrat_Alternates.className}`}
    >
      <Link href={'/'}>
        <Image src="/logo.png"  alt="logo" width={1000} height={1000} className="!w-[150px] min-w-[150px]" />
      </Link>
      <div className="search flex items-center gap-3 bg-[#46464C1A] px-3 py-2 rounded-full">
        <CiSearch size={20} />
        <input
          className={`bg-transparent outline-none w-[300px] `}
          type="text"
          placeholder="Search for courses..."
        />
      </div>
      <ul className={`flex gap-[30px] items-center text-[16px] cursor-pointer`}>
        {routes.map((route, i) => (
          <li
            key={i}
            className={`${pathname === route.path ? "gradient-text" : ""}`}
          >
            <Link
              href={route.path}
              className={`${
                pathname === route.path ? "gradient-text" : "!text-[white]"
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
        {/* profile Icon */}
        <li>
          <Link href={"/profile"}>
            <ProfileIcon active={pathname === "/profile"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
