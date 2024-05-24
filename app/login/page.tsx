"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { UserContext } from "@/hooks/useUser";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";


const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

export interface IAppProps {}

export default function App(props: IAppProps) {
  const session = useSession();
  const { user, setUser } = React.useContext(UserContext);

  
  // console.log("user", user);
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (eo: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [eo.target.name]: eo.target.value,
    });
  };
  const handleSubmit = async (eo: React.FormEvent<HTMLFormElement>) => {
    eo.preventDefault();
    try {
      const response = await fetch(
        `https://learnit-backend-woad.vercel.app/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      const data = await response.json();
      location.href = "/home";
      console.log(data);
      toast.success("User created successfully");
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("User creation failed");
    }
  };
  const handleSigninWithProvider = async () => {
    const fakePassword = Math.random().toString(36).slice(-8);

    const userData = {
      username: session?.data?.user?.name,
      email: session?.data?.user?.email,
      password: fakePassword,
      photoUrl: session?.data?.user?.image,
    };
  
    try {
      const response = await fetch(
        `https://learnit-backend-woad.vercel.app/auth/signin-provider`,
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
      location.href = "/home";
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  } 
  const handleSignout = () => {
    // signOut({ callbackUrl: "/login" });
    localStorage.removeItem("user");
    setUser(null);
  };
   React.useLayoutEffect(() => {
    if(session.data){
      handleSigninWithProvider()
    }
  } ,[session.data])
  return (
    <>
      <div className="flex flex-col items-center gap-5 min-h-[calc(100vh-80px)] bg-[--bg-secondary] pt-[50px] ">
        <h1 className="gradient-text text-[20px]">
          Log in to your LearnIt account
        </h1>

        <form
          onSubmit={(eo) => handleSubmit(eo)}
          className={`flex flex-col gap-3 min-w-[350px] ${ubuntu.className}`}
        >
          <div>
            <input
              onChange={(eo) => handleChange(eo)}
              name="email"
              type="email"
              placeholder="Email"
              className=" px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
            />
          </div>
          <div>
            <input
              onChange={(eo) => handleChange(eo)}
              name="password"
              type="password"
              placeholder="Password"
              className=" px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
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
            onClick={() => {
              signIn("google");
            }}
            className="flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-tertiary] rounded-sm outline-none w-full active:scale-[.95]"
          >
            <Image
              src="/logo_google.png"
              alt="google"
              width={1000}
              height={1000}
              className="w-[30px] h-[30px]"
            />
            <h1>Coninue with Google</h1>
          </button>
          <button
            onClick={() => signIn("github")}
            className="flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-tertiary] rounded-sm outline-none w-full active:scale-[.95]"
          >
            <Image
              src="/github.png"
              alt="google"
              width={1000}
              height={1000}
              className="w-[30px] h-[30px]"
            />
            <h1>Coninue with Github</h1>
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
    </>
  );
}
