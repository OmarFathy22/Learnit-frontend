import * as React from 'react';
import Feed from './feed'
import Dialog from './joinDialog'
import AddPost from './addPost'
import { Posts } from '../interfaces/post';

export interface IAppProps {
}

export default function App ({Posts}: Posts) {
  console.log("Posts" , Posts);
  return (
    <div className='max-1000:hidden px-[40px] flex gap-[20px] justify-between py-10 pt-5 '>
    <div className='max-1300:hidden'>
      <AddPost />
    </div>
    <Feed Posts={Posts} />
    <Dialog />
  </div>
  );
}
