export const getPost = async (id:string) => {
  const post = await fetch(
    `https://learnit-backend-woad.vercel.app/post/${id}`
  ).then((res) => res.json());
  return post;
}