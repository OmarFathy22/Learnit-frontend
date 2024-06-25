"use server";
import {revalidatePath} from 'next/cache'
export const getAllTimeUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard`);
  revalidatePath("/ranking")
  return res.json();
};
export const getMonthlyUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard/monthly`);
  revalidatePath("/ranking")
  return res.json();
};