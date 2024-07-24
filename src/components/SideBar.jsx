// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ onSectionChange }) => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 p-6 shadow-lg h-[120vh]">
      <h2 className="text-center mb-6 text-2xl font-bold">Doctor Dashboard</h2>
      <ul>
        <li className="mb-4">
          <button
            onClick={() => onSectionChange('view-patient-details')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            View Patient Details
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onSectionChange('update-availability')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Update Availability
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onSectionChange('view-appointments')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            View Appointments
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onSectionChange('notifications')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            View Notifications
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onSectionChange('manage-profile')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Manage Profile
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionChange('logout')}
            className="w-full text-left p-2 hover:bg-gray-700 rounded"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
