import Poll from "./feed/poll";
import Post from "./feed/post";
import {poll , post} from '@/dummy_data'
import Comment from '../[id]/components/Comment'


export interface IAppProps {
}

export default function App(props: IAppProps) {


  return (
    <div className="flex-1 ">
      <div className="py-3">
        <h1 className="font-bold gradient-text text-[25px] mb-3 invisible">Feed</h1>
    <div className="flex flex-col gap-3">
        {Array(1).fill(0).map((_, i) => (
          <div key={i}>
              <Post
            title={post.title}
            content={post.content}
          />
          {/* <Poll title={poll.title} options={poll.options} /> */}
          </div>
        ))}
        <div>
          <input type="text" placeholder="Add a comment" className="w-full bg-[--bg-secondary]  rounded-full p-3" />
        </div>
        <h1 className="text-[25px] gradient-text">Replies</h1>
        <Comment />
      

    </div>
      
      </div>
    </div>
  );
}
