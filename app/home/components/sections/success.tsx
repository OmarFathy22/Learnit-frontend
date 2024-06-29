'use client';
import * as React from 'react';
import Slider from '../shared/Slider'
import CourseCard from '../shared/CourseCard';
import {  ICourses } from '@/app/community/interfaces/post';
import { useContext } from 'react';
import { UserContext } from '@/hooks/useUser';

export default function App ({Courses}: ICourses) {
  const {user} = useContext(UserContext)
  return (
    <div className='global-padding  py-[40px] pb-[50px] min-1400:gradient-b-border'>
      <div className=' h-full'>
        <div>
          <span>Welcome to </span>
          <span className='font-bold'>Learnit, </span>
          <span className='gradient-text'>{user?.username || "Username"}</span>
        </div>
        <h1 className='gradient-text text-[30px] max-600:text-[25px] mb-[30px]'>
        Success Starts Here
        </h1>
        {/* react slider Here */}
      <div className=''>
          <Slider >
          {Courses.map((course, i) => (
              <div key={i}>
               <CourseCard course = {course} />  
              </div>
            ))}
          </Slider>
      </div>
      </div>
    </div>
  );
}
