import React from 'react'
import { AiOutlineSearch, AiOutlineBell, AiOutlineMenu } from 'react-icons/ai'

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <button className="md:hidden" onClick={toggleSidebar}>
        <AiOutlineMenu size={24} />
      </button>
      <div className="relative flex items-center w-full max-w-md">
        <AiOutlineSearch size={20} className="absolute left-3 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:bg-white dark:focus:bg-gray-600"
        />
      </div>
      <div className="flex items-center space-x-4">
        <AiOutlineBell size={24} className="text-gray-500 dark:text-gray-400" />
      </div>
    </header>
  )
}

export default Header
