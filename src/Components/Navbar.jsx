import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import logo from '../assets/logo1.png'
// import EMU from '../assets/Emu.png'
import re from '../public/RE.png'
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6  ">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home"></a>
                <img src={re} alt="Logo" className=' lg:w-32 w-14' width={50} height={33} />
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/rakibul-islam-emon?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BikJMRTcwQwCAjlFfjoe08A%3D%3D" target='_blank' rel='"noopener noreferrer' aria-label='"Linkedin'>
                    <FaLinkedin />
                </a>
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://github.com/Rakibulislam-emon" target='_blank' rel='"noopener noreferrer' aria-label='"Github'>
                    <FaGithub />
                </a>
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://m.me/rakib.hussein.543792?hash=AbZ4OvqShpKCebxh&source=qr_link_share" target='_blank' rel='"noopener noreferrer' aria-label='facebook'>
                    <FaFacebook />
                </a>
            </div>
            <div className='m-8 flex flex-col justify-center gap-4 text-2xl'>
                <a href="https://www.instagram.com/nahiyan_emu/profilecard/?igsh=MXRteWkzYXlwa2Q0cA==" target='_blank' rel='"noopener noreferrer' aria-label='"instagram'>
                    <FaInstagram />
                </a>
            </div>

        </nav>
    )
}
