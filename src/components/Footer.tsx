import { Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center bg-gray-900">
                <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex mt-24 mb-12 flex-row justify-between">
                            <div className="">
                                <h4>Task Vault</h4>
                            </div>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                                About
                            </a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                                Services
                            </a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                                Why us
                            </a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                                Contact
                            </a>
                            <div className="flex flex-row space-x-3 items-center justify-between">
                                <Link href={"https://github.com/Dharam-IN/"} target='_blank' className='text-xl hover:text-gray-600 transition-colors duration-300 bg-white text-gray-800 p-2 rounded-[7px]'>
                                    <FaGithub/>
                                </Link>
                                <Link href={"https://www.instagram.com/freakycoders/"} target='_blank' className='text-xl hover:text-gray-600 transition-colors duration-300 bg-white text-gray-800 p-2 rounded-[7px]'>
                                    <FaInstagram/>
                                </Link>
                                <Link href={"https://www.linkedin.com/in/dharam-in/"} target='_blank' className='text-xl hover:text-gray-600 transition-colors duration-300 bg-white text-gray-800 p-2 rounded-[7px]'>
                                    <FaLinkedinIn/>
                                </Link>
                                <Link href={"https://x.com/Dharam__IN"} target='_blank' className='text-xl hover:text-gray-600 transition-colors duration-300 bg-white text-gray-800 p-2 rounded-[7px]'>
                                    <FaXTwitter/>
                                </Link>
                            </div>
                        </div>
                        <hr className="border-gray-600" />
                        <p className="w-full text-center my-12 text-gray-300">
                            Copyright © {new Date().getFullYear()} <Link href={"https://x.com/Dharam__IN"} target='_blank'>Dharam-in</Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
