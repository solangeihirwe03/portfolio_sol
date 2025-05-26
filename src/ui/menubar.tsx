import { Link } from "react-scroll";

type MenubarProps = {
    isMenuOpen: boolean;
    onClose: () => void;
};

const Menubar = ({ isMenuOpen, onClose }: MenubarProps) => {
    return (
        <div
            onClick={onClose}
            className={`${isMenuOpen ? 'flex animate-in fade-in slide-in-from-top-4' : 'hidden'}flex flex-col items-center justify-center bg-white shadow-lg h-[35vh] transition-all duration-300 absolute top-16 right-0 w-full gap-6 text-lg z-50`}
        >
            <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={onClose}
                className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
            >
                Home
            </Link>
            <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={onClose}
                className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
            >
                About
            </Link>
            <Link
                to="services"
                smooth={true}
                duration={500}
                onClick={onClose}
                className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
            >
                Services
            </Link>
            <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={onClose}
                className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
            >
                Projects
            </Link>
            <Link
                to="contacts"
                smooth={true}
                duration={500}
                onClick={onClose}
                className="hover:text-[#0c645b] text-[#383838] hover:font-semibold w-20"
            >
                Contact
            </Link>
        </div>
    )
}

export default Menubar