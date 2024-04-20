import * as React from 'react';
import Image from 'next/image';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='p-5 flex flex-col gap-3'>
      {/* instructor data */}
        <div className="flex items-center  gap-3  ">
        <div>
          <Image
            src="/instructor.png"
            alt="course instructor"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="truncate">
          <h1>Jonas Schmedtmann</h1>
          <h2 className="truncate text-[--sub-text]">
            Web Developer, Designer, And course instructor
          </h2>
        </div>
      </div>
       {/* about this course */}
      <div>
        <h1 className='gradient-text text-[20px]'>About this course</h1>
        <h1>Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux</h1>
      </div>
      <div>
        <h1 className='gradient-text text-[20px]'>By the numbers</h1>
        <ul className='border border-[#ffffffc2] overflow-hidden rounded-sm mt-2'>
          <li className="flex items-center  justify-between gap-1 bg-[--bg-secondary] px-3 py-2">
            <h1 className='font-bold '>Skill level </h1>
            <h1 className='text-[#ffffffc2]'>All levels</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-tertiary] px-3 py-2">
            <h1 className='font-bold'>Students </h1>
            <h1 className='text-[#ffffffc2]'>126</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-secondary] px-3 py-2">
            <h1 className='font-bold'>Language </h1>
            <h1 className='text-[#ffffffc2]'>English</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-tertiary] px-3 py-2">
            <h1 className='font-bold'>Captions </h1>
            <h1 className='text-[#ffffffc2]'>Yes</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-secondary] px-3 py-2">
            <h1 className='font-bold'>Lectures </h1>
            <h1 className='text-[#ffffffc2]'>150</h1>
          </li>
          <li className="flex items-center justify-between gap-1 bg-[--bg-tertiary] px-3 py-2">
            <h1 className='font-bold'>Video </h1>
            <h1 className='text-[#ffffffc2]'>19.5 total hours  </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
