import { Container } from '@/components/Container';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">About TaskVault</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">Welcome to TaskVault!</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            TaskVault is your ultimate task management solution designed to help you stay organized, productive, and efficient. Whether you&apos;re a student, professional, or someone who wants to keep track of their daily activities, TaskVault has you covered.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Our Mission</h2>
          <div className="flex items-center flex-col md:flex-row gap-4">
            <Image
              src="/Images/hero.png"
              alt="Our Mission"
              width={200}
              height={300}
              className="rounded-lg shadow-lg mr-8"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At TaskVault, our mission is to simplify your life by providing an intuitive and powerful task management tool. We aim to empower you to manage your tasks effortlessly, prioritize your work, and achieve your goals.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Features</h2>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Easy Task Management:</strong> Create, edit, and delete tasks with just a few clicks. Keep track of your to-dos with a user-friendly interface.
            </li>
            <li>
              <strong>Task Prioritization:</strong> Organize your tasks by priority to ensure that the most important tasks get done first.
            </li>
            <li>
              <strong>Notifications and Reminders:</strong> Stay on top of your deadlines with timely notifications and reminders.
            </li>
            <li>
              <strong>User Authentication:</strong> Securely log in with Google or other providers to access your tasks from anywhere.
            </li>
            <li>
              <strong>Collaborative Workspace:</strong> Work together with your team by sharing tasks and collaborating in real-time.
            </li>
            <li>
              <strong>Mobile Friendly:</strong> Access your tasks on the go with our mobile-friendly design.
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Why Choose TaskVault?</h2>
          <div className="flex items-center flex-col md:flex-row gap-4">
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>
                <strong>User-Friendly Interface:</strong> Our clean and intuitive design makes task management a breeze.
              </li>
              <li>
                <strong>Secure and Reliable:</strong> Your data is safe with us. We use robust security measures to protect your information.
              </li>
              <li>
                <strong>Flexible and Customizable:</strong> Tailor TaskVault to suit your personal or professional needs.
              </li>
              <li>
                <strong>Constant Updates:</strong> We&apos;re always working to improve TaskVault with new features and enhancements based on user feedback.
              </li>
            </ul>
            <Image
              src="/Images/benefit-one.png"
              alt="Why Choose Us"
              width={250}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Our Team</h2>
          <div className="flex items-center flex-col md:flex-row gap-4">
            <Image
              src="/Images/user1.jpg"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We are a dedicated team of developers and designers passionate about creating tools that enhance productivity and simplify life. Our goal is to provide you with the best task management experience possible.
            </p>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Get Started</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Ready to take control of your tasks and boost your productivity? Sign up today and experience the power of TaskVault!
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Thank you for choosing TaskVault. We look forward to helping you achieve more every day.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default page;
