'use client'
import { useContext, useState } from "react";
import Bell from "../../../components/svgs/Bell";
import Image from "next/image";
import Edit from "../../../components/svgs/Edit";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "@/hooks/useUser";


export interface IAppProps {}

export default function App(props: IAppProps) {
  const [open , setOpen] = useState(false)
  const { user, setUser } = useContext(UserContext);
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="col-span-1 min-1400:h-[100vh] min-1400:sticky left-0 top-0  bottom-0 right-0 z-[100]  bg-[--bg-tertiary] border-r-[1px] border-[#474747]  ">
      <div className="p-5 flex items-center justify-between">
        <Link href={'/profile/edit-info'} className="rounded-md">
          <Edit />
        </Link>
      <div className="relative">
          <button onClick={() => handleOpen()}>
          <Bell />
          </button>
          {/* <div className={`fixed top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vw] borderr z-[1000000000000000000000] bg-[#222] bg-opacity-[0.6] ${!open && "hidden"}`}/> */}

            <div className={`absolute top-[50px] z-[100] right-0 w-[350px] bg-[--bg-secondary] p-5 rounded-md h-[70vh] overflow-auto custom-scrollbar ${!open && "hidden"}`}>
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-[18px]">Notifications</h1>
                <button onClick={()=>handleOpen()} className="bg-[--bg-primary] p-1 rounded-full "><IoMdClose size={17}/></button>
              </div>
              <ul>
                {Array(10).fill(0).map((_,i) => (
                  <div key={i} className="relative flex items-center mt-3 rounded-md bg-[--bg-primary] p-3 gap-3">
                  <div className="absolute top-2 left-2 gradient-bg h-[10px] w-[10px] rounded-full"/>
                  <Image src="/guy.png" alt="profile_photo" width={1000} height={1000} className="w-[50px] h-[50px] rounded-full border-[4px] mb-1 border-[#2EDE60]"/>
                <div>
                    <h1 className="font-bold">Ahmed Sobhy replied to your post</h1>
                    <p className="text-[--sub-text] text-[12px]">1 minute ago</p>
                </div>
                </div>
                ))}
              </ul>
            </div>
      </div>
      </div>
      <div className="w-full flex flex-col items-center mt-5 ">
        <Image
          src= {user?.photoUrl}
          alt="profile_photo"
          width={1000}
          height={1000}
          className="w-[100px] h-[100px] rounded-full border-[4px] mb-1 border-[#2EDE60]"
        />
        <h1 className="text-[20px] font-bold">{user.username}</h1>
      </div>
      <ul className="mt-5 flex items-center justify-around text-center ">
        <li>
          <h1 className="font-bold">1387</h1>
          <h1 className="text-[--sub-text]">Total Points</h1>
        </li>
        <li>
          <h1 className="font-bold text-[#2EDE60]">Emerald</h1>
          <h1 className="text-[--sub-text]">Rank</h1>
        </li>
        <li>
          <h1 className="font-bold">4</h1>
          <h1 className="text-[--sub-text]">Certificates</h1>
        </li>
      </ul>

      <ul className="mt-5">
        {["Github", "Linkedin"].map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-[10%]  py-3 !bg-[--bg-secondary] "
          >
            <h1 className="">{item}</h1>
            <button className="text-[#ADD5F2]">Connect</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
