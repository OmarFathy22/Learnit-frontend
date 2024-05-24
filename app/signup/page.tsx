"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { RequestVerificationCode } from "./actions";
import {toast} from 'react-toastify'

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });
export interface IAppProps {}

export default function App(props: IAppProps) {
  const [credentials, setCredentials] = useState({});

  const handleChange = (eo: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [eo.target.name]: eo.target.value,
    });
    console.log(credentials);
  };

  const handleSubmit = async(eo: React.FormEvent<HTMLFormElement>) => {
    eo.preventDefault();
    try {
      const response = await fetch(`https://learnit-backend-woad.vercel.app/auth/signup` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      console.log(data);
      toast.success('User created successfully')
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('User creation failed')
    }
  };
  return (
    <div className="flex flex-col items-center gap-5 min-h-[calc(100vh-80px)] bg-[--bg-secondary] pt-[50px] ">
      <h1 className="gradient-text text-[20px]">
        Sign up and start your success journey
      </h1>

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-3 min-w-[350px] ${ubuntu.className}`}
      >
        <div>
          <input
            onChange={(eo) => handleChange(eo)}
            name="username"
            type="text"
            required
            placeholder="Username"
            className=" px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
          />
        </div>
        <div>
          <input
            onChange={(eo) => handleChange(eo)}
            name="email"
            type="email"
            required
            placeholder="Email"
            className=" px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
          />
        </div>
        <div>
          <input
            onChange={(eo) => handleChange(eo)}
            name="password"
            type="password"
            required
            placeholder="Password"
            className=" px-2 py-3 bg-[--bg-primary] rounded-sm outline-none w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="gradient-bg w-full py-3 rounded-sm active:scale-[.95] font-bold"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="min-w-[350px] flex flex-col gap-3">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] flex-1 bg-[#46464C]" />
          <h1>Or</h1>
          <div className="h-[1px] flex-1 bg-[#46464C]" />
        </div>
        <button className="flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-primary] rounded-sm outline-none w-full active:scale-[.95]">
          <Image
            src="/logo_google.png"
            alt="google"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]"
          />
          <h1 className="font-bold">Coninue with Google</h1>
        </button>
        <button className="flex items-center cursor-pointer gap-3 px-3 py-3 bg-[--bg-primary] rounded-sm outline-none w-full active:scale-[.95]">
          <Image
            src="/logo_facebook.png"
            alt="google"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]"
          />
          <h1 className="font-bold">Coninue with Facebook</h1>
        </button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="h-[1px] min-w-[350px] bg-[#46464C]" />
        <div className="flex gap-1">
          <h1>Already have an account?</h1>
          <Link href="/login" className="gradient-text">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
