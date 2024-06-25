"use client";
import Poll from "./feed/poll";
import Post from "./feed/post";
import { IPost } from "../interfaces/post";
import { IPoll } from "../interfaces/post";
import { useEffect, useState } from "react";

export interface IAppProps {
  Posts: IPost[];
  Polls: IPoll[];
}

export default function App({ Posts, Polls }: IAppProps) {
  const [postOrPoll, setPostOrPoll] = useState("post");
  return (
    <div className="flex-1 ">
      <div className="py-3">
        <h1 className="font-bold gradient-text text-[25px] mb-3 max-1000:hidden">
          Feed
        </h1>
        <div className="flex justify-center items-center gap-10 mb-3">
          <button
            onClick={() => setPostOrPoll("post")}
            className={`cursor-pointer text-[20px] ${
              postOrPoll === "post" ? "gradient-text" : ""
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setPostOrPoll("poll")}
            className={`cursor-pointer text-[20px] ${
              postOrPoll === "poll" ? "gradient-text" : ""
            }`}
          >
            Polls
          </button>
        </div>
        {postOrPoll == "poll" ? (
          <div className="flex flex-col gap-4 mb-4">
            {Polls?.map((item, i) => (
              <div key={i}>
                <Poll Poll={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {Posts?.map((item, i) => (
              <div key={i}>
                <Post {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
