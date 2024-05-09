'use server'
export const getData = async () => {
  const res = await fetch("https://learnit-backend-woad.vercel.app/post/all");
  if (!res.ok) {
    return;
  }

  return res.json();
};