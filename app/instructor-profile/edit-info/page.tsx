import * as React from 'react';
import LeftSide from '../components/leftSide';
import EditInfo from '../components/EditInfo';



export default function App () {
  return (
    <div className='relative  min-1300:grid grid-cols-4  '>
    <div className='max-1300:hidden'>
        <LeftSide/>
    </div>
      <div className='col-span-3 p-5 pb-20 px-10 min-h-[100vh] bg-[--bg-tertiary] left-[400px]'>
        <EditInfo/>
      </div>
    </div>
  );
}
