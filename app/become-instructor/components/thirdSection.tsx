"use client";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
export interface IAppProps {
  selectStyles : any
}
const countryOptions = [
  { value: "Egypt", label: "Egypt" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
];
const fieldOptions = [
   { value: "Software Development", label: "Software Development" },
  { value: "Business", label: "Business" },
  { value: "Design", label: "Design" },
  { value: "Personal Development", label: "Personal Development" },
];


export interface IAppProps {}

export default function App({selectStyles}: IAppProps) {

  
  return (
    <div className="bg-[--bg-secondary] rounded-md  p-[30px] mt-2  flex flex-col items-center gap-5">
        <div className="w-full">
        <label htmlFor="displayName" className="mb-1 block">
          Diplay Name
        </label>
        <input
        id="displayName"
        placeholder="This is the name that will be visible to others on the platform."
        type="text"
        className="w-full bg-transparent border border-[#46464C] rounded-sm py-3 px-1 mt-1 "
      />
      </div>

        <div className="w-full">
        <label htmlFor="instructor-email" className="mb-1 block">
        Email Address
        </label>
        <input
        id="instructor-email"
        placeholder="ex. example@email.com"
        type="email"
        className="w-full bg-transparent border border-[#46464C] rounded-sm py-3 px-1 mt-1 "
      />
      </div>

      <div className="flex items-center gap-3 w-full ">
          <div className="flex-1">
          <label htmlFor="instructor-country" className="mb-1 block">
          Country
          </label>
          <Select options={countryOptions} styles={selectStyles} />
        </div>
          <div className="flex-1">
          <label htmlFor="instructor-field" className="mb-1 block">
          Field
          </label>
          <Select options={fieldOptions} styles={selectStyles} />
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="instructor-experience" className="mb-1 block">
          Experience
        </label>
        <textarea
        id="instructor-experience"
        placeholder="give us a Brief summary of teaching or relevant experience"
        className="min-h-[150px] w-full bg-transparent border border-[#46464C] rounded-sm py-3 px-1 mt-1 "
      />
      </div>
    </div>
  );
}
