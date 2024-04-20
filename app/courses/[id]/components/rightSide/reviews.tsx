import * as React from 'react';
import Image from 'next/image';
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import Stars from '../../../../../components/stars';
export interface IAppProps {
}
 const stars = 4;
export default function App (props: IAppProps) {
  return (
    <div className='p-5 flex flex-col gap-3'>
      <div className=" flex items-center gap-1">
            <h3>4.7</h3>
            <Stars stars={4}/>
            <h4 className="text-[--sub-text]">(133)</h4>
          </div>
          {/* review */}
          <div className="flex   gap-3  ">
        <div>
          <Image
            src="/instructor.png"
            alt="course instructor"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1>Jonas Schmedtmann</h1>
          <div className='flex items-center gap-2'>
            <Stars stars={4}/>
            <h2 className="text-[--sub-text] text-[12px]">
              3 months ago
            </h2>
          </div>
          <h1 className='text-[17px] mt-3'>this is really great course</h1>
        </div>
      </div>
      
    </div>
  );
}
