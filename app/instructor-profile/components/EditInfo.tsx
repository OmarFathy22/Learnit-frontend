"use client";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";



export interface IAppProps {}

export default function App(props: IAppProps) {
  const router = useRouter()
  const [links, setLinks] = useState([
    {
      name: "Github",
      link: "",
    },
    {
      name: "Linkedin",
      link: "",
    },
  ]);
  const handleAddLink = () => {
    setLinks([...links, { name: "", link: "" }]);
  };
  const handleRemoveLink = (itemPassing:{}) => {
     const newLinks = links.filter((item) => {
        return item != itemPassing
     })
     setLinks(newLinks)
  }
  const handleChangeNames = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newLinks = [...links];
    newLinks[index].name = event.target.value;
    setLinks(newLinks);
  };
  const handleChangeLinks = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newLinks = [...links];
    newLinks[index].link = event.target.value;
    setLinks(newLinks);
  };
  
 const handleGoBack = ()=>{
  
    router.back( )
 }

  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[20px] font-bold mb-5">Edit Info</h1>
          <button onClick={()=>handleGoBack()} className=" font-bold text-[#ADD5F2] flex items-center   mb-5">
            <h1>Profile</h1>
            <h1 className=" translate-y-[2px]"><MdKeyboardArrowRight/></h1>
          </button>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <label htmlFor="name" className="text-[--sub-text]">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="bg-[--bg-primary] rounded-full px-2 py-1 outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-[--sub-text]">Photo</h1>
          <label htmlFor="upload-photo" className="cursor-pointer text-[#ADD5F2]" >
            Upload Photo
            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div>
        <h1 className="text-[20px] font-bold mb-5 mt-10">Edit Links</h1>
        <ul className="flex flex-col gap-5">
          {links.map((item, index) => (
            <li key={index + 1} className="flex items-center gap-3">
              <label htmlFor={item.name}>Title</label>
              <input
                onChange={handleChangeNames(index)}
                id={item.name}
                value={item.name}
                type="text"
                placeholder={item.name}
                className=" bg-[--bg-primary] rounded-full px-2 py-1 outline-none "
              />
              <label htmlFor={item.link}>Link</label>
              <input
                onChange={handleChangeLinks(index)}
                id={item.link}
                value={item.link}
                type="text"
                placeholder={item.link}
                className=" bg-[--bg-primary] rounded-full px-2 py-1 outline-none"
              />
              <button onClick={() => handleRemoveLink(item)} className="font-bold text-red-500">Remove</button>
            </li>
          ))}
        </ul>
        <button className="text-[#ADD5F2] mt-5 font-bold" onClick={handleAddLink}>Add link +</button>
        <button className="gradient-bg px-5 py-1 rounded-md block mt-10 hover:opacity-[.95]">Save Changes</button>
      </div>
      <div>
      <Link href={`/instructor-profile/add-course`} className="bg-[--links]  w-fit px-5 py-1 rounded-md block mt-10 hover:opacity-[.95]">
        <h1 className="flex items-center gap-2">
          <h1>
            Add New Course
          </h1>
          <FaPlus/>
        </h1>
      </Link>

      </div>
    </div>
  );
}
