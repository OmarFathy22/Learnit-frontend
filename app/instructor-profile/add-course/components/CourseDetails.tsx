"use client";
import Image from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";
import Select from "react-select";
import { selectStyles } from "@/utils/SelectStyles";
import UploadCourseImage from "./UploadCourseImage";
import { CreateNewCourse } from "./actions";
import { ICourse } from "./actions";
import upload from "@/utils/upload/upload";
import toast from "react-hot-toast";
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
const languageOptions = [
  { value: "English", label: "English" },
  { value: "Arabic", label: "Arabic" },
];
const levelOptions = [
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];
const pointsToUnlockOptions = [
  { value: "0", label: "0" },
  { value: "100", label: "100" },
  { value: "200", label: "200" },
  { value: "300", label: "300" },
  { value: "400", label: "400" },
  { value: "500", label: "500" },
];

export interface IAppProps {}
export type OptionType = {
  value: string;
  label: string;
};

export default function App(props: IAppProps) {
  const [courseData, setCourseData] = useState<ICourse>({
    courseName: "",
    language: "",
    courseLevel: "",
    description: "",
    bannerImage: "",
    subCategoryName: "",
    numberOfLessons: 10,
    totalVideoTime: 8.5,
    pointsToUnlock: 0,
    imageFile: new File([""], "filename"),
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setCourseData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const handleChangeSelect = (property: string) => (
    selectedOption: OptionType | null
  ) => {
    if (selectedOption) {
      setCourseData((prev) => ({ ...prev, [property]: selectedOption.value }));
    }
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    const { imageFile, ...rest } = courseData;
    const body = { ...rest };
    e.preventDefault();
    setLoading(true);
    if (imageFile) {
      const imageUrl = await upload(imageFile);
      if (imageUrl) {
        body.bannerImage = imageUrl;
      }
    }
   const newCourse = await CreateNewCourse(body);
    toast.success("Course created successfully");
    localStorage.setItem("course", JSON.stringify(newCourse));
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[--bg-primary] mx-[5%] rounded-md max-500:p-[15px] max-500:text-[10px]  p-[30px] mt-2  flex flex-col items-center gap-5"
    >
      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label htmlFor="displayName" className="mb-1 block">
            Course Name
          </label>
          <input
            onChange={handleChange}
            id="displayName"
            placeholder="This is the name that will be visible to others on the platform."
            type="text"
            name="courseName"
            className="w-full bg-transparent border border-[#46464C] rounded-sm p-3 mt-1 "
          />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label className="mb-1 block">Course Level</label>
          <Select
            onChange={handleChangeSelect("courseLevel")}
            options={countryOptions}
            styles={selectStyles}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="instructor-field" className="mb-1 block">
            Sub Category
          </label>
          <Select
            onChange={handleChangeSelect("subCategoryName")}
            options={fieldOptions}
            styles={selectStyles}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full ">
        <div className="flex-1">
          <label className="mb-1 block">Points to Unlock</label>
          <Select
            onChange={handleChangeSelect("pointsToUnlock")}
            options={pointsToUnlockOptions}
            styles={selectStyles}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="instructor-field" className="mb-1 block">
            Language
          </label>
          <Select
            onChange={handleChangeSelect("language")}
            options={languageOptions}
            styles={selectStyles}
          />
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
          name="description"
          onChange={handleChange}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-blue-400 disabled:bg-blue-200  rounded-md py-[6px] px-4 ml-3 text-white"
      >
        submit
      </button>
    </form>
  );
}
