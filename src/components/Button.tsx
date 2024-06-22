"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './button.scss'

const Button = ({title}:{title:string}) => {
  return (
    <div id='main-button' className="flex items-center w-fit">
    <button className='bg-primary font-medium rounded-full text-[1vw] px-[1.5vw] py-[10px] text-[#010202]'>{title}</button>
    <button id='second-button' className='bg-primary rounded-full p-2 w-[2.5vw] h-[2.5vw] flex justify-center items-center relative -left-2 -rotate-[16deg]  duration-300'><FaArrowRight className='text-black text-[1vw]'/></button>
  </div>
  )
}

export default Button
