"use server";
import {revalidatePath} from 'next/cache'
export const getAllTimeUsers = async () => {
  const res = await fetch("http://localhost:8000/leaderboard");
  // revalidatePath("/ranking")
  return res.json();
};
export const getMonthlyUsers = async () => {
  const res = await fetch("http://localhost:8000/leaderboard/monthly");
  // revalidatePath("/ranking")
  return res.json();
};