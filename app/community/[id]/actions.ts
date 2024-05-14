 import { revalidatePath } from "next/cache";
export const getPost = async (id:string) => {
  const post = await fetch(
    `https://learnit-backend-woad.vercel.app/post/${id}`
  ).then((res) => res.json());
  revalidatePath(`/community/${id}`);
  return post;
}

export const CreateNewReply = async ( postID:string,formData:FormData) => {
  const res = await fetch(
    "https://learnit-backend-woad.vercel.app/comment/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: formData.get("content"),
        postID: postID,
      }),
    }
  );
  // revalidatePath(`/community/[id]` , "page")
  if (!res.ok) {
    const errorResponse = await res.json(); // Wait for the response to be resolved
    console.error(errorResponse);
    return;
  }
  // revalidatePath('/community')
};