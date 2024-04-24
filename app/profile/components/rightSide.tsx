"use client";
import * as React from "react";
import Image from "next/image";
import CoursesSection from "./rightSideComponents/coursesSections";
import SavedIcon from "@/components/svgs/saved";
import EnrolledIcon from "@/components/svgs/Enrolled";
import { TbCertificate } from "react-icons/tb";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Communities from './rightSideComponents/communities'
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-2">
        <div className=" -translate-y-[1px]">
          <TbCertificate size={24} className="text-[#F4442C]" />
        </div>
        <h1 className="text-[22px] gradient-text ">Certificates</h1>
      </div>
      <ul className="flex flex-wrap gap-3">
        {["/certificate1.png", "/certificate2.png", "/certificate3.png"].map((item, index) => (
          <li key={index}>
            <Image
              src={item}
              width={200}
              height={200}
              alt="certificate"
              className=""
            />
          </li>
        ))}
      </ul>
      <CoursesSection title="Enrolled Courses" Icon={EnrolledIcon} />
      <CoursesSection title="Saved Courses" Icon={SavedIcon} />
    <div className="">
        <div className="flex items-center gap-2  mt-5 mb-2">
          <div className=" -translate-y-[1px]">
            <HiOutlineChatAlt2 size={24} className="text-[#F4442C]"/>
          </div>
          <h1 className=" text-[22px] gradient-text">Communities</h1>
          </div>
          <div className="flex flex-col gap-3">
            <Communities title="created"/>
            <Communities title="joined"/>
          </div>
          </div>
    </div>
  );
}
