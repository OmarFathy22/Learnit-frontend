import * as React from "react";
import Image from "next/image";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div
      className={`h-[120px] w-[120px] relative  border-[8px]  "border-[#FFF]"  rounded-full translate-x-[20px]`}
    >
      <div>
        <Image
          src={"/girl2.png"}
          alt="group1"
          width={1000}
          height={1000}
          className="rounded-full w-full h-full"
        />
      </div>
      <div>
        <Image
          src={"/rank-third.png"}
          alt="girl2"
          width={1000}
          height={1000}
          className="rounded-full -translate-y-3 h-full w-full"
        />
      </div>
    </div>
  );
}
