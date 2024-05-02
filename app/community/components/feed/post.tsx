import * as React from 'react';
import Comment from "../../../../components/svgs/Comment";
import Image from "next/image";
import Link from 'next/link';

export interface IAppProps {
  title: string;
  content: string;
}

export default function App ({title , content}: IAppProps) {
  return (
  <Link href={`/community/${title}`}>
      <div className="bg-[#101011] p-4 rounded-md ">
            <div className="flex items-center gap-2">
              <div>
                <Image
                  className="rounded-full"
                  src="/girl1.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="gradient-text text-[18px]">D/python</h1>
            </div>
            <div className="py-2">
              <h1 className="text-[#ADD5F2] text-[22px] font-bold pb-2">
                {title}
              </h1>
              <div className="">
                <h1>
                  {content}
                </h1>
              </div>
            </div>
            <div className="gradient-text flex items-center gap-[5px]">
              <div className=" translate-y-[1px]">
                <Comment />
              </div>
              <h1>44</h1>
            </div>
          </div>
  </Link >
  );
}
