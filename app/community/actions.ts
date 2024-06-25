"use server";
import {revalidatePath} from 'next/cache'
export const getPosts = async () => {
  const res = await fetch("http://localhost:8000/post/all");
  revalidatePath("/community")
  return res.json();
};
export const getPolls = async () => {
  const res = await fetch("http://localhost:8000/poll/all");
  // revalidatePath("/community")
  return res.json();
};

export const CreateNewPost = async (formData:FormData) => {
  const res = await fetch(
    "http://localhost:8000/post/create",
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
};
export const CreateNewPoll = async (title:string , options:any[]) => {
 try{
  const res = await fetch(
    "http://localhost:8000/poll/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        options: options,
        communityID: "661b6426c57eea7217130260",
      }),
    }
  );
  if (!res.ok) {
    const errorResponse = await res.json(); // Wait for the response to be resolved
    console.error(errorResponse);
    return;
  }
  console.log("created successfully");
  // revalidatePath("/community")
 }catch(e){
    console.log(e);
  }
};
export const UpdatePoll = async (pollID:string , options:any[] , totalVotes: any []) => {
 try{
  const res = await fetch(
    `http://localhost:8000/poll/${pollID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalVotes: totalVotes,
        options: options,
      }),
    }
  );
  if (!res.ok) {
    const errorResponse = await res.json(); // Wait for the response to be resolved
    console.error(errorResponse);
    return;
  }
  console.log("Updated successfully");
  // revalidatePath("/community")
 }catch(e){
    console.log(e);
  }
};

