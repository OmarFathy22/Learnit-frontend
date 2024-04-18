import * as React from 'react';
import Slider from './Slider'
export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div>
      <div>
        <span>Welcome to </span>
        <span className='font-bold'>Learnit, </span>
        <span className='gradient-text'>UserName</span>
      </div>
      <h1 className='gradient-text text-[30px]'>
      Success Starts Here
      </h1>


      {/* react slider Here */}
      <Slider />
    </div>
  );
}
