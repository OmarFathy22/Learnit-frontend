import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
    <path d="M0 0.879891V23.0971H12.8684L9.01888 19.2476H3.73953V3.73953L0 0V0.879891Z" fill="url(#paint0_linear_381_689)"/>
    <path d="M4.30145 0.353027L8.26096 4.31253H13.7603V19.8206L17.9398 24.0001V4.31253H22.5592L18.5997 0.353027H4.30145Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_381_689" x1="0" y1="11.5486" x2="12.8684" y2="11.5486" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F4442C"/>
        <stop offset="1" stop-color="#F69C08"/>
      </linearGradient>
    </defs>
  </svg>
  );
}
