"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiChakraui, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"

// const about = {
//   title: 'About me',
//   description: 'A brief introduction of who I am.',
//   info: [
//     {
//       fieldName: 'Name',
//       fieldValue: 'Sarah Igwe'
//     },
//     {
//       fieldName: 'Experience',
//       fieldValue: '2+ Years'
//     },
//     {
//       fieldName: 'Nationality',
//       fieldValue: 'Nigeria'
//     },
//     {
//       fieldName: 'Soft Skills',
//       fieldValue: 'Communication skills, Teamwork and Collaboration, Problem-Soving, Adaptability, Creativity and Innovation, Attention to Detail, and Stress Management'
//     },
//     {
//       fieldName: 'Hobbies',
//       fieldValue: 'Writing, Exercising, Volunteering, Reading, and Chess'
//     },
//     {
//       fieldName: 'Language(s)',
//       fieldValue: 'English'
//     },
//   ]
// }

// The experience section has some personal projects, but same experience boilerplate
const experience = {
  icon: '',
  title: 'My experience',
  description: 'Highlighting my professional journey, this section showcases my roles, responsibilities, and accomplishments in the field, demostrating my growth and expertise.',
  items: [
    {
      duration: '2025',
      company: 'HCLERALD',
      position: 'Fullstack Developer'
    },
    {
      duration: '2024',
      company: 'Celestia Replicate',
      position: 'Frontend Developer'
    },
    {
      duration: '2024',
      company: 'Retail Auto',
      position: 'Frontend Developer'
    }
  ]
}

const education = {
  icon: '',
  title: "My education",
  description: 'A summary of my academic background, including degrees, certifications, and relevant courses that have contributed to my skills and knowledge in the industry.',
  items: [
    {
      institution: 'Niger Delta University',
      course: 'B.Sc in Computer Science',
      duration: '2020 - 2025'
    },
    {
      institution: 'Scrimba',
      course: 'The Frontend Developer Career Path',
      duration: '2023 - 2024'
    },
    {
      institution: 'Udemy',
      course: 'React - The Complete Guide 2024',
      duration: '2024'
    },
    {
      institution: 'YouTube',
      course: 'Express JS Full Course',
      duration: '2025'
    },
  ]
}

const skills = {
  title: "My skills",
  description: "A comprehensive list of the technical skills I've acquired, showcasing my proficiency in the tools and technologies relevant to my work.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML 5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS 3"
    },
    {
      icon: <FaJs/>,
      name: "Javascript"
    },
    {
      icon: <FaReact/>,
      name: "React.js"
    },
    // {
    //   icon: <SiNextdotjs/>,
    //   name: "Next.js"
    // },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css"
    },
    // {
    //   icon: <SiChakraui/>,
    //   name: "Chakra UI"
    // },
    // {
    //   icon: <SiTypescript/>,
    //   name: "Typescript"
    // },
    {
      icon: <SiExpress/>,
      name: "Express.js"
    },
    {
      icon: <FaNodeJs/>,
      name: "Node.js"
    },
    {
      icon: <FaFigma/>,
      name: "Figma"
    },
  ]
}


const Resume = () => {
  return (
      <motion.div
        initial={{opacity: 0}}  
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
              <TabsTrigger value='about'>About Me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value='experience' className='w-full'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className='h-[400px]'>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex  flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value='education' className='w-full'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className='h-[400px]'>
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex  flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">{item.course}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        })}
                      </ul>
                    </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value='skills' className='w-full h-full'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-wp[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">    {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>  
                      </TooltipProvider>  
                    </li>
                  })}
                </ul>
              </TabsContent>

              <TabsContent value='about' className='w-full text-center xl:text-left'>
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">About me</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">A brief introduction of who I am.</p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    I am Sarah Igwe-Benson, a versatile Full Stack Website Developer and Media Production Specialist with a passion for creating seamless digital experiences. With expertise in front-end technologies like React and TypeScript, combined with hands-on experience in live production systems using OBS Studio and Atem Mini Pro, I thrive at the intersection of tech and media. Whether building dynamic web applicatons or orchestrating live broadcasts, I bring creativity, technical knowledge, and collaborative energy to every project. Let's create something extraordinary together.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
  );
};
export default Resume