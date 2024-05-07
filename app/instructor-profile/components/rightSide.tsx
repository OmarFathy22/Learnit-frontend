"use client";
import * as React from "react";
import Image from "next/image";
import CoursesSection from "./rightSideComponents/coursesSections";
import SavedIcon from "@/components/svgs/saved";
import EnrolledIcon from "@/components/svgs/Enrolled";
import { TbCertificate } from "react-icons/tb";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import Communities from './rightSideComponents/communities'
import Slider from './rightSideComponents/Slider'
import InstructorFeedbacks from './InstructorFeedbacks'
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="">
      
      <CoursesSection title="Courses" Icon={EnrolledIcon} />
      <InstructorFeedbacks/>
  
    </div>
  );
}
