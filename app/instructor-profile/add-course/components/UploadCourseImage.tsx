"use client";
import Image from "next/image";
import { useState } from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [selectedImage, setSelectedImage] = useState("/course-placeholder.png");

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setSelectedImage(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setSelectedImage("/course-placeholder.png");
    }
  };
  return (
    <div className="rounded-md  p-[30px] mt-2  flex flex-row-reverse items-center justify-between w-full gap-5">
      <div>
        <Image
          src={selectedImage}
          alt="avatar"
          width={1000}
          height={1000}
          className=" w-[250px] h-[150px] object-contain"
        />
      </div>
      <div>
        <h1 className="text-[20px]">Upload Course banner</h1>
        <div className="">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer font-bold text-[14px] bg-[--bg-tertiary] text-white py-2 px-4 rounded block text-center mt-10"
          >
            Choose Image
          </label>
        </div>
      </div>
    </div>
  );
}