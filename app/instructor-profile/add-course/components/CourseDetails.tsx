"use client";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import Select from "react-select";
import { selectStyles } from "@/utils/SelectStyles";
import UploadCourseImage from "./UploadCourseImage";
import { CreateNewCourse } from "./actions";
export interface IAppProps {}
const countryOptions = [
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];
const fieldOptions = [
  { value: "Software Development", label: "Software Development" },
  { value: "Business", label: "Business" },
  { value: "Design", label: "Design" },
  { value: "Personal Development", label: "Personal Development" },
];

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [courseData, setCourseData] = useState({});
  const handleChange = (e:SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setCourseData((prev) => ({ ...prev, [target.name]: target.value }));
  }
  return (
    <form className="bg-[--bg-primary] mx-[5%] rounded-md max-500:p-[15px] max-500:text-[10px]  p-[30px] mt-2  flex flex-col items-center gap-5">
      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label htmlFor="displayName" className="mb-1 block">
            Course Name
          </label>
          <input
            id="displayName"
            placeholder="This is the name that will be visible to others on the platform."
            type="text"
            className="w-full bg-transparent border border-[#46464C] rounded-sm p-3 mt-1 "
          />
        </div>
        <div className="flex-1">
          <label htmlFor="instructor-field" className="mb-1 block">
            Category
          </label>
          <Select options={fieldOptions} styles={selectStyles} />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label className="mb-1 block">Course Level</label>
          <Select options={countryOptions} styles={selectStyles} />
        </div>
        <div className="flex-1">
          <label htmlFor="instructor-field" className="mb-1 block">
            Sub Category
          </label>
          <Select options={fieldOptions} styles={selectStyles} />
        </div>
      </div>

      {/* upload course image */}
      <UploadCourseImage setCourseData={setCourseData} />
      {/* upload course image */}

      <div className="w-full">
        <label htmlFor="Description" className="mb-1 block">
          Description
        </label>
        <textarea
          id="Description"
          placeholder="give us a Brief summary of this course"
          className="min-h-[150px] w-full bg-transparent border border-[#46464C] rounded-sm p-3 mt-1 "
        />
      </div>
      <button
        type="submit"
        className="bg-blue-400 disabled:bg-blue-200  rounded-md py-[6px] px-4 ml-3 text-white"
      >
        submit
      </button>
    </form>
  );
}
