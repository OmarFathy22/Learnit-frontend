import Poll from "./feed/poll";
import Post from "./feed/post";
import { Posts } from "../interfaces/post";


export default  function App({ Posts }: Posts) {
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
              <Post id={item._id} title={item.title} content={item.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
