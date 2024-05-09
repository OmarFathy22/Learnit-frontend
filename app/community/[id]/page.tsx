import * as React from "react";
import Post from "../components/feed/post";
import Dialog from "../components/joinDialog";
import AddPost from "../components/addPost";
import Feed from "./components/SpecificFeed";
import { getPost } from "./actions";
export interface IAppProps {
}

export default async function App({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return (
    <div className="min-1300:px-[40px] max-1300:w-[90%] max-1300:mx-auto  flex gap-[20px] justify-between py-[40px] ">
      <div className="max-1300:hidden">
        <AddPost />
      </div>
      <Feed post = {post} replies = {post.comments} />
      <div className="max-1100:hidden">
        <Dialog />
      </div>
    </div>
  );
}
