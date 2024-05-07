"use client";
import Poll from "./feed/poll";
import Post from "./feed/post";
import { poll, post } from "@/dummy_data";
import Reply from "../[id]/components/Reply";
import { useState } from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [Replies, setReplies] = useState([
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur odio earum incidunt, repudiandae asperiores fugiat quidem, nam provident excepturi voluptatum enim distinctio, tempora sed doloribus ex numquam nostrum totam ad!",
  ]);
  const [newReply, setNewReply] = useState("");
  const [focus, setFocus] = useState(false);
  const handleAddReply = () => {
    setReplies([...Replies, newReply]);
    setNewReply("");
  };
  const handleChange = (eo: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReply(eo.target.value);
  };
  const handleFocus = () => {
    setFocus((prev) => !prev);
  };
  return (
    <div className="flex-1 min-1300:max-w-[calc(100vw-700px)]">
      <div className="py-3 max-1100:py-0">
        <h1 className="font-bold gradient-text text-[25px] mb-3 invisible max-1100:hidden">
          Feed
        </h1>
        <div className="flex flex-col gap-3">
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <Post title={post.title} content={post.content} />
                {/* <Poll title={poll.title} options={poll.options} /> */}
              </div>
            ))}
          <div className="flex items-center gap-2">
            <div className="flex-1">
              {focus ? (
                <div className="relative w-full  bg-[--bg-secondary] rounded-3xl over">
                  <textarea
                    autoFocus
                    onChange={(eo) => handleChange(eo)}
                    value={newReply}
                    className="w-full  bg-[--bg-secondary] overflow-y-auto  rounded-3xl min-h-[100px]  p-3"
                  />
                  <div className="flex flex-row-reverse gap-2 px-1 py-[3px] ">
                    <button
                      onClick={handleAddReply}
                      className="gradient-bg font-bold  text-white rounded-full px-5 py-2"
                    >
                      Reply
                    </button>
                    <button
                      onClick={handleFocus}
                      className="bg-[--bg-primary] text-white rounded-full px-5 py-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  onFocus={handleFocus}
                  type="text"
                  placeholder="Add a comment"
                  className="w-full  bg-[--bg-secondary]  rounded-full p-3"
                />
              )}
            </div>
          </div>
          <h1 className="text-[25px] gradient-text">Replies</h1>
          <ul className="flex flex-col gap-5">
            {Replies.map((reply, i) => (
              <li key={i}>
                <Reply content={reply} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
