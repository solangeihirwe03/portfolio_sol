import about from "/about.jpg"
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import AboutModal from "../components/AboutModal";

export const About = () => {

    const [showMore, setShowMore] = useState(false)
    const typedElement = useRef(null);

    const handleClick = ()=>{
        setShowMore(!showMore)
    }

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
        <div className="w-full " id="about">
            <div className="bg-[#212529] flex items-center flex-col relative font-poppins w-full  text-white justify-center mt-[-18rem] lg:flex-row px-10 py-32 gap-20 h-auto">
                <div className="w-1/3">
                    <img src={about} className="h-[50vh] w-[50vh] rounded-full" />
                </div>
                <div className="w-2/4">
                    <h1 className="text-5xl uppercase font-medium pb-6">solange <span className="text-[#CA8455]">ihirwe</span></h1>
                    <p className="text-3xl text-[#52525b] pb-6">Creative <span className="font-medium text-white" ref={typedElement}></span></p>
                    <p className="text-xl leading-normal pb-6">
                        I'm passionate about using interactive user interfaces
                        to create engaging and strengthen a company's brand image.
                        Do you have an interactive idea in mind?
                    </p>
                    <button className="px-16 py-3 bg-[#CA8455] rounded-full text-xl font-medium hover:text-black hover:bg-white" onClick={handleClick}>Learn More</button>
                </div>
                <div className="absolute bg-black w-[85vw] top-10 left-24 ">
                {showMore&& (
                    <AboutModal confirm={handleClick}/>
                ) }
                </div>
            </div>
        </div>
    )
}
