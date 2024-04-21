import * as React from 'react';

export interface IAppProps {
  url: string;
}

export default function App ({url}: IAppProps) {
  return (
    <div className='w-full min-h-[80%] flex-1'>
      <iframe className='w-full h-full flex-1' src={url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}
