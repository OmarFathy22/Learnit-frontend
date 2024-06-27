"use server";
import {revalidatePath} from 'next/cache'
export const getUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard`);
  // revalidatePath("/ranking")
  return res.json();
};