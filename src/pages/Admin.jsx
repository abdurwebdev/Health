import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import DashboardHome from '../components/Dashboard/DashboardHome';
import ManageUsers from '../components/Dashboard/ManageUsers';
import ManageAppointments from '../components/Dashboard/ManageAppointments';
import Analytics from '../components/Dashboard/Analytics';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard-home');

  const renderSection = () => {
    switch (activeSection) {
      case 'manage-users':
        return <ManageUsers />;
      case 'manage-appointments':
        return <ManageAppointments />;
      case 'analytics':
        return <Analytics />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100" >
      <Sidebar onSectionChange={setActiveSection} />
      <div className="flex-1 p-8 overflow-y-auto">{renderSection()}</div>
    </div>
  );
};

export default Admin;
