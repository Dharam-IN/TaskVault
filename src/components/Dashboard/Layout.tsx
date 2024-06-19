'use client'
import React, { ReactNode, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
      };
  return (
    <div className={`flex bg-gray-100 dark:bg-gray-900`}>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
