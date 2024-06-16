/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Montserrat_Alternates } from "next/font/google";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import ProfileIcon from "./svgs/profileIcon";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import MenuDrawer from "./MenuDrawer";
import React, { useContext } from "react";
import { UserContext } from "@/hooks/useUser";

export interface IAppProps {}
const montserrat_Alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App(props: IAppProps) {
  const { user, setUser } = useContext(UserContext);
  // const { data: session } = useSession()
  useEffect(() => {
    const localStorageValue = window.localStorage.getItem("user");
    if (localStorageValue && localStorageValue !== "undefined") {
      setUser(JSON.parse(localStorageValue));
    }
  }, [setUser]);

  const pathname = usePathname();
  const routes = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Community",
      path: "/community",
    },
    {
      name: "Ranking",
      path: "/ranking",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];
  const handleLogOut = () => {
    localStorage.removeItem("user");
    location.href = "/";
  };
  return (
    <div
      className={`${
        pathname == "/"
          ? "bg-[--bg-secondary]"
          : "bg-[--bg-secondary] border-b-[1px] border-b-[#474747]"
      } fixed top-0 right-0 left-0 z-[9999] h-[80px] max-600:h-[60px] w-full flex items-center justify-between global-padding ${
        montserrat_Alternates.className
      } max-600:backdrop-blur max-600:bg-transparent`}
    >
      <Link href={"/home"}>
        <div className="w-[150px] max-600:w-[100px]">
          <img
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="object-contain w-full"
          />
        </div>
      </Link>
      <div className="search flex items-center gap-3 bg-[#46464C1A] px-3 py-2 rounded-full max-1100:hidden">
        {/* Menu Icon */}
        <CiSearch size={20} />
        <input
          className={`bg-transparent outline-none w-[300px] `}
          type="text"
          placeholder="Search for courses..."
        />
      </div>

      <div className="menu-icon min-1100:hidden">
        {/* <RiMenu3Line size={25} /> */}
        <MenuDrawer />
      </div>

      <div className="max-1100:hidden">
        <ul
          className={`flex gap-[30px] items-center text-[16px] ${
            !user || (user && Object.keys(user).length == 0 && "hidden")
          }`}
        >
          {" "}
          {routes.map((route, i) => (
            <li
              key={i}
              className={`text-[16px] ${
                pathname.includes(route.path) ? "gradient-text" : ""
              }`}
            >
              <Link
                href={route.path}
                className={`text-[16px] font-medium ${
                  pathname.includes(route.path)
                    ? "gradient-text"
                    : "!text-[white]"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
          <button onClick={handleLogOut}>
            <h1 className="text-[16px] gradient-bg px-5 py-2 rounded-md font-bold">
              Log Out
            </h1>
          </button>
        </ul>

        <ul
          className={`flex gap-[30px] items-center text-[16px]  ${
            user && Object.keys(user).length > 0 && "hidden"
          }`}
        >
          {" "}
          <li>
            <Link href={"/login"}>
              <h1 className="text-[16px] font-bold">Login</h1>
            </Link>
          </li>
          <li>
            <Link href={"/signup"}>
              <h1 className="text-[16px] gradient-bg px-5 py-2 rounded-md font-bold">
                Sign Up
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
