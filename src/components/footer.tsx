import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { TbLocation } from "react-icons/tb";
import { Link } from 'react-scroll';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-[rgb(19,19,19)] md:h-auto text-white py-8 2xl:h-[30vh]'>
            <div className="gap-10 flex w-full flex-col md:flex-row justify-evenly px-10 lg:px-20 md:items-center 2xl:justify-between 2xl:px-40">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-center md:text-lg md:text-start 2xl:text-4xl">Quick Links</h3>
                    <ul className="space-y-2 text-sm 2xl:text-2xl">
                        <li><Link to="home" className="hover:underline hover:text-[#0c645b] pb-5">Home</Link></li>
                        <li><Link to="about" className="hover:underline hover:text-[#0c645b] pb-5">About</Link></li>
                        <li><Link to="projects" className="hover:underline hover:text-[#0c645b] pb-5">Projects</Link></li>
                        <li><Link to="contacts" className="hover:underline hover:text-[#0c645b] pb-5">Contact</Link></li>
                    </ul>
                </div>

                <div className=' flex flex-col justify-center 2xl:gap-5'>
                    <h3 className="text-xl font-semibold mb-4 text-center md:text-lg 2xl:text-4xl">Contact</h3>
                    <p className="mb-2 flex gap-2 items-center text-sm 2xl:text-2xl">
                        <TfiEmail size={20}/>
                        solangeihirwe@gmail.com
                        </p>
                    <p className="mb-2 flex gap-2 items-center text-sm 2xl:text-2xl">
                        <TbLocation size={20}/>
                        Based in Rwanda, Kigali
                        </p>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/solangeihirwe03" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-400 text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/solangeihirwe/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-gray-400 text-xl" />
                        </a>
                        <a href="https://x.com/IhirweSolange" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-gray-400 text-xl" />
                        </a>
                        <a href="https://www.instagram.com/__ihirwe___14/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram fontSize={24} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-center md:text-lg md:text-start 2xl:text-4xl">Stay Connected</h3>
                    <p className="text-sm mb-3 2xl:text-2xl">Subscribe to my newsletter for updates.</p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none 2xl:px-5 2xl:py-4 text-xl"
                        />
                        <button
                            type="submit"
                            className="bg-[#0c645b] px-4 py-2 rounded-r-md hover:bg-[#09544d] text-white 2xl:py-5"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="text-xs mt-6 2xl:text-2xl"> Built with React & Tailwind CSS</p>
                </div>
            </div>

            <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-700 pt-6">
                © Your Name {year}. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
