"use server";
import {revalidatePath} from 'next/cache'
export const getData = async () => {
  const res = await fetch("https://learnit-backend-woad.vercel.app/post/all");
  revalidatePath("/community")
  return res.json();
};

export const CreateNewPost = async (formData:FormData) => {
  const res = await fetch(
    "https://learnit-backend-woad.vercel.app/post/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
        communityID: "661b6426c57eea7217130260",
      }),
    }
  );
  if (!res.ok) {
    const errorResponse = await res.json(); // Wait for the response to be resolved
    console.error(errorResponse);
    return;
  }
  revalidatePath("/community")
  console.log(res.status);
  console.log("done");
};

