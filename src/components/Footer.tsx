import React from "react";
import footermid from "../assets/footerMid.png";
import Button from "./Button";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center px-[4vw]">
        <div className="bg-black  rounded-[40px] px-[4vw] mb-[4vw] ">
          <div className="flex justify-center">
        <img src={footermid.src} alt="footer mid image" className="w-[49vw] relative -top-1 h-[80px]" />
        </div>
        <div className="grid grid-cols-12 mt-[2vw]">
          <div className="col-span-3">
            <h1 className="text-white text-[2.2vw] mb-6">Ready to Pick our brains ?</h1>
            <Button title="Book A Call"/>
          </div>
          <div className="col-span-6 flex justify-between px-[3vw]">
            <div className="flex justify-around ">
              <ul className="text-[1.2vw] text-white flex flex-col gap-4">
                <li className="text-[#929292]">Learn</li>
                <li className="">About</li>
                <li className="">FAQs</li>
                <li className="">Testimonials</li>
                <li className="">Process</li>
              </ul>
              <ul className="text-[1.2vw] text-white ml-10  flex flex-col gap-4">
                <li className="text-[#929292]">Explore</li>
                <li className="">Home</li>
                <li className="">Services</li>
              </ul>
            </div>
            <div className="flex gap-6">
              <div className="bg-primary p-4 w-fit h-fit rounded-full">
              <BsLinkedin className="text-[1.6vw]"/>
              </div>
              <div className="bg-primary p-4 w-fit h-fit rounded-full">
              <BsTwitterX className="text-[1.6vw]"/>
              </div>
            </div>
          </div>
          <div className="col-span-3"></div>     
        </div>
        <div className="text-white flex justify-center text-[3.8vw] mt-[3vw] mb-[1vw]">
          <h1>A Growth Partner that Understands your Vision</h1>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
