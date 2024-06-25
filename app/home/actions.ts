"use server";
import {revalidatePath} from 'next/cache'
export const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/all`);
  revalidatePath("/home")
  return res.json();
};
export const getSections = async (courseID:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course-section/all/${courseID}`);
  revalidatePath("/home")
  return res.json();
};
export const getLessons = async (sectionID:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course-section/all/${sectionID}`);
  revalidatePath("/home")
  return res.json();
};