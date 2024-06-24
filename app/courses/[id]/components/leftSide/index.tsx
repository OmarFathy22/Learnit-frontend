import * as React from 'react';
import Video from './video'
import Enroll from './enroll'
export interface IAppProps {
 currLesson: any;
 key ?: number;
}

export default function App ({currLesson}: IAppProps) {
  const videoId = currLesson?.videoId
  const start = currLesson?.start
  const end = currLesson?.end
  return (
    <div className='flex-1 flex flex-col h-[calc(100vh-80px)] overflow-auto'>
      <Video url={`https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&rel=0`}/>
      {/* <Enroll/> */}
    </div>
  );
}
