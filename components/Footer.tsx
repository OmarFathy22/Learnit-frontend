import * as React from "react";
import Logo from "./svgs/logo";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="bg-[--bg-secondary] min-h-[120px]">
      <div className="  w-full flex justify-around  items-start p-7">
        <div>
          <h1 className="gradient-text text-[20px]">Contact Us</h1>
          <h1>
            <span>Email: </span>{" "}
            <span className="text-[--links]">contact@learnit.com</span>
          </h1>
          <h1>
            <span>Phone: </span>{" "}
            <span className="text-[--links]">+1 (123) 456-7890</span>
          </h1>
        </div>
        <div>
          <h1 className="gradient-text text-[20px]">Follow Us</h1>
          <h1 className="text-[--links]">Facebook</h1>
          <h1 className="text-[--links]">Instagram</h1>
          <h1 className="text-[--links]">Tictok</h1>
        </div>
        <div>
          <h1 className="gradient-text text-[20px]">Quick Links</h1>
          <h1 className="text-[--links]">Home</h1>
          <h1 className="text-[--links]">Community</h1>
          <h1 className="text-[--links]">Ranking</h1>
          <h1 className="text-[--links]">Profile</h1>
        </div>
        <div>
          <h1 className="gradient-text text-[20px]">
            Subscribe to our newsletter
          </h1>
          <h1 className="text-[13px]">
            Stay updated with our latest courses and promotions.
          </h1>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[220px] outline-none  rounded-md bg-[--bg-tertiary] p-2 mr-2 "
            />
            <button className="gradient-bg p-2 px-5 font-bold rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 py-10 gradient-t-border">
        <h1>
          <Logo />
        </h1>
        <h1>© 2024 LearnIt. All Rights Reserved.</h1>
      </div>
    </div>
  );
}
