import * as React from 'react';
import Image from "next/image";
import Voting from './Voting'

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
  <div className='py-3 px-4 bg-[--bg-secondary] rounded-md'>
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
    <h1 className='text-[17px] my-3'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur odio earum incidunt, repudiandae asperiores fugiat quidem, nam provident excepturi voluptatum enim distinctio, tempora sed doloribus ex numquam nostrum totam ad!
    </h1>

    <Voting/>

  </div>
  );
}
