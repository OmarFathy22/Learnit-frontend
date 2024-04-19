import Image from "next/image";
// import {Ubuntu} from "next/font/google";
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
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-[120px] w-[120px] relative  border-[8px] ${i==0 ? "border-[#6BEDFE]" : i==1 ? "border-[#6BFE8B]" : "border-[#FFF]"}  rounded-full ${
                    i == 0 && "-translate-x-[20px]"
                  } ${i == 2 && "translate-x-[20px]"} ${
                    i == 1 && "-translate-x-3 -translate-y-[100px] !w-[150px] !h-[150px] "
                  }`}
                >
                 {
                  i == 1 &&     <div className="absolute top-[-90px] p-7">
                  <Image
                    src={'/crown.png'}
                    alt="group1"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[100px] h-[100px] object-contain"
                  />
                </div>
                 }
                  <div>
                    <Image
                      src={i == 0 ? '/girl1.png' : i == 1 ? '/guy.png' : '/girl2.png'}
                      alt="group1"
                      width={1000}
                      height={1000}
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div>
                    <Image
                      src={i == 0 ? '/rank-second.png' : i == 1 ? '/rank-first.png' : '/rank-third.png'}
                      alt="group1"
                      width={1000}
                      height={1000}
                      className="rounded-full -translate-y-3 h-full w-full"
                    />
                  </div>
                </div>
              ))}
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
