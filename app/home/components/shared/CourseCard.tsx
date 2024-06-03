import Image from "next/image";
import { useState } from "react";
import { Lato } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import Link from "next/link";
import { ICourse } from "@/app/community/interfaces/post";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const stars: number = 4;
export interface IAppProps {
  course : ICourse
}

export default function App({course}: IAppProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <div className="">
      <div
        className={`mx-[12px] max-600:mx-[6px] rounded-md cursor-pointer ${lato.className}`}
      >
        <Link href={`courses/${course?._id} h-full w-full  `}>
          {/* course Image */}
          <div className="w-full">
            <Image
              alt="course picture"
              src={`/course.png`}
              width={1000}
              height={1000}
              className="w-full max-h-[200px] rounded-t-md"
            />
          </div>
        </Link>
        {/* course data */}
        <div className="p-2  py-6 max-600:py-3 rounded-b-md bg-[--bg-secondary]">
          <Link href={`courses/${course?._id} h-full w-full  `}>
            <h1 className="text-[20px] max-600:text-[15px] font-bold">
              {course?.courseName}
            </h1>
          </Link>
          <h1 className="text-[12px] font-medium my-[6px] mt-[8px]">Jonas Schmedtmann</h1>
          {/* <h2 className="text-[--sub-text]  font-bold my-1  ">19h 45m - 150 lessons</h2> */}
          <div className="flex justify-between items-center gap-3">
            <div className="text-[#FFCA28] flex items-center gap-1">
              <h3>4.7</h3>
              <ul className="flex">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i}>
                      <IoIosStar size={15} />
                    </li>
                  ))}
                {Array(5 - stars)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i} className="">
                      <IoStarHalf size={15} />
                    </li>
                  ))}
              </ul>
              <h4 className="text-[--sub-text]">(133)</h4>
            </div>
            <button onClick={() => handleBookmark()} className="  ">
              {isBookmarked ? <BsBookmarkFill className="text-[20px] max-600:text-[16px]" /> : <BsBookmark className="text-[20px] max-600:text-[16px]" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
