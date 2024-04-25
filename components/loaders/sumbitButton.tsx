import * as React from "react";
import { ThreeDots } from "react-loader-spinner";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <ThreeDots
      visible={true}
      height="25"
      width="25"
      color="#FFF"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
