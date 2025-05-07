"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'RETAIL AUTO (Personal Project)',
    description: [
      'Developed a React web application enabling user account creation, secure login, and browsing of available car listings.',
      'Implemented user registration and authentication to allow users to manage personalized sessions and profiles.',
      'Integrated a third-party vehicle API to fetch up-to date car listings, enable dynamic search and filtering of vehicles',
      'Built wishlist functionality allowing users to add or remove vehicles from a favourites list, managing application state to persist user selections.',
      'Applied responsive design principles and modern HTML/CSS practices to ensure the interface is functional and visually appealing on all devices.'
    ],
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}, {name: 'ReactJS'}],
    image: '/RetailAuto.webp',
    live: 'https://retailauto-239a0.web.app/',
    github: 'https://github.com/sarahib37/'
  },
  {
    num: '02',
    category: 'frontend',
    title: 'CELESTIA REPLICATE (Personal Project)',
    description: [
      "Recreated 10 key pages from Celestia's official website with pixel-perfect accuracy using React, faithfully replicating the original design and layout.",
      "Ensured full responsiveness and cross-browser compatibility by adapting layouts for various screen sies using modern CSS techniques.",
      "Incorporated interactive elements and navigation features to mirror the original site's user experience, ensuring smooth transitions and intuitive usability."
    ],
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}, {name: 'React'}],
    image: '/Celestia.webp',
    live: 'https://celestia-ags2.onrender.com/',
    github: 'https://github.com/sarahib37/celestia'
  },
  {
    num: '03',  
    category: 'fullstack',
    title: 'HCLERALD (Personal Project)',
    description: [
      "Developed a full-stack e-commerce platform enabling users to register accounts and generate custom product quotes from predefined categories.",
      "Implemented front-end components using React and Tailwind CSS to create an intuitive interface for browsing products and submitting quote requests.",
      "Created a Node.js/Express back-end with a RESTful API to handle quote submissions, process pricing logic, and manage user data securely.",
      "Integrated an admin dashboard for reviewing and approving quotes, facilitating a workflow that returns finalized pricing to customers."
    ],
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}, {name: 'ReactJS'}, {name: 'ExpressJS'}, {name: 'NodeJS'}, {name: 'Tailwind.css'}],
    image: '/HCLERALD.webp',
    live: 'https://hclerald-flnf.vercel.app/',
    github: 'https://github.com/sarahib37/HCLERALD'
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex 
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] h-full flex flex-col py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white text-[28px] font-semibold py-5">{project.title}</p>
                <ul>
                  {project.description.map((desc, index) => {
                    return <li key={index} className="text-white/60 list-disc py-3">{desc}</li>
                  })}
                </ul>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {return(
                    <li key={index} className="text-xs md:text-sm text-accent max-w-full break-words">
                      {item.name} {index !== project.stack.length -1 && ","}
                    </li>
                  )})}
                </ul>
              </div>
              

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full flex self-center h-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[full] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {return(
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[full] relative group flex justify-center items-center bg-transparent">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} width={800} height={8000} className="object-cover h-full rounded-lg" alt=""/>
                    </div>
                  </div>
                </SwiperSlide>
              )})}

              <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-black hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-[50%] transition-all'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work