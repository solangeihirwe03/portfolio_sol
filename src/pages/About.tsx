import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { CiEdit } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { IoLayersOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { SocialMdIcn } from "../components/Header";

export const About = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            const options = {
                strings: ["Designer", "Developer."],
                typeSpeed: 150,
                backSpeed: 80,
                loop: true,
            }

            const typed = new Typed(typedElement.current, options)

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <Element name="about" className="w-full px-4 lg:px-20" id="about">
            <div className="font-poppins py-8 lg:py-4 2xl:py-32">
                <h1 className="uppercase text-xl font-semibold pb-4 text-[#0c645b] md:pb-3 2xl:text-6xl md:text-center">About me</h1>
                <blockquote
                    className="italic text-[#7f8c8d] text-sm text-center pb-4 lg:text-md 2xl:text-2xl"
                >
                    "Great software is built with empathy, code, and curiosity."
                </blockquote>
                <div className="">
                    <div className="">
                        <p className="text-xl md:text-3xl text-[#52525b] pb-6 2xl:text-5xl">Creative <span className="font-medium text-[#0c645b]" ref={typedElement}></span></p>
                        <p className="text-sm leading-relaxed md:text-[15px] lg:text-[17px] xl:text-xl pb-6 lg:pb-10 2xl:text-4xl 2xl:leading-relaxed">
                            Full-Stack Developer with passion for building innovative web applications. Willing to leverage my current skills and
                            continuously learn new technologies to excel in the field. Possess strong work ethic and the ability to thrive in fast-paced
                            environments.uppercase text-xl font-semibold pb-4 text-[#0c645b] md:pb-2 2xl:text-6xl md:text-center
                        </p>
                        <SocialMdIcn />
                        <div className="flex gap-2 font-openSans font-bold text-[12px] mb-8 justify-center">
                            <Link
                                to="contacts"
                                className="bg-[#0c645b] text-white border-[1px] uppercase px-4 py-2 w-40 text-center h-8"
                            >
                                Hire me
                            </Link>
                            <a
                                href="/sol_cv.pdf"
                                download="CV.pdf"
                                className="text-[#0c645b] border-[#0c645b] border-[1px] uppercase text-center px-4 py-2 h-8 w-40 "
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-6 flex-col md:flex-row justify-center w-full md:text-md 2xl:text-4xl">
                        <div className="bg-[#ecf0f1] p-10 rounded-[10px] w-full md:w-[30vw] transition-transform duration-200 ease-in-out shadow-md leading-relaxed">
                            <h3 className="text-center pb-3 uppercase  font-semibold">💡 Problem Solver</h3>
                            <p>I love breaking down complex challenges and turning them into efficient solutions.</p>
                        </div>
                        <div className="bg-[#ecf0f1] p-10 rounded-[10px] w-full md:w-[30vw] transition-transform duration-200 ease-in-out shadow-md leading-relaxed">
                            <h3 className="text-center pb-3 uppercase font-semibold">🌐 Tech Enthusiast</h3>
                            <p>I stay up-to-date with the latest in web development and enjoy experimenting with tools.</p>
                        </div>
                        <div className="bg-[#ecf0f1] p-10 rounded-[10px] w-full md:w-[30vw] transition-transform duration-200 ease-in-out shadow-md leading-relaxed">
                            <h3 className="text-center pb-3 uppercase font-semibold">🤝 Team Player</h3>
                            <p>I thrive in collaborative environments and believe great things are built together.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#121212] h-auto 2xl:h-[45vh] mt-12 px-4 xl:px-20 text-white flex flex-col md:flex-wrap lg:flex-nowrap lg:flex-row py-6 gap-10 font-openSans w-full">
                <div className="block md:flex gap-2 md:justify-between w-full lg:w-[40vw]">
                    <div className="w-full lg:w-[40vw] xl:w-[30vw]">
                        <h1 className="text-[25px]">
                            <CiEdit size={35} color="#0c645b" />
                            Education
                            <div className="w-32 bg-gray-500 h-0.5 mt-2 mb-6">
                                <div className="w-16 bg-[#0c645b] h-0.5"></div>
                            </div>
                        </h1>
                        <ul className="text-sm leading-relaxed">
                            <li className="mb-4">
                                <h3>University of Rwanda</h3><br />
                                <p className="font-normal text-[#cfcfcf]"> BSc (Hons) in Information Systems (2022 - Present)</p>
                            </li>
                            <li>
                                <h3>G.S. St Aloys Rwamagana</h3><br />
                                <p className="font-normal text-[#cfcfcf]">A2 Physics-Chemistry-Mathematics (2018 - 2021)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[40vw] xl:w-[30vw]">
                        <h1 className="text-[25px]">
                            <TfiBag size={35} color="#0c645b" />
                            Experience
                            <div className="w-32 bg-gray-500 h-0.5 mt-2 mb-6">
                                <div className="w-16 bg-[#0c645b] h-0.5"></div>
                            </div>
                        </h1>
                        <ul className="text-sm font-openSans">
                            <li className="mb-4">
                                <h3 className="font-semibold pb-2">MVend Ltd</h3>
                                <p className="font-normal text-[#cfcfcf]">Technical Support Engineer (Jan 2025 - Present)</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="font-semibold pb-2">EnerPower Tech Solutions Ltd</h3>
                                <p className="font-normal text-[#cfcfcf]">Front-end Developer Intern (Sept - Dec 2024)</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="font-semibold pb-2">Andela Technical Leadership</h3>
                                <p className="font-normal text-[#cfcfcf]">Full Stack Developer Trainee (Feb - Aug 2024)</p>
                            </li>
                            <li>
                                <h3 className="font-semibold pb-2">SheCanCode Bootcamp</h3>
                                <p className="font-normal text-[#cfcfcf]">Frontend Developer Trainee (Feb - May 2024)</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-[40vw] xl:w-[30vw]">
                    <h1 className="text-[25px]">
                        <IoLayersOutline size={35} color="#0c645b" />
                        Skills
                        <div className="w-32 bg-gray-500 h-0.5 mt-2 mb-6">
                            <div className="w-16 bg-[#0c645b] h-0.5"></div>
                        </div>
                    </h1>
                    <div className="flex flex-col gap-12 text-[10px] lg:text-[10px] md:text-[13px] font-bold lg:px-3 lg:gap-8">
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>React JS</p>
                                <p>85%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 md:h-2 bg-[#fff] lg:h-1">
                                <div className="w-[85%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>HTML/CSS</p>
                                <p>90%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 bg-[#fff] md:h-2 lg:h-1">
                                <div className="w-[90%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>Node JS</p>
                                <p>80%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 bg-[#fff] md:h-2 lg:h-1">
                                <div className="w-[80%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>Tailwind CSS</p>
                                <p>85%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 bg-[#fff] md:h-2 lg:h-1">
                                <div className="w-[85%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[##fff]">
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 bg-[#fff] md:h-2 lg:h-1">
                                <div className="w-[80%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>TypeScript</p>
                                <p>80%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 bg-[#fff] md:h-2 lg:h-1">
                                <div className="w-[80%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                        <div className="lg:w-[37vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>Git/GitHub</p>
                                <p>80%</p>
                            </div>
                            <div className="lg:w-[37vw] h-1 bg-[#fff] md:h-2 lg:h-1">
                                <div className="w-[80%] bg-[#0c645b] h-1 md:h-2 lg:h-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
