import * as React from "react";
import { Triangle } from "react-loader-spinner";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-primary] fixed bottom-0 right-0 left-0 top-0 w-full flex items-center justify-center">
      <Triangle
      visible={true}
      height="80"
      width="80"
      color="#f97316"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  );
}
