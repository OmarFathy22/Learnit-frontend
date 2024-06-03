"use server";
import {revalidatePath} from 'next/cache'
export const getData = async () => {
  const res = await fetch("https://learnit-backend-woad.vercel.app/post/all");
  revalidatePath("/community")
  return res.json();
};