"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './button.scss'
import Link from 'next/link';

const Button1 = ({title,link}:{title:string,link:string}) => {
  return (
    <Link href={link} target='_blank'>
    <div id='main-button1' className="flex items-center w-fit">
    <button className='bg-primary flex justify-center items-center text-center rounded-full text-[1.3vw] px-[3.3vw] font-medium py-[13px] text-[#010202]'>{title}</button>
    <button id='second-button1' className='bg-primary rounded-full p-2 w-[3.3vw] h-[3.3vw] flex justify-center items-center relative -left-2 -rotate-[16deg]  duration-300'><FaArrowRight className='text-[1.6vw]'/></button>
  </div>
  </Link>
  )
}

export default Button1
