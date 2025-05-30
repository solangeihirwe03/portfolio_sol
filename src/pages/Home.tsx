import { Element, Link } from "react-scroll"


export const Home = () => {
    return (
        <Element
            name="home"
            id="home"
            className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-10 lg:px-20 relative h-[90vh] text-white"
            style={{ backgroundImage: "url('homepage.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="flex flex-col items-center justify-center  lg:w-[75vw] z-50">
                <h1 className="py-4 text-2xl 2xl:text-6xl">SOLANGE~D~IHIRWE</h1>
                <p className="xl:w-[55vw] pb-5 2xl:text-4xl 2xl:leading-relaxed">
                    Welcome to the future of web application! Let's craft your dream web app together. Experience the difference
                    between elegant design and functionality we're here to guide you every step of the way
                </p>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="border-2 border-[#53817c] px-4 py-2 rounded-md 2xl:text-4xl 2xl:mt-6 2xl:px-8 2xl:py-4 cursor-pointer"
                >
                    Learn More
                </Link>
            </div>
        </Element>
    )
}
