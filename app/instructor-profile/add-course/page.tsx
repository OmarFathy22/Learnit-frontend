import * as React from 'react';
import LeftSide from '../components/leftSide';
import CourseDetails from './components/CourseDetails';
import Sections from './components/Sections';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className=' '>
      <div className='col-span-3  py-5 pb-20   min-h-[100vh] bg-[--bg-tertiary] left-[400px]'>
        <h1 className='font-bold text-[20px] ml-[5%]'>Course Details</h1>
        <CourseDetails/> 
        <h1 className='mt-5 font-bold text-[20px] ml-[5%]'>Sections</h1>
        <Sections/>
      </div>
    </div>
  );
}
