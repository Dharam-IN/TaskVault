'use client'
import Layout from '@/components/Dashboard/Layout';
import TaskForm from '@/components/Dashboard/TaskForm';
import React from 'react';

const TaskFormPage: React.FC = () => {
  return (
    <Layout>
      <div className={`flex h-full bg-gray-100 dark:bg-gray-900`}>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add New Task</h1>
          <div className="mt-4">
            <TaskForm/>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  );
};

export default TaskFormPage;
