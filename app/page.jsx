import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="flex flex-col gap-9 text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Website Developer</span>
            <h1 className="h1">Hello I'm <br/> <span className="text-accent">Igwe-Benson Sarah</span></h1>
            <p className="max-w-[100%] xl:max-w-[90%] mb-9 text-white">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            <Stats className='xl:hidden'/>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div 
                className="flex xl:block flex-col align-center justify-center md:flex-row gap-7"
              >
                <a href="/SarahIgwe.pdf" download='Resume'>
                  <Button variant='outline' size='lg' className='uppercase flex items-center gap-2 mx-auto'>
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                </a>
                <Link href='/work' className="xl:hidden">
                  <Button variant='outline' size='lg' className='uppercase flex items-center gap-2 hover:gap-5'>
                    <span>View my works</span>
                    <ArrowRight className="text-xl"/>
                  </Button>
                </Link>
              </div>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-12 xl:gap-6" iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats className='hidden xl:block'/>
    </section>
  )
}

export default Home