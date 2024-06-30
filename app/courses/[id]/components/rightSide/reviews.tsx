import * as React from 'react';
import Image from 'next/image';
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import Stars from '../../../../../components/stars';
export interface IAppProps {
}
 const stars = 0;
export default function App (props: IAppProps) {
  return (
    <div className=' flex flex-col '>
      <div className="text-[#FFCA28] py-3 px-4 text-[20px] flex items-center gap-1 bg-[--bg-tertiary] border-b-[1px]  border-b-[#474747]">
            <h3>0</h3>
            <Stars stars={stars}/>
            <h4 className="text-[--sub-text]">(0)</h4>
          </div>
          {/* review */}
          
        {
          Array(0).fill(0).map((_, i) => (
            <div key={i} className="flex gap-3 py-3 px-4 bg-[--bg-secondary] border-b-[1px] border-b-[#474747] ">
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
          ))
        }
  <div className=" flex justify-center items-center">
          <h1 className="text-center pt-5 gradient-text font-bold h-full">
            No reviews yet!
          </h1>
      </div>
    </div>
  );
}
