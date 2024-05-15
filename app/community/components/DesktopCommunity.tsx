import * as React from 'react';
import Feed from './feed'
import Dialog from './joinDialog'
import AddPost from './addPost'
import { IPosts } from '../interfaces/post';

export interface IAppProps {
}

export default function App ({Posts}: IPosts) {
  return (
    <div className='max-1000:hidden px-[40px] flex gap-[20px] justify-between py-5 pb-10  '>
    <div className='max-1300:hidden '>
      <AddPost />
    </div>
    <Feed Posts={Posts} />
    <div className=''>
      <Dialog />
    </div>
  </div>
  );
}
