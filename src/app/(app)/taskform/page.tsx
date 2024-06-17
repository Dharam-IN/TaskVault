import Layout from '@/components/Dashboard/Layout';
import TaskForm from '@/components/Dashboard/TaskForm';
import React from 'react';

const TaskFormPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Task Form</h1>
        <TaskForm />
      </div>
    </Layout>
  );
};

export default TaskFormPage;
