import * as React from 'react';
import Header from './Header'
import Footer from './Footer'
export interface IAppProps {
  children: React.ReactNode;
}

export default function App ({children}: IAppProps) {
  return (
    <div>
      <Header/>

      <div className='min-h-[calc(100vh-200px)]'>
        {children}
      </div>

      <Footer/>
    </div>
  );
}
