"use client";
import * as React from "react";
import CoursesSection from "./rightSideComponents/coursesSections";
import EnrolledIcon from "@/components/svgs/Enrolled";
import InstructorFeedbacks from "./InstructorFeedbacks";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="">
      <CoursesSection title="Courses" Icon={EnrolledIcon} />
      <InstructorFeedbacks />
    </div>
  );
}
