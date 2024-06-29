import Image from "next/image";
import Link from "next/link";

import FirstPlace from "../rankingSection/firstPlace";
import SecondPlace from "../rankingSection/secondPlace";
import ThirdPlace from "../rankingSection/thirdPlace";
import { GoArrowRight } from "react-icons/go";
import { getUsers } from "./actions";
// export interface IUser {
// 	_id: string;
// 	username: string;
// 	password: string;
// 	email: string;
// 	photoUrl: string;
// 	isInstructor: boolean;
// 	lastAccessToken?: any;
// 	createdAt: string;
// 	updatedAt: string;
// 	__v: number;
// }
export interface UserID {
	_id: string;
	username: string;
	email: string;
	photoUrl: string;
}

export interface RootObject {
	_id: string;
	userID: UserID;
	points: number;
	rank: string;
	certificates: any[];
	coursesInProgress: any[];
	allTimeRanking: number;
	monthlyRanking: number;
	lastRankingUpdate: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
export interface IUserProps {
  user: RootObject
}

export default async function App() {
  const users = await getUsers();
  return (
    <div className="bg-[--bg-primary]   py-[40px] flex flex-col items-center gradient-b-border  ">
      <h1 className={`gradient-text text-[50px] max-600:text-[40px] mb-[40px]  `}>Top rankings</h1>
      {/* react slider Here */}
      <div className="w-[100%]">
        <div
          style={{
            backgroundImage: `url('/ranking.png')`,
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="global-padding w-full h-[500px] max-600:h-[350px] mx-auto   bg-contain max-900:bg-cover "
        >
          <div className="flex gap-[100px]  justify-center items-center h-full">
            <SecondPlace user = {users[1]} />
            <FirstPlace user = {users[0]} />
            <ThirdPlace user = {users[2]}/>
          </div>
        </div>
      </div>
      <div className=" -translate-y-[60px] rounded-md w-[70%] max-900:w-[90%] ">
        <ul className="bg-[--bg-secondary] b rounded-md flex flex-col gap-[20px] p-[30px] max-500:p-[15px]">
          {users.slice(3 , 7).map((user:RootObject, index:number) => (
              <li key={index} className="flex justify-between items-center  ">
                <div className="flex items-center gap-[30px] max-500:gap-[15px]">
                  <h2>{index + 4}</h2>
                  <Image
                    src={user?.userID?.photoUrl || "/girl1.png"}
                    alt="girl"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[65px] h-[65px] max-500:w-[45px] max-500:h-[45px] border-[5px] border-gray-300  max-500:border-[3px] "
                  />
                  <h1 className="max-500:text-[10px]">{user?.userID?.username}</h1>
                </div>
                <div className="rounded-full p-3 py-2 max-500:text-[10px] bg-[#46464C]">{user?.points}xp</div>
              </li>
            ))}
        </ul>
        <Link href="/ranking">
          <div className="text-[#FFF] text-[18px] bg-[--bg-secondary] text-center mt-[3px] py-4 flex justify-center items-center gap-2 rounded-md">
            <h1 className="max-500:text-[12px]">View Full List </h1>
            <h1><GoArrowRight className="max-500:text-[12px]"/></h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
