'use client'
import * as React from "react";
import { TfiCup } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { GrChatOption } from "react-icons/gr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserContext } from "@/hooks/useUser";
import Image from "next/image";

export interface IAppProps {}
const arr = [
  {
    icon: <FiHome />,
    name: "Home",
    to: "/home",
  },
  {
    icon: <TfiCup />,
    name: "Leaderboard",
    to: "/ranking",
  },
  {
    icon: <GrChatOption />,
    name: "Community",
    to: "/community",
  },
  {
    icon: <CgProfile />,
    name: "Profile",
    to: "/profile",
  },
];

export default function App(props: IAppProps) {
  const { user } = React.useContext(UserContext);
  const pathname = usePathname();
  return (
    <ul
      className={`fixed bottom-0 right-0 left-0 w-full h-[60px] border-t-[#474747] border-t-[1px] backdrop-blur bg-transparent text-white  bg-[#1B1B1E] shadow-md flex justify-around items-center  px-4 min-600:hidden
    ${(!user || (user && Object.keys(user).length == 0 )) && "hidden"}`}
    >
      {arr.map((item, index) => (
        <Link
          key={index}
          href={item.to}
          className={`flex flex-col items-center text-[20px] ${
            pathname == item.to && "!text-orange-500"
          }`}
        >
          <div className="flex flex-col justify-center gap-[2px]">
            <h1 className="self-center">{item.icon}</h1>
            <h1 className="text-[7px]">{item.name}</h1>
          </div>
        </Link>
      ))}
        <Link href={'/chatbot'} className="flex flex-col justify-center gap-[2px]">
           <Image src="/hero-1.png" alt="profile" width={20} height={20} className='object-contain self-center ' />
           <h1 className={`text-[7px] ${
            pathname == '/chatbot' && "!text-orange-500"
          }`}>LearnItBuddy</h1>
          </Link>
    </ul>
  );
}
