"use client";
import { useState } from "react";
export interface IAppProps {
}

export default function App (props: IAppProps) {
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
  );
}
