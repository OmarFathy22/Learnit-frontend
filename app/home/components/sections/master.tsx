"use client";
import { useState } from "react";
import Slider from "../shared/Slider";
import { GoArrowRight } from "react-icons/go";
import CourseCard from "../shared/CourseCard";
import {  ICourses } from '@/app/community/interfaces/post';

export interface IAppProps {}
const categories = [
  "Development",
  "Business",
  "Finance",
  "Design",
  "Marketing",
  "IT & Software",
  "Personal Development",
];
export default function App({Courses}: ICourses) {
  const [active, setActive] = useState(0);
  const handleActive = (index:number) => {
    setActive(index)
  }
  return (
    <div className="bg-[--bg-tertiary]  pt-[30px] gradient-b-border  ">
      <h1 className="gradient-text text-[30px] max-600:text-[25px]  global-padding ">
        Master your career
      </h1>
      <ul className="flex justify-between gap-5 gradient-border global-padding py-3 mt-[30px]  overflow-auto custom-scrollbar">
        {categories.map((category, i) => (
          <button onClick={()=>handleActive(i)} key={i} className={`cursor-pointer  whitespace-nowrap  text-[--sub-text] font-medium text-[20px] ${active === i && "gradient-text"}`}>
            {category}
          </button>
        ))}
        <li className="cursor-pointer whitespace-nowrap flex items-center gap-1 text-[--sub-text]  font-medium text-[20px]">
          <h1>All Categories</h1>
           <GoArrowRight className="mt-1" size={20} />
        </li>
      </ul>
      {/* react slider Here */}
      <div className="global-padding py-[40px]">
        <Slider>
        {Courses?.map((course, i) => (
          <div key={i}>
           <CourseCard course={course} />  
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
