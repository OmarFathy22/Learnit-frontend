import * as React from 'react';
import LeftSide from './components/leftSide/index';
import RightSide from './components/rightSide/index';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='flex'>
      <LeftSide/>
      <RightSide/>
    </div>
  );
}
