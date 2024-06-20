"use server";
import { revalidatePath } from "next/cache";
export const getWishlist = async (userID: string) => {
  console.log('userid' , userID);
  if (!userID) return;
  try {
    const res = await fetch(`http://localhost:8000/wishlist/${userID}`);
    // revalidatePath("/home")
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const addToWishlist = async (userID: string, courseID: any) => {
  if (!courseID) return;
  try {
    const res = await fetch(
      `http://localhost:8000/wishlist/addNewCourseToWishlist`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, courseID }),
      }
    );
    console.log("added to wishlist");
  } catch (err) {
    console.log(err);
  }
};
export const removeFromWishlist = async (userID: string, courseID: any) => {
  if (!courseID) return;
  try {
    const res = await fetch(
      `http://localhost:8000/wishlist/removeCourseFromWishlist`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, courseID }),
      }
    );
    console.log("removed from wishlist");
  } catch (err) {
    console.log(err);
  }
};
