import React from 'react'

const TaskList: React.FC = () => {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Today</h2>
      <ul>
        <li className="flex items-center space-x-2 mb-2">
          <input type="checkbox" />
          <span className="text-gray-900 dark:text-white">Call Mary by 8AM</span>
        </li>
        <li className="flex items-center space-x-2 mb-2">
          <input type="checkbox" />
          <span className="text-gray-900 dark:text-white">Go to the gym by 9AM</span>
        </li>
        <li className="flex items-center space-x-2 mb-2">
          <input type="checkbox" />
          <span className="text-gray-900 dark:text-white">Prepare lesson plan by 2PM</span>
        </li>
        <li className="flex items-center space-x-2 mb-2">
          <input type="checkbox" />
          <span className="text-gray-900 dark:text-white">Visit Fatima by 4PM</span>
        </li>
        <li className="flex items-center space-x-2 mb-2">
          <input type="checkbox" />
          <span className="text-gray-900 dark:text-white">Attend online class 6PM</span>
        </li>
      </ul>
    </div>
  )
}

export default TaskList
