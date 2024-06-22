import React from 'react'
import Button1 from './Button1'
import phonePay from '../assets/partnerLogo/phonepay.png'
import togetherai from '../assets/partnerLogo/togetherai.png'
import deloitte from '../assets/partnerLogo/deloitte.png'
import honeywell from '../assets/partnerLogo/Honeywell.png'
import hexstar from '../assets/partnerLogo/hexstar.png'
import retse from '../assets/partnerLogo/tersejob.png'
import cognizant from '../assets/partnerLogo/cognizant.png'
import proton from '../assets/partnerLogo/Proton Labs.png'
import ps from '../assets/partnerLogo/ps.png'
import LogoFrame from "../assets/partnerLogo/logo frame.png"
import "./home.scss"
import Button from './Button'
const PartnerLogo = [
  {
    logo:phonePay.src,
    alt:"phonepay"
  },
  {
    logo:togetherai.src,
    alt:"togethet ai"
  },  
  {
    logo:deloitte.src,
    alt:"deloitte"
  },  
  {
    logo:honeywell.src,
    alt:"honeywell"
  },  
  {
    logo:hexstar.src,
    alt:'hexstar'
  },  
  {
    logo:retse.src,
    alt:'retse'
  },  
  {
    logo:cognizant.src,
    alt:"cognizant"
  },  
  {
    logo:proton.src,
    alt:'proton'
  },  
  {
    logo:ps.src,
    alt:'physics walla'
  }, 
  
]

const Services = [
  {
    title:"SEO",
    content:"Helping you get found by search engines. and your relevant audience on the internet."
  },
  {
    title:"Performance Marketing",
    content:"We get you the best hot leads at the lowest cost for your products."
  },
  {
    title:"Influencer Marketing",
    content:"Content Creators that are relevant to your niche and genuinely stand by your brands."
  },
  {
    title:"Email Marketing",
    content:"Promise of great conversion and the best open rate for anyone else."
  },
  {
    title:"Personal Branding",
    content:"As a business owner you are the brand and we take you to the next level in 30 to 60 days."
  },
  {
    title:"SMM",
    content:"All about taking care of your business's brand and social outlook by following the latest trends to get you the maximum visibility."
  },
  {
    title:"Product Design",
    content:"We have already designed world-class products used by millions of people. We aim to do the same for you."
  },
  {
    title:"SDR",
    content:"Highly experienced Sales Development Representative with a track record of high conversion of Clients costing less than your in- house team."
  },
  {
    title:"PLG",
    content:"If you are a SaaS, then product-led growth is for you. We have proven PLG strategies with us for you."
  },
]

const Services1 = [
  {
    title:"GTM Strategy",
    content:"We help businesses and startups build their Go-To-Market Strategy for market positioning, develop Marketing Plans, etc."
  },
  {
    title:"Consultation",
    content:"Already executing Marketing in-house but don't know why it's not working, we can help you in a Consultant role."
  },
]

const caseStudies = [
  {
    title:"Discovery Call",
    content:"Prepare to be amazed as we dissect your business, uncover hidden opportunities, and co-create a custom proposal that will redefine your growth trajectory."
  },
  {
    title:"Custom Proposal & Agreement",
    content:"Get ready to be wowed by a tailored plan that seamlessly aligns with your vision, complete with bundled services and transparent terms - no surprises, just results."
  },
  {
    title:"Onboarding Kickoff Meeting",
    content:"Welcome to the VIP club! Gear up for a VIP experience, complete with a branded welcome kit and a crystal- clear roadmap to launch your journey with confidence."
  },
  {
    title:"Strategic Planning & Setup",
    content:"Buckle up, because we're about to conduct a deep-dive audit, develop a comprehensive marketing strategy, and set up the tools and integrations that will be the foundation of your success."
  },
  {
    title:"Review & Feedback",
    content:"Transparency is our middle name. We'll regularly assess our progress, gather your invaluable insights, and make nimble adjustments to stay ahead of the curve."
  },
]
const Home = () => {
  return (
    <>
    <div className="mt-[10vw] px-[14.4vw] ">
        <div className="">
            <h1 className='font-medium text-[3vw] leading-tight'>FullStack growth studio for ambitious <br />
            companies we are the growth partner in <br />
            your journey to level up !
            </h1>
            <p className='text-[1.4vw] mt-[1vw]'>Focusing to get <span className='bg-primary rounded-full px-[.3vw]'>Relavance driven ROI</span></p>
        </div>
    </div>
    {/* video */}
    <div className='px-[7.3vw] mt-10'>
      <div className=" h-[696px] bg-gray-300 rounded-t-[40px]"></div>
    </div>
    {/* what do we do */}
    <div className="mt-10 px-[7.3vw]">
      <div className="flex flex-col">
        <div className="flex justify-between">
        <span className='flex justify-center items-start'>
          <span className="flex justify-center items-center">
          <div className='bg-primary w-3 h-3 rounded-full'></div>
          <p className='text-[1.4vw] ml-4'>What do we do ?</p>
          </span>
          <h1 className='font-medium text-[3vw] ml-[2.3vw]'>We help you Redifine your</h1>
        </span>
        <Button1 title='Hop on a Call' link=''/>
        </div>
      <span className="font-medium text-[3vw] ml-[4vw] -mt-[.9vw]">approach to Customer Acquisition</span>
      </div>
    </div>
    {/* logo */}
    <div className="px-[5.3vw] mt-[2vw]">
      {/* <div className="w-[1420px] flex justify-evenly flex-wrap">
        {PartnerLogo.map(({logo,alt},index)=>(
          <Image src={logo} key={index} alt={alt} height={63} width={200} className='aspect-auto'/>
        ))}
      </div> */}
      <img src={LogoFrame.src} alt="logo frame" className=''/>
    </div>
    {/* services */}
    <div className="px-[7.3vw]">
        <span className="flex items-center -mb-5">
        <div className='bg-primary w-3 h-3 rounded-full'></div>
        <p className='text-[1.4vw] ml-4'>Services</p>
        <h1 className='font-medium text-[3vw] ml-[2.3vw]'>We handle just</h1>
        </span>
          <span className="font-medium text-[3vw] ml-[4vw]  flex">about everything</span>
    </div>
    {/* all services */}
    <div className='flex justify-center mt-[7vw] px-[7.3vw]'>
      <div className="grid grid-cols-3 gap-x-[1.5vw] gap-y-[.5vw]">
        {Services.map(({title,content},index)=>(
          <div key={index} id='service' className=" bg-[#FBFFF4] rounded-xl pt-[1.8vw] pl-[2.5vw] pr-[2.5vw] pb-[3vw] transition duration-300 ease-in">
            <h1 className='font-medium text-[1.3vw]'>{title}</h1>
            <p className='text-[1vw] mt-[.6vw]'>{content}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-center mt-[.5vw] px-[7.3vw]'>
      <div className="grid grid-cols-2 gap-x-[1.5vw] gap-y-[.5vw]">
        {Services1.map(({title,content},index)=>(
          <div key={index} id='service' className=" bg-[#FBFFF4] rounded-xl pt-[1.8vw] pl-[2.5vw] pr-[1.5vw] pb-[3vw] transition duration-300 ease-in">
            <h1 className='font-medium text-[1.3vw]'>{title}</h1>
            <p className='text-[1vw] mt-[.6vw]'>{content}</p>
          </div>
        ))}
      </div>
    </div>
    {/* case studies */}
    <div className='bg-[#010202] rounded-t-[3vw] mt-[6vw] pt-[6vw]'>
      <div className="px-[7.3vw] ">
      <span className="flex items-center">
        <div className='bg-primary w-3 h-3 rounded-full'></div>
        <p className='text-[1.4vw] ml-4 text-white'>Process</p>
        <h1 className='font-medium text-[2.8vw] ml-[2.3vw] text-white'>Elevating your growth: The</h1>
        </span>
          <span className="-mt-[.6vw] text-[2.8vw] ml-[1.4vw] flex text-white">exclusive VitaminG onboarding</span>
          <span className="-mt-[.6vw] text-[2.8vw] ml-[1.4vw] flex text-white"> experience <span className='ml-[2.3vw] flex justify-center items-center'><Button title='Book A Call'/></span></span>
      </div>

      <div className="px-[7.3vw] mt-[5vw] flex flex-col gap-[2vw]">
      {caseStudies.map(({title,content},index)=>(   
          <div id='anidiv' className=" flex justify-between rounded-lg h-[10.1vw] text-white py-[1.6vw] px-[2.8vw] transition duration-[600ms]">
          <div className="heading w-full">
            <h1 className='text-[3vw]  whitespace-nowrap'>{title}</h1>
            <p className='text-primary text-[1.5vw]'>Step {index+1}</p>
          </div>
          <div className="w-full flex  items-center">
            <p className='text-[1.3vw] text-black'>
              {content}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home
