"use server";
import {revalidatePath} from 'next/cache'
export const getUsers = async () => {
  const res = await fetch("http://localhost:8000/leaderboard");
  revalidatePath("/ranking")
  return res.json();
};