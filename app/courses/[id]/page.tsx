'use client'
import { useState , useEffect } from 'react';

import * as React from 'react';
import LeftSide from './components/leftSide/index';
import RightSide from './components/rightSide/index';
import { getCourse } from './actions';

export interface IAppProps {
}

export default function App ({ params }: { params: { id: string } }) {
  const [key, setKey] = React.useState(0);
  const [currLesson , setCurrLesson] = React.useState();
  const [course, setCourse] = React.useState({});
  const refreshVideo = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const changeLesson = (lesson:any) => {
    setCurrLesson(lesson)
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getCourse(params?.id)
      setCourse(res)
      setCurrLesson(res?.courseSections[0]?.lessons[0])
    }
    getData()
  },[params?.id ])


  return (
    <div className='flex max-1000:flex-col'>
      <LeftSide key={key} currLesson={currLesson}/>
      <RightSide course = {course}  refreshVideo = {refreshVideo} changeLesson={changeLesson}/>
    </div>
  );
}
