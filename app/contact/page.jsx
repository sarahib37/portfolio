"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import emailjs from "@emailjs/browser"


const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: '(+234) 906 499 9489'
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: 'sarahigwe156@gmail.com'
  },
]

const Contact = () => {

  const [formData, setFormData] = useState({firstname: '', lastname: '', email: '', phone: '', service: '', message: ''})
  const [loading, setLoading] = useState(false)

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  function handleServiceChange(value){
    setFormData({...formData, service: value })
  }

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    emailjs
    .send(
      "service_yreaupm",
      "template_5vd6jhc",
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      "GeId1lpSby7eQJSxN"
    )
    .then(
      (result) => {
        alert("Message sent successfully!")
        setLoading(false)
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
      },
      (error) => {
        console.error("Email sending error:", error.text)
        alert("Something went wrong. Please try again later.")
      }
    )
  }

  return (
    <motion.section
      initial = {{opacity: 0}}
      animate = {{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Whether you have a project in mind, need help with website development, or simply want to connect, feel free to drop a message. I'm always open to new opportunities and collaborations!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='text' name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Firstname' />
                <Input type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Lastname' />
                <Input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
                <Input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone number' />
              </div>
              <Select onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='Web Development'>Web Development</SelectItem>
                    <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                    <SelectItem value='Fullstack Web Development'>Fullstack Web Development</SelectItem>
                    <SelectItem value='Landing Page'>Landing Page</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className='h-[200px]' placeholder='Type your message here.' name='message' value={formData.message} onChange={handleChange}/>
              <Button size='md' className='max-w-40'>{!loading ? 'Send message' : 'Loading...'}</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {return(
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )})}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact