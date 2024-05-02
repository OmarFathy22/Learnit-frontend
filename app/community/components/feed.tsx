import Poll from "./feed/poll";
import Post from "./feed/post";
import {poll , post} from '@/dummy_data'

export interface IAppProps {
}

export default function App(props: IAppProps) {


  return (
    <div className="flex-1 ">
      <div className="py-3">
        <h1 className="font-bold gradient-text text-[25px] mb-3 ">Feed</h1>
    <div className="flex flex-col gap-4">
        {Array(10).fill(0).map((_, i) => (
          <div key={i}>
              <Post
            title={post.title}
            content={post.content}
          />
          <Poll title={poll.title} options={poll.options} />
          </div>
        ))}
    </div>
      
      </div>
    </div>
  );
}
