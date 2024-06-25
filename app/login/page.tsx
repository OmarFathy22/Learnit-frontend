"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { UserContext } from "@/hooks/useUser";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

export interface IAppProps {}

export default function App(props: IAppProps) {
  const { data: session } = useSession();
  const { user, setUser } = React.useContext(UserContext);
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const handleSigninWithProvider = React.useCallback(
    async (provider: string) => {
      if (!session) {
        return;
      }
      const fakePassword = Math.random().toString(36).slice(-8);
      console.log(session);
      const userData = {
        username: session?.user?.name,
        email: session?.user?.email,
        password: fakePassword,
        photoUrl: session?.user?.image,
      };
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/signin-provider`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (!response.ok) {
          throw new Error("Response not OK");
        }

        const data = await response.json();
        toast.success(`Signed in with ${provider} successfully`);
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        location.href = "/home";
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error(`Sign in with ${provider} failed`);
      }
    },
    [session , setUser]
  );
  React.useEffect(() => {
    handleSigninWithProvider("Google");
  }, [handleSigninWithProvider]);

  const handleChange = (eo: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [eo.target.name]: eo.target.value,
    });
  };

  const handleSubmit = async (eo: React.FormEvent<HTMLFormElement>) => {
    eo.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data?.message == "User not found") {
        toast.error("User not found");
        return;
      }
      console.log("data", data);
      toast.success("User Signed in successfully");
      setUser({ ...data.user, ...data.userProgress });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, ...data.userProgress })
      );
      location.href = "/home";
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("User sign in failed");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 min-h-[calc(100vh-80px)] bg-[--bg-secondary] pt-[50px] ">
      <h1 className="gradient-text text-[20px]">
        Log in to your LearnIt account
      </h1>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 min-w-[350px] ${ubuntu.className}`}
      >
        <div>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className="px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="gradient-bg w-full py-3 rounded-sm active:scale-[.95] font-bold"
          >
            Log In
          </button>
        </div>
      </form>

      <div className="min-w-[350px] flex flex-col gap-3">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] flex-1 bg-[#46464C]" />
          <h1>Or</h1>
          <div className="h-[1px] flex-1 bg-[#46464C]" />
        </div>
        <button
          onClick={() =>
            signIn("google").then(() => handleSigninWithProvider("Google"))
          }
          className="flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-tertiary] rounded-sm outline-none w-full active:scale-[.95]"
        >
          <Image
            src="/logo_google.png"
            alt="google"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]"
          />
          <h1>Continue with Google</h1>
        </button>
        <button
          onClick={() =>
            signIn("github").then(() => handleSigninWithProvider("GitHub"))
          }
          className="flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-tertiary] rounded-sm outline-none w-full active:scale-[.95]"
        >
          <Image
            src="/github.png"
            alt="github"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]"
          />
          <h1>Continue with GitHub</h1>
        </button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="h-[1px] min-w-[350px] bg-[#46464C]" />
        <div className="flex gap-1">
          <h1>New to LearnIt?</h1>
          <Link href="/signup" className="gradient-text">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
