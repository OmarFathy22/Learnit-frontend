"use server";
export const RequestVerificationCode = async (formData: FormData) => {
  const res = await fetch(
    "https://learnit-backend-woad.vercel.app/auth/request-verification-code",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "of405789@gmail.com" }) as string,
    }
  );
  if (!res.ok) {
    return;
  }
};
