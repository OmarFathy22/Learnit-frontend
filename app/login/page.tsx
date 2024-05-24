"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { UserContext } from "@/hooks/useUser";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

export interface IAppProps {}

export default function App(props: IAppProps) {
  const { user , setUser} = React.useContext(UserContext);
  console.log('user' ,user);
  const router = useRouter()
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (eo:React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [eo.target.name]: eo.target.value,
    })
  }
  const handleSubmit = async (eo: React.FormEvent<HTMLFormElement>) => {
    eo.preventDefault();
    const response = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });

    if(response?.error){
      return console.error(response.error);
    }
    if(response?.ok){
      console.log("response", response)
    }

  };
  const handleSignout = () => {
    signOut({ callbackUrl: "/login" });
    localStorage.removeItem("user");
    setUser(null);
  }
  return (
    <>
      {user && Object.keys(user).length > 0 ? (
        <div>
          <button
            onClick={() => handleSignout()}
            className="gradient-bg w-fit flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-primary] rounded-sm outline-none  active:scale-[.95]"
          >
            <h1>Signout</h1>
          </button>
        </div>
      ) : (
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
              onChange={(eo)=>handleChange(eo)}
              name="email"
                type="email"
                placeholder="Email"
                className=" px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
              />
            </div>
            <div>
              <input
              onChange={(eo)=>handleChange(eo)}
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
              onClick={() => signIn("google")}
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
      )}
    </>
  );
}
