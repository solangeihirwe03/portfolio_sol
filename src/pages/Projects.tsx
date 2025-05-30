import { MdArrowOutward } from "react-icons/md";
import projects from "../components/project"
import { Element } from "react-scroll";

export const Projects = () => {

    return (
        <Element name="projects" className="w-full lg:px-20" id="projects">
            <div className="relative flex items-center flex-col w-full">
                <div className="">
                    <h1 className=" text-lg font-semibold md:text-4xl text-[#0c645b] py-8 text-center">Showcasing My Remarkable Projects</h1>
                </div>
                <div className=" flex flex-wrap gap-7 relative justify-center items-center min-w-full h-auto px-4">
                    {projects.map((project) => (
                        <div key={project.id} className="mb-20 w-full shadow-sm border-2 border-gray-300 flex flex-col-reverse lg:flex-row justify-center relative h-auto lg:h-[70vh] items-center">
                            <div className="p-6">
                                <h2 className="md:text-4xl mb-2 font-semibold text-center leading-relaxed">{project.name}</h2>
                                <p className="text-lg py-4 text-gray-400">
                                        {project.description}
                                    </p>
                                <a 
                                href={project.link} 
                                target="_blank" 
                                className="flex gap-2 items-center my-4 border-2 p-2 text-center justify-center xl:w-[10vw] border-[#383838]">
                                <button>View project</button>
                                <MdArrowOutward/>  
                                </a>
                            </div>
                            <img
                                src={project.imageUrl}
                                alt={project.name}
                                className="w-full lg:w-1/2 h-[40vh] md:h-[65vh] lg:h-[70vh]"
                            />
                        </div>
                    ))
                    }
                </div>
            </div>
        </Element>
    )
}
