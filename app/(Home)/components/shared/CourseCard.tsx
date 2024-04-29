import Image from "next/image";
import { Lato } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import Link from "next/link";



const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const stars:number = 4
export interface IAppProps {
  id: number
}

export default function App({id}: IAppProps) {
  return (
    <div>
      <Link  href={`courses/${id} h-full `}>
        <div className={`mx-3 rounded-md cursor-pointer ${lato.className}`}>
          {/* course Image */}
          <div className=" ">
            <Image
              alt="course picture"
              src="/course.png"
              width={200}
              height={200}
              className="w-full max-h-[200px] rounded-t-md"
            />
          </div>
          {/* course data */}
          <div className="p-2  py-4 rounded-b-md">
            <h1 className="text-[20px] font-bold">The Ultimate React Course 2024: React, Redux & More</h1>
            <h1 className="mt-1 text-[12px]">Jonas Schmedtmann</h1>
            {/* <h2 className="text-[--sub-text]  font-bold my-1  ">19h 45m - 150 lessons</h2> */}
            <div className="text-[#FFCA28] flex items-center gap-1">
              <h3>4.7</h3>
              <ul className="flex">
                {Array(4).fill(0).map((_, i) => (
                  <li key={i}>
                    <IoIosStar size={15} />
                  </li>
                ))}
                {Array(5 - stars).fill(0).map((_, i) => (
                  <li key={i} className="">
                    <IoStarHalf size={15} />
                  </li>
                ))}
              </ul>
              <h4 className="text-[--sub-text]">(133)</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
