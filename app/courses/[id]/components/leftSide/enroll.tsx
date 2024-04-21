import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="py-5 px-[20px] flex justify-between gap-[50px]  items-center ">
      <h1 className="text-[20px] font-bold">The Ultimate React Course 2024: React, Redux & More</h1>
       <button className="gradient-bg px-10 py-2 rounded-md font-bold hover:opacity-[0.95] transition-all">Enroll</button>
    </div>
  );
}
