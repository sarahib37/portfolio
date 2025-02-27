import Link from "next/link"
import {FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/sarahib37'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/igwe-benson-sarah-8285b0261'},
    {icon: <FaTwitter/>, path: 'https://x.com/SarahIgwe660339'},    
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return(
          <Link key={index} href={social.path} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={iconStyles}>{social.icon}</a>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials