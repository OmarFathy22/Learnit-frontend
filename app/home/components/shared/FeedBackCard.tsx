import * as React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="  m-2 max-900:m-1   rounded-md   ">
      <div className="bg-[--bg-primary] w-full h-full   p-5 max-400:p-3 !rounded-md ">
        <h1>
          <FaQuoteLeft className="text-[20px] max-600:text-[15px]" />
        </h1>
        <h1 className="text-[20px] max-600:text-[15px]">
          I am proud to say that after a few months of taking this course i passed
          my exam and am now an AWS certified cloud practitioner! this content was
          exactly what i needed
        </h1>
        <div className="flex items-center gap-3 py-2 ">
          <div>
            <Image
              src="/girl2.png"
              alt="course instructor"
              width={1000}
              height={1000}
              className="rounded-full w-[30px] h-[30px]"
            />
          </div>
          <div className="truncate">
            <h1 className="text-[15px] gradient-text max-600:text-[11px]">Isabella Rodriguez</h1>
          </div>
        </div>
      
        <div className="flex items-center gap-3 p-2 ">
          <div>
            <FaCirclePlay className="text-[20px] max-600:text-[15px]" />
          </div>
          <div className=" ">
            <h2 className="text-[13px] text-gray-300 max-600:text-[10px]">
              [NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
