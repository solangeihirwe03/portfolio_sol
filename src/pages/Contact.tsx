import { FaMapLocation, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBrandPinterest } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { Response } from "../components/Response";
import { useState } from "react";
import axios from "axios";
import { ChangeEvent } from "react";
import { Element } from "react-scroll";


export const Contact = () => {
    const [contact, setContact] = useState({ name: "", email: "", message: "" })
    const [message, setMessage] = useState({ type: "", content: "" })

    const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleinputs = (e: ChangeEvent<HTMLInputElement>) => {
        setContact(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handlesubmit = () => {
        if (!contact.email || !contact.name || !contact.message) {
            setMessage({
                type: "error",
                content: "please fill information in field"
            });
            return;
        }

        if (!validEmail.test(contact.email)) {
            setMessage({ type: "error", content: "provide valid email" });
            return;
        }
        axios.post("https://backend-mybrand-solange.onrender.com/messages/createMessage", contact)
            .then(response => {
                console.log(response.data)
                setMessage({
                    type: "success",
                    content: response.data
                })

                setContact({ name: "", email: "", message: "" })
            })
            .catch(err => {
                console.log(err)
                setMessage({
                    type: "error",
                    content: "Error adding contact"
                })
            })
    }
    return (
        <Element
            name="contacts"
            className="bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-50 relative"
            id="contact"
            style={{ backgroundImage: "url('/contact_background.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className=" w-full flex md:items-center flex-col justify-center relative font-poppins py-6 text-white lg:h-[80vh] z-10 ">
                <div className="relative mb-5 py-7 w-full flex justify-center">
                    <h1 className="font-bold md:text-8xl text-6xl text-[#53817c]">CONTACT</h1>
                    <h3 className="md:left-52 lg:left-[36rem] left-16 absolute top-16 md:text-4xl text-3xl lg:pl-28">Get in Touch</h3>
                </div>
                <div className="flex gap-6 px-4 md:px-24 flex-col  lg:flex-row w-full ">
                    <div className="flex flex-col gap-6 lg:w-[40%] w-full px-3 lg:text-xl items-center lg:items-start">
                        <h2 className="font-semibold md:text-3xl">ADDRESS</h2>
                        <p className="flex md:items-center text-sm md:text-xl">
                            <FaMapLocation fontSize={20} className="text-[#53817c]" />
                            <span>&nbsp; Kigali/Rwanda</span>
                        </p>
                        <p className="flex items-center text-sm md:text-xl">
                            <FaPhone fontSize={20} className="text-[#53817c]" />
                            <span>&nbsp; +250787113254</span>
                        </p>
                        <p className="flex items-center text-sm md:text-xl">
                            <FaEnvelope fontSize={20} className="text-[#53817c]" />
                            <span>&nbsp; solangeihirwe@gmail.com</span>
                        </p>
                        <div className="pt-4 flex flex-col items-center md:items-start">
                            <h1 className="text-xl font-semibold pb-3">FOLLOW ME</h1>
                            <div className="flex gap-2 text-gray-300 ">
                                <a href="https://www.instagram.com/__ihirwe___14/" target="_blank">
                                    <FaInstagram fontSize={24} />
                                </a>
                                <a href="https://github.com/solangeihirwe03" about="_blank">
                                    <FaGithub fontSize={24} />
                                </a>
                                <a href="https://x.com/IhirweSolange" target="_blank">
                                    <SlSocialTwitter fontSize={24} />
                                </a>
                                <a href="https://www.pinterest.com/ihirwesolange/" target="_blank">
                                    <TbBrandPinterest fontSize={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/solangeihirwe/" target="_blank">
                                    <FaLinkedinIn fontSize={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[57%] flex flex-col gap-5 w-full">
                        <h1>SEND US A CHAT</h1>
                        <form className="w-full flex flex-col gap-5 items-center md:px-2">
                            <input
                                type="text"
                                placeholder="Name"
                                value={contact.name}
                                onChange={handleinputs}
                                className="bg-[#232a31] py-4 px-6 w-full outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={contact.email}
                                onChange={handleinputs}
                                className="bg-[#232a31] py-4 px-6 w-full outline-none"
                            />
                            <textarea
                                placeholder="Tell us more about your needs...."
                                value={contact.message}
                                onChange={(e:any) => setMessage(e.target.value)}
                                className="bg-[#232a31] py-4 px-6 w-full h-24 outline-none"
                            ></textarea>
                            <button
                                onSubmit={handlesubmit}
                                type="submit"
                                className="px-6 py-3 bg-[#53817c] xl:w-[18vw] rounded-3xl font-medium md:text-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <Response type={message.type} content={message.content} />
                </div>
            </div>
        </Element>
    )
}
