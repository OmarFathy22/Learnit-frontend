/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useEffect } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import ProfileIcon from './svgs/profileIcon';
import { UserContext } from '@/hooks/useUser';
import { useSession } from 'next-auth/react';

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
];

const App = () => {
  const { user , setUser} = useContext(UserContext);
  useEffect(() => {
    const localStorageValue = window.localStorage.getItem("user")
    if (localStorageValue && localStorageValue !== 'undefined') {
      setUser(JSON.parse(localStorageValue))
    }
  
  }, [setUser]);
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}><RiMenu3Line size={25}/></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='!bg-[--bg-secondary] flex flex-col  items-center gap-[110px]  py-[40px] text-[16px]'
            >
              <div>
                <Link onClick={()=>toggleDrawer()} href={"/"}>
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
              </div>
        <ul
          className={`flex flex-col gap-[30px] items-center text-[16px] ${
            !user || user && Object.keys(user).length == 0 &&
            "hidden"
          }`}
        >
          {" "}
          {routes.map((route, i) => (
            <li
            onClick={()=>toggleDrawer()}
              key={i}
              className={`text-[20px] ${
                pathname === route.path ? "gradient-text" : ""
              }`}
            >
              <Link
                href={route.path}
                className={`text-[20px] ${
                  pathname === route.path ? "gradient-text" : "!text-[white]"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
          {/* profile Icon */}
          <li onClick={()=>toggleDrawer()}>
            <Link href={"/profile"}>
              <ProfileIcon active={pathname.startsWith("/profile")} />
            </Link>
          </li>
        </ul>

        <ul
          className={`flex flex-col-reverse  gap-[20px] items-center text-[16px]  ${
            user && Object.keys(user).length > 0  && "hidden"
          }`}
        >
          {" "}
          <li onClick={()=>toggleDrawer()}>
            <Link href={"/login"}>
              <h1 className="text-[16px] font-bold">Login</h1>
            </Link>
          </li>
          <li onClick={()=>toggleDrawer()}>
            <Link href={"/signup"}>
              <h1 className="text-[16px] gradient-bg px-5 py-2 rounded-md font-bold">
                Sign Up
              </h1>
            </Link>
          </li>
        </ul>


            </Drawer>
        </>
    )
}

export default App