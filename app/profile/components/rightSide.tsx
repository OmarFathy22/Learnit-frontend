"use client";
import * as React from "react";
import Image from "next/image";
import CoursesSection from "./rightSideComponents/coursesSections";
import SavedIcon from "@/components/svgs/saved";
import EnrolledIcon from "@/components/svgs/Enrolled";
import { TbCertificate } from "react-icons/tb";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Communities from './rightSideComponents/communities'
import {ICourse  } from "@/app/community/interfaces/post";

export interface ICertificate {
	_id: string;
	title: string;
	description: string;
	userID: string;
	dateCompleted: string;
	__v: number;
}
export interface IWishlist {
	_id: string;
	userID: string;
	courses: ICourse[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface RootObject {
	certificates: ICertificate[];
	wishlists: IWishlist;
	inProgressCoursess: IWishlist;
}
export interface IAppProps {
  userProgress: any;

}

export default function App({userProgress}: IAppProps) {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-2">
        <div className=" -translate-y-[1px]">
          <TbCertificate size={24} className="text-[#F4442C]" />
        </div>
        <h1 className="text-[22px] gradient-text ">Certificates</h1>
      </div>
      <div className="">
    { userProgress?.certificates.length > 0 ?  <ul className="flex justify-between gap-2 py-3   overflow-auto custom-scrollbar">
          {userProgress?.certificates.map((item:any, index:number) => (
            <li key={index} className="flex-shrink-0">
              <Image
                src={item}
                width={1000}
                height={1000}
                alt="certificate"
                className="w-[200px]  px-2 "
              />
            </li>
          ))}
        </ul> : <h1 className="text-[18px] font-bold text-center">No Certificates yet</h1>}
      </div>
      <CoursesSection courses={userProgress?.inProgressCoursess} title="Enrolled Courses" Icon={EnrolledIcon} />
      <CoursesSection courses={userProgress?.wishlist?.courses} title="Saved Courses" Icon={SavedIcon} />
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
