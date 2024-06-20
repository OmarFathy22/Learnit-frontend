import {useState} from 'react';
import { IoMdClose } from 'react-icons/io';

export interface IAppProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function App ({isOpen ,handleClose ,children}: IAppProps) {
  return (
    <div
    className={`fixed  bottom-0 right-0 left-0 top-[80px] max-600:top-[60px]  w-full z-[20] backdrop-blur  bg-[#222] bg-opacity-[0.4] flex justify-center items-center  ${isOpen ? "" : "hidden"}`}
  >
    <button onClick={() => handleClose()} className='bg-[#333] p-1 rounded-full top-[15px] right-[10px] z-[10000] max-600:top-[10px] max-600:right-[15px] max-600:p-1 absolute'>
      <IoMdClose  className="text-[22px]  " />
    </button>
    {children}
  </div>
  );
}
