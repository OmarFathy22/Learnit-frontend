import Image from "next/image";
// import {Ubuntu} from "next/font/google";
import FirstPlace from "../rankingSection/firstPlace";
import SecondPlace from "../rankingSection/secondPlace";
import ThirdPlace from "../rankingSection/thirdPlace";
export interface IAppProps {}

// const ubuntu = Ubuntu({subsets: ["latin"], weight: ["300", "400", "500", "700"]});
export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-primary] pb-[70px] flex flex-col items-center ">
      <h1 className={`gradient-text text-[40px] pt-[30px]  `}>
        Top rankings
      </h1>
      {/* react slider Here */}
      <div className="">
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
            <SecondPlace/>
            <FirstPlace/>
            <ThirdPlace/>
          </div>
        
        </div>
        <div className="bg-[--bg-secondary] -translate-y-[60px] ">
          <ul>
            <li>omar</li>
            <li>omar</li>
            <li>omar</li>
            <li>omar</li>
            <li>omar</li>
            <li>omar</li>
            <li>omar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
