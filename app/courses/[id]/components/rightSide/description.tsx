import * as React from 'react';
import Image from 'next/image';

export interface IAppProps {
  course: any;
}

export default function App ({course}: IAppProps) {
  return (
    <div className='p-5 flex flex-col gap-3'>
      {/* instructor data */}
        {/* <div className="flex items-center  gap-3  ">
        <div>
          <Image
            src="/course.png"
            alt="course instructor"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="truncate">
          <h1>Omar Fathy</h1>
          <h2 className="truncate text-[--sub-text]">
            Web Developer @LearnIt
          </h2>
        </div>
      </div> */}
       {/* about this course */}
      <div>
        <h1 className='gradient-text text-[20px]'>About this course</h1>
        <h1>{course?.description}</h1>
      </div>
      <div>
        <h1 className='gradient-text text-[20px]'>By the numbers</h1>
        <ul className='border border-[#ffffffc2] overflow-hidden rounded-sm mt-2'>
          <li className="flex items-center  justify-between gap-1 bg-[--bg-secondary] px-3 py-2">
            <h1 className='font-bold '>Skill level </h1>
            <h1 className='text-[#ffffffc2]'>{course?.courseLevel}</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-tertiary] px-3 py-2">
            <h1 className='font-bold'>Students </h1>
            <h1 className='text-[#ffffffc2]'>{course?.students}</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-secondary] px-3 py-2">
            <h1 className='font-bold'>Language </h1>
            <h1 className='text-[#ffffffc2]'>{course?.language}</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-tertiary] px-3 py-2">
            <h1 className='font-bold'>Captions </h1>
            <h1 className='text-[#ffffffc2]'>Yes</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-secondary] px-3 py-2">
            <h1 className='font-bold'>Lectures </h1>
            <h1 className='text-[#ffffffc2]'>{course?.numberOfLessons}</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-tertiary] px-3 py-2">
            <h1 className='font-bold'>Video </h1>
            <h1 className='text-[#ffffffc2]'>{course?.totalVideoTime} total hours  </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
