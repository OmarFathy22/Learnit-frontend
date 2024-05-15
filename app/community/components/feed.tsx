import Poll from "./feed/poll";
import Post from "./feed/post";
import { IPosts } from "../interfaces/post";


export default  function App({ Posts }: IPosts) {
  Posts.reverse();
  return (
    <div className="flex-1 ">
      <div className="py-3">
        <h1 className="font-bold gradient-text text-[25px] mb-3 max-1000:hidden">
          Feed
        </h1>
        <div className="flex flex-col gap-4">
          {Posts?.map((item, i) => (
            <div key={i}>
              <Post {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
