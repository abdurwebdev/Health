import React from 'react';

const Sidebar = ({ onSectionChange }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <ul className="space-y-2 p-4">
        <li
          onClick={() => onSectionChange('dashboard-home')}
          className="p-2 rounded cursor-pointer hover:bg-gray-700"
        >
          Dashboard
        </li>
        <li
          onClick={() => onSectionChange('manage-users')}
          className="p-2 rounded cursor-pointer hover:bg-gray-700"
        >
          Manage Users
        </li>
        <li
          onClick={() => onSectionChange('manage-appointments')}
          className="p-2 rounded cursor-pointer hover:bg-gray-700"
        >
          Manage Appointments
        </li>
        <li
          onClick={() => onSectionChange('analytics')}
          className="p-2 rounded cursor-pointer hover:bg-gray-700"
        >
          Analytics
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
