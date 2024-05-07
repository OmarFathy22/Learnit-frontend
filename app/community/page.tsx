"use client";
import { useState } from "react";
import DesktopCommunity from "./components/feed/DesktopCommunity";
import MobileCommunity from "./components/feed/MobileCommunity";
import { FaPlus } from "react-icons/fa";
import AddPost from "./components/addPost";
import Modal from "@/components/Modal";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <DesktopCommunity />
      <MobileCommunity />
      <div>
        <button
          onClick={() => handleClose()}
          title="add new post"
          className="fixed bottom-[20px] gradient-bg p-3 rounded-full right-[50px] min-1300:hidden"
        >
          <FaPlus
            size={16}
            className="text-white   rounded-full  cursor-pointer"
          />
        </button>
        <Modal isOpen={isOpen} handleClose={handleClose}>
          <AddPost />
        </Modal>
      </div>
    </div>
  );
}
