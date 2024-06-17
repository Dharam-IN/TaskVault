"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Github", href: "https://github.com/Dharam-IN" },
    { name: "Blog", href: "/blog" },
  ];

  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = useSession();
  // console.log(session)

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme, systemTheme, currentTheme]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo */}
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <Image
              src={currentTheme === "dark" ? "/Images/TaskLight.png" : "/Images/TaskDark.png"}
              alt="Logo"
              width="80"
              height="32"
            />
          </Link>
          <div className="flex lg:hidden items-center gap-4">
            <ThemeChanger />
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="px-2 py-1 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            >
              {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="flex flex-col items-start w-full space-y-4 my-5 lg:hidden">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-5 items-center w-full">
                {session ? (
                  <>
                    <Avatar>
                      <AvatarImage src={session.user.image} alt="Avatar" />
                      <AvatarFallback>{session.user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <Button className="px-6 py-2 text-white bg-indigo-600 rounded-md" onClick={() => signOut()}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/signin" className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                      Sign In
                    </Link>
                    <Link href="/signup" className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex space-x-4">
            {navigation.map((menu, index) => (
              <li key={index}>
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden space-x-4 lg:flex nav__item items-center">
          <ThemeChanger />
          {session ? (
            <div className="flex items-center space-x-4">
              <Avatar className="bg-gray-500 dark:bg-black">
                <AvatarImage src={session.user.image} alt="Avatar" />
                <AvatarFallback>{session.user.name ? (session.user.name[0].toUpperCase()) : (session.user.username[0].toUpperCase())}</AvatarFallback>
              </Avatar>
              <Button className="px-6 py-2 text-white bg-indigo-600 rounded-md dark:text-white" onClick={() => signOut()}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link href="/signin" className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                Sign In
              </Link>
              <Link href="/signup" className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
