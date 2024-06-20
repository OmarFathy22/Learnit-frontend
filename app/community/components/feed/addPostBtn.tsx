'use client';
import {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import AddPost from "../addPost";
import Modal from "@/components/Modal";
import { IoMdClose } from "react-icons/io";


export interface IAppProps {
}

export default function App (props: IAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <button
          onClick={() => handleClose()}
          title="add new post"
          className={`cursor-pointer text-[20px] pb-1 max-350:!text-[15px] flex items-center gap-2
          }`}
        >
          add post <span className=' translate-y-[1px] gradient-bg rounded-full p-1'><FaPlus size={12}/></span>
        </button>
        <Modal isOpen={isOpen} handleClose={handleClose}>
          <div>
            <AddPost />
          </div>
        </Modal>
      </div>
  );
}
