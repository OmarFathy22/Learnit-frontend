"use server";
import toast from "react-hot-toast";
export interface ICourse {
  courseName: string;
  language: string;
  numberOfLessons: number;
  totalVideoTime: number;
  courseLevel: string;
  pointsToUnlock: number;
  description: string;
  bannerImage: string;
  instructorID: string;
  subCategoryName: string;
}

export const CreateNewCourse = async (body: ICourse) => {
  try {
    const res = await fetch(
      "https://learnit-backend-woad.vercel.app/course/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const Response = await res.json();
    console.log("done!!", Response);
    toast.error("Failed to create course");
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while creating the course");
  }
};
