import { FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa'
import logo from '../assets/logo.webp'
import { FaXTwitter } from 'react-icons/fa6'
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 ">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home"></a>
                <img src={logo} alt="Logo" className='mx-2 ' width={50} height={33} />
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com" target='_blank' rel='"noopener noreferrer' aria-label='"Linkedin'>
                    <FaLinkedin />
                </a>
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://www.github.com" target='_blank' rel='"noopener noreferrer' aria-label='"Github'>
                    <FaGithub />
                </a>
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com" target='_blank' rel='"noopener noreferrer' aria-label='"Linkedin'>
                    <FaInstagram />
                </a>
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com" target='_blank' rel='"noopener noreferrer' aria-label='"Linkedin'>
                    <FaXTwitter />
                </a>
            </div>
        </nav>
    )
}
