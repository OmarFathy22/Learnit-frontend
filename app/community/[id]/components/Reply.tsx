import * as React from 'react';
import Image from "next/image";
import Voting from './Voting'

export interface IAppProps {
  content: string;
}

export default function App ({content}: IAppProps) {
  return (
  <div className='py-3 w-[calc(100vw-800px)] px-4 bg-[--bg-secondary] rounded-md'>
      <div  className="flex gap-3  ">
      <div>
        <Image
          src="/girl2.png"
          alt="comment author"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="">
        <h1>Jonas Schmedtmann</h1>
        <div className='flex items-center gap-2'>
          <h2 className="text-[--sub-text] text-[12px]">
            3 months ago
          </h2>
        </div>
      </div>
      
    </div>
    {/* how to force this h1 if it is too long to go to the next line */}
    <h1 className='text-[#ADD5F2] text-[16px] font-bold py-2' style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
  {`${content}`}
</h1>



    <Voting/>

  </div>
  );
}
