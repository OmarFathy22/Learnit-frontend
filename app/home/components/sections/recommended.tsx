"use client";
import * as React from "react";
import Slider from "../shared/Slider";
import { GoArrowRight } from "react-icons/go";
import CourseCard from "../shared/CourseCard";
import {  ICourses } from '@/app/community/interfaces/post';

export interface IAppProps {}

export default function App({Courses}: ICourses) {
  return (
    <div className="bg-[--bg-secondary] py-[40px] gradient-b-border  ">
      <h1 className="gradient-text text-[30px] max-600:text-[25px]  global-padding mb-[30px] ">
        Recommended for you
      </h1>
      {/* react slider Here */}
      <div className="global-padding">
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
