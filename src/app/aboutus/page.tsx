"use client";
import React, { useState } from 'react'
import Md from "../../assets/md.png"
import Mdcurv from '../../assets/mdcurv.png'
import deepcurv from '../../assets/deepcurv.png'
import deep from "../../assets/deep.png"
import Button1 from '@/components/Button1'
import Footer from '@/components/Footer'

const Page = () => {
  const [mdclick, setMdCllick] = useState<boolean>(false);
  const [deepclick, setDeepCllick] = useState<boolean>(false);
  return (
    <> 
    <div className='flex justify-start mt-[10vw] px-[14.4vw]'>
      <div className="">
        <p className='text-[4.9vw] font-medium leading-[114px] '>Why we started</p>
        <article className='flex flex-col gap-4 mt-[2vw] text-[#313131]'>
        <p className="text-[1.8vw]  leading-[1.6em] font-normal">Born out of our frustration with the subpar services and lack of market <br />
          understanding offered by the dozens of agencies out there&#x2c; we set out to create <br />
          an entirely new approach - one that puts <span className='bg-primary rounded-full px-[.5vw]'> Your business growth at the Forefront&#46;</span></p>

        <p className="text-[1.8vw] leading-[1.6em] mt-[.3vw] ">With more than half a decade of collective experience navigating the <br />
        ever-evolving digital sphere&#x2c; our team of experts possess an unparalleled <br />
        understanding of the latest platforms&#x2c; strategies&#x2c; and industry trends&#46;</p>
        </article>
      </div>
    </div>
    {/* team */}
    <div id='team' className="flex justify-center mt-[8vw] px-[8vw]"> 
    <div className="">
      <h1 className='text-[4.9vw] mt-[1vw]'>Team</h1>
      <div className="flex mt-[1vw]">
        <div className="mt-16" >
          <span className="" onMouseEnter={()=>setMdCllick(true)} onMouseLeave={()=>setMdCllick(false)}>     
            <img  src={mdclick?Mdcurv.src:Md.src} alt='Md Fazel photo' className='transition duration-150 ease-out w-[100vw]'/>       
          </span>
          <div className="mt-[1.7vw]">
          <Button1 title={"Linkedln"} link='https://www.linkedin.com/in/md-fazal-mustafa-ba5265129/'/>
          </div>
        </div>
        <div className="ml-[8vw]">
          <h1 className='text-[3.3vw] leading-[119%]'>Md Fazal Mustafa</h1>
          <span className="">
          <p className='text-[1.4vw] leading-[1.6em] text-[#313131] mt-[1.8vw]' >My journey began in 2019 as a Software Developer intern at an ed-tech 
          company and later in a foodtech company&#46;  I learned first hand what the
          of growth strategies&#x2c; branding and marketing does to a tech business&#46; 
          The first one lost all its customer and is just surviving while the second 
          had to shut down even after generating some revenue&#46;</p>
          </span>
          <span className="">
          <p className='text-[1.4vw] leading-[1.6em] text-[#313131] mt-[.7em]' >Thus when I started up my startup Collegeshala in 2020&#x2c; I always kept
          growth an important focus&#x2c; even with a cruse web application we had 
          of growth strategies&#x2c; branding and marketing does to a tech business&#46;
          2000 paying cutomers and with our Version 1 we had scaled to 32000
          paying customer after which we got acquired by Lecturenotes&#46;</p>
          </span>
          <span className="">
          <p className='text-[1.4vw] leading-[1.6em] text-[#313131] mt-[.7em]'>At Lecturenotes also we did a lot of experimentation&#x2c; and executed
          many marketing plans and growth strategies and scale the company
          to 2&#46;4 Million students&#x2c; 45&#x2c;000 Colleges and 80&#x2c;000 Teachers&#46; We
          also had a B2B product that we scale to 45 Colleges in just 3 months&#46;</p>
          </span>
          <span className="">
          <p className='text-[1.4vw] leading-[1.6em] text-[#313131] mt-[.7em]'>Thus professionally I am a techie&#x2c; but I have learnt that building the
            product is not enough&#46;  You have to let the world know what you have
            built and scale it up thats where success lies&#46; Thats why now I help
            individuals&#x2c; startups&#x2c; businesses to grow and market themselves&#46;</p>
          </span>
        </div>
      </div>
        {/* for deep */}
        <div className="flex mt-[8vw] gap-16 ">
        <div className="mt-16 order-last" >
          <span className="" onMouseEnter={()=>setDeepCllick(true)} onMouseLeave={()=>setDeepCllick(false)}> 
          <img src={deepclick?deepcurv.src:deep.src} alt='deep photo' className=' w-[100vw]'/>
          </span>
          <div className="mt-[1.7vw]">
          <Button1 title={"Linkedln"} link='https://www.linkedin.com/in/deepchakraborty5/'/>
          </div>
        </div>
        <div className="text-[1.4vw] mr-[8vw]">
          <h1 className='text-[3.3vw] leading-[119%]'>Deep Chakraborty</h1>
          <span className="">
          <p className='text-[1.4vw] leading-[1.6em] text-[#313131] mt-[1.8vw]' >My Journey began in 2021 when I started working as an intern in social
          media management and then part of the official team for a fitness-tech
          startup&#46;  Handling a Team that was able to generate an impression count
          of over 100k with just 1&#46;5k Followers over Instagram&#46;</p>
          </span>
          <span className="">
          <p className='leading-[1.6em] text-[#313131] mt-[.7em]'>By 2022&#x2c; my focus shifted towards a complete freelance work for
          growth an important focus&#x2c; even with a cruse web application we had
          Businesses where I noticed founders where not being able to get a
          trustable agency who could give them all the requirements at one
          place in a way that gets them a better ROI&#46;</p>
          </span>
          <span className="">
          <p className='leading-[1.6em] text-[#313131] mt-[.7em]'>Also during my Freelance journey I found out about this huge disconnect
          between the demand of agencies who &#x22;do not outsource&#x22; i&#46;e&#46;&#x2c; wrapper
          agencies working with subpar talents to keep the maximum profits&#46;</p>
          </span>
          <span className="">
          <p className='leading-[1.6em] text-[#313131] mt-[.7em]'>Seeing this from quite some time I decided to start VitaminG&#x2c; an agency
          that any founder can trust&#46; We hire talent that is in-house and who genuinely
          genuinely knows what they are doing&#46;</p>
          </span>
          <span className="">
          <p className='leading-[1.6em] text-[#313131] mt-[.7em]'>A group of individuals focused on the growth of our clients by reducing your
          CAC&#x2c; increasing your ROI, and tapping into a whole new set of audiences
          o see the potential even the founders overlook&#46;</p>
          </span>
        </div>
      </div>
      {/* lets connect */}
      <div className='mt-[10vw]'>
        <h1 className='text-[4.9vw]'>Let&#x27;s Connect</h1>
        <p className='text-[1.6vw] text-[#313131] mt-8'>Thus&#x2c; from our past experiences, we set out to build Vitamin G&#46;</p>
        <p className='text-[1.6vw] text-[#313131] mb-[2vw]'>If you are looking to scale your business, then we are your best bet&#46;</p>
        <Button1 title={"Hop on a call"} link=''/>
      </div>
    </div>
    </div>
    <div className="mt-[10vw]">
      <Footer/>
    </div>
    </>
  )
}

export default Page
