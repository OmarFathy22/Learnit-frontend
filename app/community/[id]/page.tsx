import * as React from "react";
import Post from "../components/feed/post";
import Dialog from "../components/joinDialog";
import AddPost from "../components/addPost";
import Feed from "../components/SpecificFeed";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="px-[40px]  flex gap-[20px] justify-between py-10 pt-5 ">
      <AddPost />
      <Feed  />
      <Dialog />
    </div>
  );
}
