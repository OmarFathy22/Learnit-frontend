"use client";
import React, { useState } from "react";
import { CreateNewReply } from "../../actions";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

export interface IAppProps {
  postId?: string;
}

export default function App({ postId }: IAppProps) {
  const router = useRouter();
  const [newReply, setNewReply] = useState("");
  const [focus, setFocus] = useState(false);
  if (!postId) return null;

  const handleAddReply = async () => {
    const formData = new FormData();
    formData.append("content", newReply);
    await CreateNewReply(postId, formData);
    setNewReply("");
    setFocus(false);
    toast.success("Reply added successfully");
    location.reload();
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReply(event.target.value);
  };

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  return (
    <div className="flex-1">
      {focus ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddReply();
          }}
          className="relative w-full bg-[--bg-secondary] rounded-3xl over"
        >
          <textarea
            autoFocus
            name="content"
            onChange={handleChange}
            value={newReply}
            className="w-full bg-[--bg-secondary] overflow-y-auto rounded-3xl min-h-[100px] p-3"
          />
          <div className="flex flex-row-reverse gap-2 px-1 py-[3px]">
            <button
              type="submit"
              className="gradient-bg font-bold text-white rounded-full px-5 py-2"
            >
              Reply
            </button>
            <button
              onClick={handleFocus}
              type="button"
              className="bg-[--bg-primary] text-white rounded-full px-5 py-2"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <input
          onFocus={handleFocus}
          type="text"
          placeholder="Add a comment"
          className="w-full bg-[--bg-secondary] rounded-full p-3"
        />
      )}
    </div>
  );
}
