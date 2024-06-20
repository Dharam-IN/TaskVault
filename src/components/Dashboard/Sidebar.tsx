import React from 'react'
import { AiOutlineCalendar, AiOutlineCheckSquare, AiOutlineClose } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface SidebarProps {
  showSidebar: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  const { theme, setTheme } = useTheme();


  return (
    <div className={`fixed inset-0 z-30 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out h-screen bg-white dark:bg-gray-800 p-5 shadow-md`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full h-10 w-10 bg-gray-300"></div>
          <span className="font-semibold text-gray-900 dark:text-white">Dharam</span>
        </div>
        <button className="md:hidden" onClick={toggleSidebar}>
          <AiOutlineClose size={24} />
        </button>
      </div>
      <nav className="mt-10">
        <Link href="#" passHref>
          <div className="flex items-center p-2 space-x-2 text-blue-600 dark:text-blue-400">
            <AiOutlineCalendar size={24} />
            <span>Today</span>
          </div>
        </Link>
        <Link href="#" passHref>
          <div className="flex items-center p-2 space-x-2 text-gray-900 dark:text-white">
            <AiOutlineCalendar size={24} />
            <span>Next 7 Days</span>
          </div>
        </Link>
        <Link href="#" passHref>
          <div className="flex items-center p-2 space-x-2 text-gray-900 dark:text-white">
            <AiOutlineCalendar size={24} />
            <span>All</span>
          </div>
        </Link>
      </nav>
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My List</h3>
        <ul>
          <li>
            <Link href="#" passHref>
              <div className="block p-2 text-gray-900 dark:text-white">Personal</div>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <div className="block p-2 text-gray-900 dark:text-white">Work</div>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <div className="block p-2 text-gray-900 dark:text-white">Education</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <Link href="#" passHref>
          <div className="flex items-center p-2 space-x-2 text-green-600 dark:text-green-400">
            <AiOutlineCheckSquare size={24} />
            <span>Completed</span>
          </div>
        </Link>
        <Link href="#" passHref>
          <div className="flex items-center p-2 space-x-2 text-red-600 dark:text-red-400">
            <AiOutlineCheckSquare size={24} />
            <span>Trash</span>
          </div>
        </Link>
      </div>
      <div className="mt-10">
        <button className="w-full p-2 bg-blue-600 text-white dark:bg-blue-400 dark:text-black rounded-lg">Create Workspace</button>
      </div>
      <div className="mt-10">
        <button
          className="w-full p-2 bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded-lg"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  )
}

export default Sidebar
