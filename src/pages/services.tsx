import { Element } from "react-scroll"
import { FiMonitor } from "react-icons/fi"
import { FaCode } from "react-icons/fa6"
import { MdSupportAgent } from "react-icons/md"
import { BiData } from "react-icons/bi"

const Services = () => {
    return (
        <Element name="services" className="w-full px-4 lg:px-20 py-10">
            <h1 className="uppercase text-xl font-semibold pb-4 text-[#0c645b] md:pb-6 2xl:text-6xl md:text-center">What I offer:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start p-6 border-2 rounded-xl">
                    <FiMonitor size={35} color="#0c645b" />
                    <div>
                        <h3 className="text-lg font-semibold">Web Design</h3>
                        <p className="text-sm ">
                            Crafting intuitive and responsive designs focused on user experience and brand identity.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-6 border-2 rounded-xl">
                    <FaCode size={35} color="#0c645b" />
                    <div>
                        <h3 className="text-lg font-semibold">Web Development</h3>
                        <p className="text-sm">
                            Building scalable and interactive websites using modern tools like React and Node.js.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-6 border-2 rounded-xl">
                    <MdSupportAgent size={35} color="#0c645b" />
                    <div>
                        <h3 className="text-lg font-semibold">Technical Support</h3>
                        <p className="text-sm">
                            Providing technical assistance and maintenance to ensure reliable system performance.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-6 border-2 rounded-xl">
                    <BiData size={35} color="#0c645b" />
                    <div>
                        <h3 className="text-lg font-semibold">Database Administration</h3>
                        <p className="text-sm">
                            Managing and securing databases to ensure data integrity, availability, and performance.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Services
