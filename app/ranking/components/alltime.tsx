import Image from 'next/image';
export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <ul className="bg-[--bg-secondary] rounded-md flex flex-col gap-[20px] p-[30px]">
        <li  className="flex justify-between items-center ">
                <div className="flex items-center gap-[110px]">
                  <h2>Rank</h2>
                  
                  <h1 className="">Name</h1>
                </div>
                <div className="mr-5 ">Points</div>
              </li>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="flex justify-between items-center ">
                <div className="flex items-center gap-[30px]">
                  <h2>4</h2>
                  <Image
                    src={"/girl1.png"}
                    alt="girl"
                    width={1000}
                    height={1000}
                    className="rounded-full w-[75px] h-[75px] border-[5px] border-[#FB6BFE] "
                  />
                  <h1 className="">Liam Davis</h1>
                </div>
                <div className="rounded-full p-3 py-2 bg-[#46464C]">1000xp</div>
              </li>
            ))}
        </ul>
  );
}
