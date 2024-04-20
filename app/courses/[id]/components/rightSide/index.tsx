import * as React from 'react';
import Description from './description'
import Reviews from './reviews'

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='w-[500px] h-[calc(100vh-200px)]'>
      <div className='bg-[--bg-secondary] flex justify-around items-center text-[16px] py-2'>
        <h1 className='gradient-text cursor-pointer'>Description</h1>
        <h1 className='cursor-pointer'>Reviews</h1>
        <h1 className='cursor-pointer'>Content</h1>
      </div>
      {/* <Description/> */}
      <Reviews/>
    </div>
  );
}
