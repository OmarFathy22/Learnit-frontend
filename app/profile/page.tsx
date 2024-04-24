import * as React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='relative  grid grid-cols-4  '>
      <LeftSide/>
      <RightSide/>
    </div>
  );
}
