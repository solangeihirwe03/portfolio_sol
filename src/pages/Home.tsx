import { Element, Link } from "react-scroll"


export const Home = () => {
    return (
        <Element name="home" className='w-full px-4 pt-10 md:py-8 md:px-10 flex flex-col-reverse md:flex-row items-center jus md:gap-16 lg:px-20' id="home">
            <div className="flex flex-col items-center justify-center lg:items-start lg:w-[75vw]">
                <h1 className="py-4 text-2xl 2xl:text-6xl">SOLANGE~D~IHIRWE</h1>
                <p className="xl:w-[55vw] pb-5 2xl:text-4xl 2xl:leading-relaxed">
                    Welcome to the future of web application! Let's craft your dream web app together. Experience the difference
                    between elegant design and functionality we're here to guide you every step of the way
                </p>
                <Link
                    to="about"
                    className="border-2 border-[#383838] px-4 py-2 rounded-md 2xl:text-4xl 2xl:mt-6 2xl:px-8 2xl:py-4"
                >
                    Learn More
                </Link>
            </div>
            <img
                src="homepage.jpg"
                alt="homepage image"
                className="w-[84vw] rounded-full md:w-[45vh] xl:w-[55vh]"
            />
        </Element>
    )
}
