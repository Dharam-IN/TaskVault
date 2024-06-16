"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <button
              onClick={() => togglePanel(index)}
              className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
            >
              <span>{item.question}</span>
              <FaChevronDown
                className={`${
                  openIndex === index ? "transform rotate-180" : ""
                } w-5 h-5 text-indigo-500 transition-transform`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What is TaskVault?",
    answer: "TaskVault is a powerful task management tool designed to help you stay organized, productive, and efficient.",
  },
  {
    question: "Is TaskVault free to use?",
    answer: "Yes, TaskVault offers a free version with essential features. There are also premium plans with additional features.",
  },
  {
    question: "How do I sign up for TaskVault?",
    answer: "You can sign up for TaskVault using your Google account or by creating a new account with your email and password.",
  },
  {
    question: "Can I collaborate with my team on TaskVault?",
    answer: "Yes, TaskVault allows you to share tasks and collaborate with your team in real-time.",
  },
  {
    question: "Does TaskVault have a mobile app?",
    answer: "Currently, TaskVault is accessible via web browsers on both desktop and mobile devices. A dedicated mobile app is in development.",
  },
  {
    question: "How secure is my data on TaskVault?",
    answer: "TaskVault takes data security seriously. We use industry-standard encryption and secure authentication methods to protect your data.",
  },
  {
    question: "Can I prioritize my tasks in TaskVault?",
    answer: "Yes, TaskVault allows you to prioritize your tasks to ensure the most important tasks are completed first.",
  },
  {
    question: "Does TaskVault offer reminders and notifications?",
    answer: "Yes, TaskVault provides timely reminders and notifications to help you stay on top of your deadlines.",
  },
];

export { Faq };
