"use server";
import {revalidatePath} from 'next/cache'
export const getUserProgress = async (userID:string) => {
  const res = await fetch(`http://localhost:8000/user-progress/${userID}`);
  revalidatePath("/home")
  return res.json();
};