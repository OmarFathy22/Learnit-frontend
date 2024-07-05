import * as React from 'react';
import Comment from "../../../../components/svgs/Comment";
import Image from "next/image";
import Link from 'next/link';
import { FaRegCommentAlt } from "react-icons/fa";




import { IPost } from "../../interfaces/post";


export default function App (post: IPost) {
  console.log("post" , post);
  return (
  <Link href={`/community/${post._id}`}>
      <div className="bg-[#101011] p-4 rounded-md ">
            <div className="flex items-center gap-2">
              <div>
                <Image
                  className="rounded-full"
                  src={post?.userID?.photoUrl || "/girl1.png"}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h1 className="gradient-text text-[18px]">D/LearnIt</h1>
                <h1 className="text-white text-[13px]">{post?.userID?.username}</h1>
              </div>
            </div>
            <div className="py-2">
              <h1 className="text-[#ADD5F2] text-[22px] max-500:text-[15px] font-bold pb-2">
                {post.title}
              </h1>
              <div className="max-500:text-[12px]">
                <h1>
                  {post.content}
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-[5px]">
              <div className=" translate-y-[2px]">
                <Image src="/comment.svg" alt="comment" width={16} height={16} />
              </div>
              <h1 className='gradient-text'>{post?.comments?.length}</h1>
            </div>
          </div>
  </Link >
  );
}
