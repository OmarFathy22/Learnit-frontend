import * as React from "react";
import Post from "../components/feed/post";
import Dialog from "../components/joinDialog";
import AddPost from "../components/addPost";
import Feed from "../components/SpecificFeed";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="min-1300:px-[40px] max-1300:w-[90%] max-1300:mx-auto  flex gap-[20px] justify-between py-[40px] ">
      <div className='max-1300:hidden'>
      <AddPost />
    </div>
      <Feed  />
      <div className="max-1100:hidden">
        <Dialog />
      </div>
    </div>
  );
}
