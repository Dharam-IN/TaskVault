'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";

const Footer = () => {
  const navigation = ["Home", "About", "Contact", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];

  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  console.log(currentTheme)
  
  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme, systemTheme, currentTheme]);


  return (
    <footer className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100" passHref>
                  <Image 
                    src={currentTheme === "dark" ? "/Images/TaskLight.png" : "/Images/TaskDark.png"} 
                    alt="Logo"
                    width="80"
                    height="32"/>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                At TaskVault, our mission is to simplify your life by providing an intuitive and powerful task management tool.
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navigation.map((item, index) => (
              <Link key={index} href="/" className="text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700" passHref>
                  {item}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {legal.map((item, index) => (
              <Link key={index} href="/" className="text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700" passHref>
                  {item}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-5">
            <div>Follow us</div>
            <div className="flex space-x-5 text-gray-400 dark:text-gray-500">
              <Link href="https://twitter.com/Dharam__IN" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="hover:text-indigo-500" />
              </Link>
              <Link href="https://github.com/dharam-in" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="hover:text-indigo-500" />
              </Link>
              <Link href="https://linkedin.com/in/dharam-in" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-indigo-500" />
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <Link href="https://github.com/dharam-in" target="_blank" rel="noopener noreferrer" className="text-indigo-500 font-bold">
            Dharam
          </Link>{" "}
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </footer>
  );
};

export default Footer;
