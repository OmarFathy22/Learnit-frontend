import * as React from 'react';

export interface IAppProps {
  url: string;
}

export default function App ({url}: IAppProps) {
  return (
    <div className=''>
      <iframe className='h-[calc(100vh-80px)] max-1000:h-[50vh] w-full' src={url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}
