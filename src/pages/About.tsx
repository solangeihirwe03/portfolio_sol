import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { CiEdit } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { IoLayersOutline } from "react-icons/io5";

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
                <h1 className="uppercase text-xl font-semibold pb-4 text-[#0c645b] md:pb-2 2xl:text-6xl">About me</h1>
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
                            environments.
                        </p>
                        <a href="/sol_cv.pdf" download="CV.pdf">Download CV</a>
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

            <div className="bg-[#383838] h-auto md:h-[45vh] mt-12 px-4 md:px-20 text-white flex flex-col md:justify-between py-6">
                <div>
                    <h1>
                        <CiEdit size={35} color="#39FF14"/>
                        Education
                    </h1>
                </div>
                <div>
                    <h1>
                        <TfiBag size={35} color="#39FF14"/>
                        Experience
                    </h1>
                </div>
                <div>
                    <h1>
                        <IoLayersOutline size={35} color="#39FF14"/>
                        Skills
                    </h1>
                    <div className="flex flex-col gap-12">
                        <div className="md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>React JS</p>
                                <p>80%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[80%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                        <div className="md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>HTML/CSS</p>
                                <p>90%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[90%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                        <div className="md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>Node JS</p>
                                <p>70%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[70%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                        <div className="md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>Tailwind CSS</p>
                                <p>85%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[85%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                        <div className="md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[##fff]">
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[80%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>TypeScript</p>
                                <p>80%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[80%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                        <div className="md:w-[40vw]">
                            <div className="flex justify-between pb-1 text-[#fff]">
                                <p>Git/GitHub</p>
                                <p>80%</p>
                            </div>
                            <div className="md:w-[40vw] h-1 bg-[#fff]">
                                <div className="w-[80%] bg-[#39FF14] h-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
