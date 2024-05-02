import Poll from "./feed/poll";
import Post from "./feed/post";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const post = {
    title: "python app with cpanel hosting in godaddy",
    content: `I have a one python file "main.py" for a telegram bot API, I'm
    trying to host it on godaddy cpanel, in cpanel, I created the
    python app, cpanel generated a passenger_wsgi.py file, I tried
    to replace my main.py code in passenger_wsgi.py and tried to
    append passenger_wsgi.py with my main.py code and tried to
    specify main.py file in Application startup file instead of
    passenger_wsgi.py, and I installed all packages using pip, but
    nothing works, how to host my telegram bot to cpanel?`,
  };
  const poll = {
    title: "Which is the best programming language?",
    options: [
      {
        title: "React",
        count: 10,
      },
      {
        title: "Node js",
        count: 40,
      },
      {
        title: ".Net",
        count: 20,
      },
      {
        title: "python",
        count: 30,
      },
    ],
  }
  let maxi = -1;

  return (
    <div className="flex-1 ">
      <div className="py-3">
        <h1 className="font-bold gradient-text text-[25px] mb-3 ">Feed</h1>
        <Post
          title={post.title}
          content={post.content}
        />
        <Poll title={poll.title} options={poll.options} />
        <Post
          title={post.title}
          content={post.content}
        />
        <Poll title={poll.title} options={poll.options} />
        <Post
          title={post.title}
          content={post.content}
        />
        <Poll title={poll.title} options={poll.options} />
        <Post
          title={post.title}
          content={post.content}
        />
        <Poll title={poll.title} options={poll.options} />
        <Post
          title={post.title}
          content={post.content}
        />
        <Poll title={poll.title} options={poll.options} />
      </div>
    </div>
  );
}
