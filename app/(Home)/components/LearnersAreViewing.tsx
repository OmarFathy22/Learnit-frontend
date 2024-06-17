"use client";
import * as React from "react";
import Slider from "../../home/components/shared/Slider";
import { GoArrowRight } from "react-icons/go";
import CourseCard from "../../home/components/shared/CourseCard";
import { ICourses } from '@/app/community/interfaces/post';



export default function App({Courses}: ICourses) {
  return (
    <div className="bg-[--bg-secondary] py-[40px] gradient-b-border  ">
      <h1 className="gradient-text text-[30px]  global-padding mb-[30px] ">
       Learners Are Viewing
      </h1>
      {/* react slider Here */}
      <div className="global-padding">
        <Slider>
        {Courses.map((course, i) => (
          <div key={i}>
           <CourseCard course={course}  />  
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
