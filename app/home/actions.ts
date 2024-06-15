"use server";
import {revalidatePath} from 'next/cache'
export const getData = async () => {
  const res = await fetch("http://localhost:8000/course/all");
  revalidatePath("/home")
  return res.json();
};
export const getSections = async (courseID:string) => {
  const res = await fetch(`http://localhost:8000/course-section/all/${courseID}`);
  revalidatePath("/home")
  return res.json();
};