// src/App.js
import React, { useState } from 'react';
import MainContent from '../components/MainContent';
import Modal from '../components/Modal';
import Sidebar from '../components/SideBar';
const App = () => {
  const [activeSection, setActiveSection] = useState('view-patient-details');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    // Handle password change logic here
    console.log('Password changed!');
    handleModalToggle(); // Close the modal after submission
  };

  return (
    <div className="flex h-screen" data-scroll-section>
      <Sidebar onSectionChange={handleSectionChange} />
      <MainContent activeSection={activeSection} />
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} onSubmit={handlePasswordChange} />
    </div>
  );
};

export default App;
