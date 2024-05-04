"use client";
import Image from "next/image";
import { useState } from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [selectedImage, setSelectedImage] = useState("/avatar.png");

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
      setSelectedImage("/avatar.png");
    }
  };
  return (
    <div className="bg-[--bg-secondary] rounded-md  p-[30px] mt-2  flex items-center gap-5">
      <div>
        <Image
          src={selectedImage}
          alt="avatar"
          width={1000}
          height={1000}
          className="rounded-full w-[150px] h-[150px] object-cover"
        />
      </div>
      <div>
        <h1>Upload Profile Image</h1>
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
            className="cursor-pointer font-bold text-[14px] bg-[--bg-tertiary] text-white py-2 px-4 rounded block text-center mt-5"
          >
            Choose Image
          </label>
        </div>
      </div>
    </div>
  );
}
