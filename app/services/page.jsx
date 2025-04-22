"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowDownRight} from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Full-Stack Website Development',
    description: "I craft custom, responsive websites from start to finish - building clean front-end interfaces and integrating powerful back-end functionality. Whether it's a marketing site, business platform, or a scalable web app, I use modern technologies to deliver high-performance, user-focused solutions that align with your goals.",
  },
  {
    num: '02',
    title: 'User Experience Design',
    description: "I prioritize user clarity and ease at every step of the journey. From intuitive layouts to mobile responsiveness, I design seamless experiences that keep your audience engaged and coming back. My focus is on usability, accessibility, and making your product feel effortless to use - without overcomplicating the design.",
  },
  {
    num: '03',
    title: 'Business-Focused Web Strategy',
    description: "Every project starts with understanding your business. I help align your website goals with your brand identity and user expectations. From competitor analysis to recommending the right tech stack or conversion strategies, I ensure your site is not just functional - but impactful and growth-oriented.",
  },
  {
    num: '04',
    title: 'Post-Launch Maintenance & Support',
    description: "Your website doesn't end at launch - and neither does my support. I provide ongoing maintenance, updates, and troubleshooting to keep your platform running smoothly. Whether it's performance tuning, bug fixes, or content updates, I ensure your site stays secure and future-proof.",
  }
]

const Services = () => {
  return (
    <section className='min-h-[80vh= flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {return(
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                <Link href={'/contact'} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl '/>
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              <p className='text-white/60'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
            
          )})}
        </motion.div>
      </div>
    </section>
  )
}

export default Services