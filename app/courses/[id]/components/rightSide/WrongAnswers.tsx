import * as React from 'react';
import Image from 'next/image'

export interface IAppProps {
  handleRetry: ()=>void;
  handleLeave: ()=>void;
}

export default function App ({handleLeave , handleRetry}: IAppProps) {
  return (
    <div className="w-[700px] p-5 bg-[#26262C] rounded-lg">
    <h1 className="gradient-text text-[25px]">it’s result time</h1>
    <div className="w-full relative bg-white h-[2px] rounded-md  my-5">
      <div  style={{ width: `${100}%`, transition: "width 0.5s" }} className="gradient-bg rounded-md  absolute left-0 top-0 right-0 bottom-0" />
    </div>
    <h1 className="text-[20px] font-bold mb-5">
    Sorry, you got 2 out of 4 correct. You need at least 3 correct answers to proceed. Please retry to continue.
    </h1>
     <div className='flex justify-center items-center'>
      <Image src="/wrong_answers.png" alt="wrong_answers" width={1000} height={1000} className="w-[300px] h-[300px]"/>
     </div>
    <div className="flex items-center justify-between mt-5">
      <button
        onClick={()=> handleRetry()}
        className={`px-10 py-2 rounded-md gradient-bg`}
      >
        Retry
      </button>
      
        <button
          onClick={()=> handleLeave()}
          className={`px-10 py-2 rounded-md bg-[#333] `}
        >
          Leave
        </button>
      
    </div>
  </div>
  );
}
