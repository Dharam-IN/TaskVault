import { FaSmile, FaChartBar, FaBullseye, FaMobileAlt, FaAdjust, FaSun } from 'react-icons/fa';

import benefitOneImg from "../../public/Images/benefit-one.png";
import benefitTwoImg from "../../public/Images/benefit-two.png";

const benefitOne = {
  title: "Streamline Your Tasks",
  desc: "TaskVault offers an intuitive and powerful task management tool to help you stay organized, productive, and efficient.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Easy Task Management",
      desc: "Create, edit, and delete tasks with just a few clicks.",
      icon: <FaSmile />,
    },
    {
      title: "Task Prioritization",
      desc: "Organize your tasks by priority to ensure that the most important tasks get done first.",
      icon: <FaChartBar />,
    },
    {
      title: "Notifications and Reminders",
      desc: "Stay on top of your deadlines with timely notifications and reminders.",
      icon: <FaBullseye />,
    },
  ],
};

const benefitTwo = {
  title: "Empower Your Productivity",
  desc: "TaskVault is designed to provide a seamless task management experience across all devices.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Access your tasks on the go with our mobile-friendly design.",
      icon: <FaMobileAlt />,
    },
    {
      title: "User Authentication",
      desc: "Securely log in with Google or other providers to access your tasks from anywhere.",
      icon: <FaAdjust />,
    },
    {
      title: "Collaborative Workspace",
      desc: "Work together with your team by sharing tasks and collaborating in real-time.",
      icon: <FaSun />,
    },
  ],
};

export { benefitOne, benefitTwo };
