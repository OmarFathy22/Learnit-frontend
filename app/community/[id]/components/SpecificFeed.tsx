import Poll from "../../components/feed/poll";
import Post from "../../components/feed/post";
import Reply from "./Reply";
import AddReply from "./SpecificFeed/AddReply";
import { IPost , IComment } from "../../interfaces/post";

export interface IAppProps {
  post: IPost;
  replies: IComment[];
}

export default async function App({ post, replies }: IAppProps) {
  replies.reverse();
  return (
    <div className="flex-1 min-1300:max-w-[calc(100vw-700px)]">
      <div className="py-3 max-1100:py-0">
        <h1 className="font-bold gradient-text text-[25px] mb-3 invisible max-1100:hidden">
          Feed
        </h1>
        <div className="flex flex-col gap-3">
          <div>
            <Post {...post} />
            {/* <Poll title={poll.title} options={poll.options} /> */}
          </div>
          <div className="flex items-center gap-2">
            <AddReply postId = {post?._id}/>
          </div>
          <h1 className="text-[25px] gradient-text">Replies</h1>
          <ul className="flex flex-col gap-5">
            {replies.map((reply, i) => (
              <li key={i}>
                <Reply content={reply.content} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
