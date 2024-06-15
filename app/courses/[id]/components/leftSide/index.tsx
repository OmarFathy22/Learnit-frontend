import * as React from 'react';
import Video from './video'
import Enroll from './enroll'
export interface IAppProps {

}

export default function App (props: IAppProps) {
  const videoId = 'oTxAIn8DRr8'
  const start = '15'
  const end = '20'
  return (
    <div className='flex-1 flex flex-col h-[calc(100vh-80px)] overflow-auto'>
      <Video url={`https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&rel=0`}/>
      {/* <Enroll/> */}
    </div>
  );
}
