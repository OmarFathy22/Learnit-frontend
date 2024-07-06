import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { Lato } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import Link from "next/link";
import { ICourse } from "@/app/community/interfaces/post";
import { useContext } from "react";
import { UserContext } from "@/hooks/useUser";
import { addToWishlist, removeFromWishlist, getWishlist } from "./actions";
import { usePathname } from "next/navigation";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const stars: number = 0;
export interface IAppProps {
  course: ICourse;
}

export default function App({ course }: IAppProps) {
  const { user, setUser } = useContext(UserContext);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const getUserWishlist = async () => {
      const wishlist = await getWishlist(user?._id);
      setIsBookmarked(
        wishlist?.savedCourses?.some((item: any) => item?._id === course?._id)
      );
    };
    if (user) {
      getUserWishlist();
    }
  }, [course?._id, user, pathname]);
  const handleBookmark = async () => {
    if (isBookmarked) {
      setIsBookmarked(false);
      await removeFromWishlist(user?._id, course?._id);
    } else {
      setIsBookmarked(true);
      await addToWishlist(user?._id, course?._id);
    }
  };

  return (
    <div className="">
      <div
        className={`mx-[12px]  max-600:mx-[6px] rounded-md cursor-pointer ${lato.className}`}
      >
        <Link href={`/courses/6669e0ef251adad68e94d84d`}>
          {/* course Image */}
          <div className="w-full">
            <Image
              alt="course picture"
              src={course?.bannerImage || `/course.png`}
              width={1000}
              height={1000}
              className="w-full  h-[200px] rounded-t-md object-fill"
            />
          </div>
        </Link>
        {/* course data */}
        <div className="p-2  py-6 max-600:py-3 rounded-b-md bg-[--bg-secondary]">
          <Link href={`courses/${course?._id} h-full w-full  `}>
            <h1 className="text-[20px] max-600:text-[15px] font-bold truncate">
              {course?.courseName}
            </h1>
          </Link>
          <h1 className="text-[12px] font-medium my-[6px] mt-[8px]">
            LearnIt Team
          </h1>
          {/* <h2 className="text-[--sub-text]  font-bold my-1  ">19h 45m - 150 lessons</h2> */}
          <div className="flex justify-between items-center gap-3">
            <div className="text-[#FFCA28] flex items-center gap-1">
              <h3>0</h3>
              <ul className="flex">
                {Array(0)
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
                      <IoStarOutline size={15} />
                    </li>
                  ))}
              </ul>
              <h4 className="text-[--sub-text]">(0)</h4>
            </div>
            <button onClick={() => handleBookmark()} className="  ">
              {isBookmarked ? (
                <BsBookmarkFill className="text-[20px] max-600:text-[16px]" />
              ) : (
                <BsBookmark className="text-[20px] max-600:text-[16px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
