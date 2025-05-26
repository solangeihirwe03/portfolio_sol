import { useState } from "react"
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandPinterest } from 'react-icons/tb';
import { SlSocialTwitter } from "react-icons/sl";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Menubar from "../ui/menubar";
import { Link } from "react-scroll";



export const SocialMdIcn = () => {
    return (
        <div className="flex gap-2 text-gray-300 py-6 absolute right-20 md:relative md:right-2">
            <a href="https://www.instagram.com/__ihirwe___14/" target="_blank">
                <FaInstagram fontSize={24} />
            </a>
            <a href="https://github.com/solangeihirwe03" about="_blank">
                <FaGithub fontSize={24} />
            </a>
            <a href="https://x.com/IhirweSolange" target="_blank">
                <SlSocialTwitter fontSize={24} />
            </a>
            <a href="https://www.pinterest.com/ihirwesolange/" target="_blank">
                <TbBrandPinterest fontSize={24} />
            </a>
            <a href="https://www.linkedin.com/in/solangeihirwe/" target="_blank">
                <FaLinkedinIn fontSize={24} />
            </a>
        </div>
    )
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="flex items-center justify-between px-5 md:px-10 py-2 relative lg:px-20">
            <Link
                to="home"
                smooth={true}
                duration={500}
            >
                <img
                    src="logo.jpg"
                    alt="logo"
                    className="w-12 h-12 rounded-full"
                />
            </Link>
            <nav className="md:flex text-lg hidden">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
                >
                    About
                </Link>
                <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
                >
                    Services
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
                >
                    Projects
                </Link>
                <Link
                    to="contacts"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
                >
                    Contact
                </Link>
            </nav>
            <button
                onClick={toogleMenu}
                className="block md:hidden"
            >
                {isMenuOpen ? <IoCloseOutline size={25} /> : <CiMenuBurger size={25} />}
            </button>
            {isMenuOpen && (
                <Menubar
                    isMenuOpen={isMenuOpen}
                    onClose={toogleMenu}
                />
            )}
        </div>
    )
}
