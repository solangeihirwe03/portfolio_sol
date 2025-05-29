import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import projects from "../components/project"
import { useState } from "react";
import { Element } from "react-scroll";

export const Projects = () => {
    const [Projects, setProjects] = useState(projects)
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < projects.length - 2) {
            setCurrentSlide(currentSlide + 1);
            setProjects(projects)
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };
    return (
        <Element name="projects" className="w-full" id="projects">
            <div className="relative flex items-center flex-col w-full">
                <div className="">
                    <h1 className="font-semibold text-4xl text-[#F4A169] py-8">PROJECTS</h1>
                </div>
                <div className=" flex flex-wrap gap-7 px-20 relative justify-center items-center w-2/3">
                    <button
                        onClick={prevSlide}
                        className="absolute left-28 top-44 z-10 text-[#F4A169] bg-[#686675]  p-2"
                    >
                        <FaAngleLeft fontSize={25}/>
                    </button>
                    {Projects.slice(currentSlide, currentSlide + 2).map((project) => (
                        <div key={project.id} className="lg:w-[45%] mb-20 rounded-3xl w-full shadow-2xl border-2 border-gray-400  p-4 flex justify-center relative h-[65vh]">
                            <a href={project.link} target="_blank" >
                                <img
                                    src={project.imageUrl}
                                    alt={project.name}
                                    className="w-full "
                                />
                                <p className="text-center text-lg py-4">
                                    {project.description}
                                </p>
                                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col justify-center transition-opacity duration-300 items-center">
                                    <div className="text-white text-3xl mb-2 font-semibold">{project.name}</div>
                                </div>
                            </a>
                        </div>
                    ))
                    }
                    <button
                        onClick={nextSlide}
                        className="absolute right-28 top-44 z-10 text-[#F4A169] bg-[#686675] p-2"
                    >
                        <FaAngleRight fontSize={25}/>
                    </button>
                </div>
            </div>
        </Element>
    )
}
