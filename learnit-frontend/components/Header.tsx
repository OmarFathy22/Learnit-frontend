import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    // how to make the text linear gradient in tailwindcss
    <div className="h-[100px] w-full bg-[--bg-secondary]">
      <h1 className="gradient-text text-[30px]">Learnit</h1>
    </div>
  );
}
