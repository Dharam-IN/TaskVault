'use client'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Sidebar from '@/components/Dashboard/Sidebar'
import Header from '@/components/Dashboard/Header'
import TaskList from '@/components/Dashboard/TaskList'

const Page = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900`}>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="mt-4">
            <TaskList/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Page
