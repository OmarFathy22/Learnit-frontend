import * as React from 'react';
import LeftSide from '../components/leftSide';
import EditInfo from '../components/EditInfo';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='relative  grid grid-cols-4  '>
      <LeftSide/>
      <div className='col-span-3 p-5 pb-20 px-10 min-h-[100vh] bg-[--bg-tertiary] left-[400px]'>
        <EditInfo/>
      </div>
    </div>
  );
}
