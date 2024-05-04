"use client";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
export interface IAppProps {
  selectStyles : any
}
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const countryOptions = [
  { value: "+20", label: "Egypt (+20)", image: "/EG.png" },
  { value: "+966", label: "Saudi Arabia (+966)", image: "/SA.png" },
  { value: "+971", label: "Dubai (+971)", image: "/UAE.png" }, 
];

export default function App ({selectStyles}: IAppProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState('');
  const handleCountryChange = (eo:any) => {
    setCountryCode(eo.value);
    setPhoneNumber(eo.value + " ");
  }
  const handleChangePhone = (eo: React.ChangeEvent<HTMLInputElement>) => {
    if (eo.target.value.startsWith("+")) {
      setPhoneNumber(eo.target.value);
    } else {
      setPhoneNumber(countryCode + eo.target.value);
    }
  }
  return (
    <div className="bg-[--bg-secondary] rounded-md  p-[30px] w-full flex flex-col gap-3">
    <div>
      <label htmlFor="instructor-fullname">Full Name</label>
      <input
        id="instructor-fullname"
        placeholder="Your Full Name"
        type="text"
        className="w-full bg-transparent border border-[#46464C] rounded-sm py-3 px-1 mt-1 "
      />
    </div>
    <div className="flex gap-3">
      <div className="flex-1">
        <label htmlFor="instructor-fullname" className="mb-1 block">
          Gender
        </label>
        <Select options={genderOptions} styles={selectStyles} />
      </div>
      <div className="flex-1">
        <label htmlFor="instructor-fullname">Date of Birth</label>
        <input
          placeholder="MM/DD/YYYY"
          type="date"
          className="w-full bg-transparent border border-[#46464C] rounded-sm py-3 px-1 mt-1 "
        />
      </div>
    </div>
    <div className="flex items-center flex-row-reverse gap-3">
      <input
       onChange={(eo)=>handleChangePhone(eo)}
       value={phoneNumber}
        placeholder="+20**********"
        type="text"
        className="w-full bg-transparent border border-[#46464C] rounded-sm py-3 px-1  "
      />
      <div className="w-[250px]">
        <Select
         onChange={(eo)=>handleCountryChange(eo)}
          options={countryOptions}
          styles={selectStyles}
          formatOptionLabel={({ label, image }) => (
            <div className="flex items-center">
              <Image width={1000} height={1000} src={image} alt={label} className="w-4 h-4 mr-2" />
              {label}
            </div>
          )}
        />
      </div>
    </div>
  </div>
  );
}


