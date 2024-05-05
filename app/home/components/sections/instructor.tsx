import Link from "next/link";
import * as React from "react";


export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-tertiary] py-[40px]    flex flex-col items-center gradient-t-border  ">
      {/* react slider Here */}
      <div style={{
        backgroundImage: `url('/instructor_new.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
          className="global-padding   w-[70%] max-900:w-[90%] max-900:h-[250px] h-[430px] ">
      
      </div>
    <div className="flex flex-col gap-3 justify-start items-center mt-[30px] max-900:mt-[10px]  w-[70%] max-900:w-[90%]">
        <h1 className="gradient-text text-[30px] max-600:text-[22px]  text-center ">
        Become an instructor
        </h1>
        <h1 className="mb-3 text-center text-[18px] max-600:text-[14px] ">Join instructors globally in educating millions on LearnIt. Empower your teaching passion with our tools and expertise.</h1>
        <Link href="/become-instructor" className="gradient-bg p-2 px-[50px] rounded-md font-bold text-[18px] max-600:text-[14px]">Start teaching today </Link>
    </div>
    </div>
  );
}
