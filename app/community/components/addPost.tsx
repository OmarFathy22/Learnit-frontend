import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div>
      <h1>Add a Post</h1>
      <div className='bg-[--bg-secondary] p-4'>
        <h1>Post Type</h1>
        <div className='flex items-center py-1 px-2 gap-2'>
          <h1>Text</h1>
          <div className='rounded-full p-3  border'>
            <div className='gradient-bg rounded-full'/>
          </div>
        </div>
        <div>
          <h1>Poll</h1>
          <h1>Poll</h1>
        </div>

      </div>
    </div>
  );
}
