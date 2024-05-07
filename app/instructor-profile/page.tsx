import * as React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
  <div>
      <div className='min-1400:grid min-1400:grid-cols-4  '>
        <div className='max-1400:!bg-[--bg-tertiary]'>
          <LeftSide/>
        </div>
        <div className='min-1400:col-span-3 p-5 pb-20 px-10 min-1400:min-h-[100vh] bg-[--bg-tertiary] min-1400:left-[400px]'>
          <RightSide/>
        </div>
      </div>
  </div>
  );
}
