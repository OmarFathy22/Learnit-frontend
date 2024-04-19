import * as React from "react";
import Image from "next/image";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div
      className={`h-[120px] w-[120px] relative  border-[8px] border-[#6BEDFE]  rounded-full -translate-x-[20px]
    `}
    >
      <div>
        <Image
          src={"/girl1.png"}
          alt="girl"
          width={1000}
          height={1000}
          className="rounded-full w-full h-full"
        />
      </div>
      <div>
        <Image
          src={"/rank-second.png"}
          alt="group1"
          width={1000}
          height={1000}
          className="rounded-full -translate-y-3 h-full w-full"
        />
      </div>
    </div>
  );
}
