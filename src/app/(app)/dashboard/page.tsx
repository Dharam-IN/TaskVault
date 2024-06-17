'use client'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Sidebar from '@/components/Dashboard/Sidebar'
import Header from '@/components/Dashboard/Header'
import TaskList from '@/components/Dashboard/TaskList'
import Layout from '@/components/Dashboard/Layout'

const DashboardPage: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Layout>
      <div className={`flex h-screen bg-gray-100 dark:bg-gray-900`}>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="mt-4">
            <TaskList/>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  )
}

export default DashboardPage
