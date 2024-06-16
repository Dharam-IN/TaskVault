"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  const navigation = ["Home", "About", "Contact", "Company", "Blog"];
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const { data: session } = useSession();

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme, systemTheme, currentTheme]);

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100" passHref>
                    <Image
                      src={currentTheme === "dark" ? "/Images/TaskLight.png" : "/Images/TaskDark.png"}
                      alt="Logo"
                      width="80"
                      height="32"
                    />
                </Link>
                <div className="flex lg:hidden items-center gap-4">
                <ThemeChanger/>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                </div>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <div className="flex flex-col items-start w-full space-y-4">
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none" passHref>
                          {item}
                      </Link>
                    ))}
                    <div className="flex gap-5 items-center w-full">
                      {session ? (
                        <>
                          <Avatar>
                            <AvatarImage src={session.user.image} alt="Avatar" />
                            <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
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
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex space-x-4">
            {navigation.map((menu, index) => (
              <li key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800" passHref>
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden space-x-4 lg:flex nav__item items-center">
          <ThemeChanger />
          {session ? (
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={session.user.image} alt="Avatar" />
                <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <Button className="px-6 py-2 text-white bg-indigo-600 rounded-md" onClick={() => signOut()}>
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
