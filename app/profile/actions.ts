"use server";
import { revalidatePath } from "next/cache";
export const getData = async () => {
  const res = await fetch("https://learnit-backend-woad.vercel.app/post/all");
  // revalidatePath("/community");
  return res.json();
};


export const getUserProgress = async (userID: string) => {
  try {
    const res = await fetch(`http://localhost:8000/user-progress/${userID}`);
    // revalidatePath("/profile");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
