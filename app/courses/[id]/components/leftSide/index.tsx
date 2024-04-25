import * as React from 'react';
import Video from './video'
import Enroll from './enroll'
export interface IAppProps {

}

export default function App (props: IAppProps) {

  return (
    <div className='flex-1 flex flex-col h-[calc(100vh-80px)] overflow-auto'>
      <Video url={`https://www.youtube.com/embed/9zmwGT7DEsM?start=${'15'}&end=${'20'}&rel=0`}/>
      {/* <Enroll/> */}
    </div>
  );
}
