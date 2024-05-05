'use client';
import * as React from 'react';
import Slider from '../shared/Slider'
import CourseCard from '../shared/CourseCard';
export interface IAppProps {

}

export default function App (props: IAppProps) {
  return (
    <div className='global-padding  py-[40px] pb-[50px]  min-1400:gradient-b-border'>
      <div className=' h-full'>
        <div>
          <span>Welcome to </span>
          <span className='font-bold'>Learnit, </span>
          <span className='gradient-text'>UserName</span>
        </div>
        <h1 className='gradient-text text-[30px] max-600:text-[25px] mb-[30px]'>
        Success Starts Here
        </h1>
        {/* react slider Here */}
      <div className=''>
          <Slider >
          {Array(10).fill(0).map((_, i) => (
              <div key={i}>
               <CourseCard id={i} />  
              </div>
            ))}
          </Slider>
      </div>
      </div>
    </div>
  );
}
