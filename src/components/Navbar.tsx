import Image from 'next/image'
import React from 'react'
import Logo from "../assets/logo1.svg"
import Button from './Button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="relative flex justify-center ">
    <div className=' flex justify-between items-center w-[80vw] h-[5.3rem] fixed rounded-full bg-white top-0 py-[1.125rem] px-[5vw]  z-50'>
      <Image src={Logo.src} width={100} height={100} alt='vitaminG logo' className='w-[10.335rem]'/>
      <ul className="flex text-[1vw] text-[#010202] gap-[2.5vw]">
        <Link href={'/aboutus'}><li className="leading-6">About Us</li></Link>
        <li className="leading-6">Our Services</li>
        <li className="leading-6">Our Case Studies</li>
        <li className="leading-6">Blogs</li>
      </ul>
        <Button title={"Book A Call"}/>
    </div>
    </nav>
  )
}

export default Navbar
