import * as React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-primary] mx-1 p-3 rounded-md">
      <h1>
        <FaQuoteLeft size={20} />
      </h1>
      <h1 className="text-gray-300">
        Iam proud to say that after a few months of taking this course i passed
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
            className="rounded-full w-[35px] h-[35px]"
          />
        </div>
        <div className="truncate">
          <h1>Isabella Rodriguez</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 p-2 ">
        <div>
          <FaCirclePlay size={20} />
        </div>
        <div className=" ">
          <h2 className="text-[13px]">
            [NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02
          </h2>
        </div>
      </div>
    </div>
  );
}
