"use server";
import { revalidatePath } from "next/cache";
export const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/all`);
  revalidatePath("/community");
  return res.json();
};


export const getUserProgress = async (userID: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user-progress/${userID}`);
    revalidatePath("/profile");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
