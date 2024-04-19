import Image from "next/image";
import { Lato } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";



const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const stars:number = 4
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
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
      {/* course instructor */}
      {/* <div className="flex items-center gap-3 p-2 ">
        <div>
          <Image
            src="/instructor.png"
            alt="course instructor"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="truncate">
          <h1>Jonas Schmedtmann</h1>
          <h2 className="truncate text-[--sub-text]">
            Web Developer, Designer, And course instructor
          </h2>
        </div>
      </div> */}

      {/* course data */}
      <div className="p-2  py-4 rounded-b-md">
        <h1 className="text-[20px] font-bold">The Ultimate React Course 2024: React, Redux & More</h1>
        <h1 className="mt-1 text-[12px]">Jonas Schmedtmann</h1>
        <h2 className="text-[--sub-text]  font-bold my-1  ">19h 45m - 150 lessons</h2>
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
  );
}
