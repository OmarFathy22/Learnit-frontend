import * as React from "react";
import Image from "next/image";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <div className="w-[500px] h-[400px]">
        <Image
          src="/went-wrong.png"
          alt="not_found"
          width={1000}
          height={1000}
          className="h-full w-full"
        />
      </div>
      <h1 className="font-bold text-[30px]">Page Not Found !</h1>
    </div>
  );
}
