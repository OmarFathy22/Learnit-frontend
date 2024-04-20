import Image from "next/image";
import Link from "next/link";

import FirstPlace from "../rankingSection/firstPlace";
import SecondPlace from "../rankingSection/secondPlace";
import ThirdPlace from "../rankingSection/thirdPlace";
import { GoArrowRight } from "react-icons/go";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-primary] pb-[30px] flex flex-col items-center  ">
      <h1 className={`gradient-text text-[40px] pt-[30px]  `}>Top rankings</h1>
      {/* react slider Here */}
      <div>
        <div
          style={{
            backgroundImage: `url('/ranking.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="global-padding  w-full h-[500px] "
        >
          <div className="flex gap-[100px]  justify-center items-center h-full">
            <SecondPlace />
            <FirstPlace />
            <ThirdPlace />
          </div>
        </div>
      </div>
      <div className=" -translate-y-[60px] rounded-md w-[70%] ">
        <ul className="bg-[--bg-secondary] rounded-md flex flex-col gap-[20px] p-[30px]">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="flex justify-between items-center ">
                <div className="flex items-center gap-[30px]">
                  <h2>{index + 4}</h2>
                  <Image
                    src={"/girl1.png"}
                    alt="girl"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[65px] h-[65px] border-[5px] border-[#FB6BFE] "
                  />
                  <h1 className="">Liam Davis</h1>
                </div>
                <div className="rounded-full p-3 py-2 bg-[#46464C]">1000xp</div>
              </li>
            ))}
        </ul>
        <Link href="/ranking">
          <div className="text-[#FFF] text-[18px] bg-[--bg-secondary] text-center mt-[5px] py-4 flex justify-center items-center gap-2">
            <h1>View Full List </h1>
            <h1><GoArrowRight size={20}/></h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
