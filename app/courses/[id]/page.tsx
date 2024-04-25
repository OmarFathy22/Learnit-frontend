'use client'
import { useState } from 'react';

import * as React from 'react';
import LeftSide from './components/leftSide/index';
import RightSide from './components/rightSide/index';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  const [key, setKey] = React.useState(0);

  const refreshVideo = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className='flex'>
      <LeftSide key={key}/>
      <RightSide  refreshVideo = {refreshVideo}/>
    </div>
  );
}
