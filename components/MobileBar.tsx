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
    to: "/home",
  },
  {
    icon: <TfiCup />,
    to: "/ranking",
  },
  {
    icon: <GrChatOption />,
    to: "/community",
  },
  {
    icon: <CgProfile />,
    to: "/profile",
  },
];

export default function App(props: IAppProps) {
  const { user, setUser } = React.useContext(UserContext);
  const pathname = usePathname();
  return (
    <ul
      className={`fixed bottom-0 right-0 left-0 w-full h-[50px] text-white  bg-[#1B1B1E] shadow-md flex justify-around items-center  px-4 min-600:hidden
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
          {item.icon}
        </Link>
      ))}
        <Link href={'/chatbot'}>
           <Image src="/hero-1.png" alt="profile" width={25} height={25} className='object-contain' />
          </Link>
    </ul>
  );
}
