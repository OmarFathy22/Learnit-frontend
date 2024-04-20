import Link from "next/link";
import * as React from "react";


export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-secondary] py-[30px] pb-[70px] flex flex-col items-center gradient-t-border  ">
      {/* react slider Here */}
      <div style={{
        backgroundImage: `url('/instructor_new.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
          className="global-padding   w-[70%] h-[400px] ">
      
      </div>
    <div className="flex flex-col gap-3 justify-start items-center mt-[30px]  w-[70%]">
        <h1 className="gradient-text text-[30px]  text-center ">
        Become an instructor
        </h1>
        <h1 className="mb-3 text-center">Join instructors globally in educating millions on LearnIt. Empower your teaching passion with our tools and expertise.</h1>
        <Link href="/instructor" className="gradient-bg p-2 px-[50px] rounded-md">Start teaching today </Link>
    </div>
    </div>
  );
}
