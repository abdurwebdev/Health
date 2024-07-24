// src/components/MainContent.js
import React from 'react';

const MainContent = ({ activeSection }) => {
  return (
    <div className="main-content flex-1 p-6">
      <header className="bg-blue-500 text-white p-4 rounded mb-6">
        <h1 className="text-2xl font-bold font-[gilroy]">Welcome, Doctor</h1>
      </header>

      {activeSection === 'view-patient-details' && (
        <section className="content-section mb-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Patient Details</h2>
          <div className="patient-details bg-gray-100 p-4 rounded shadow">
            <p className='text-xl font-[gilroy]'>No patient details available.</p>
          </div>
        </section>
      )}

      {activeSection === 'update-availability' && (
        <section className="content-section mb-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Update Availability</h2>
          <form id="availability-form" className="bg-gray-100 p-4 rounded shadow">
            <label htmlFor="availability" className="block mb-2">
              Select Availability:
            </label>
            <input type="date" id="availability" name="availability" className="w-full p-2 mb-4 border border-gray-300 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Update
            </button>
          </form>
        </section>
      )}

      {activeSection === 'view-appointments' && (
        <section className="content-section mb-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Appointments</h2>
          <div className="appointments bg-gray-100 p-4 rounded shadow">
            <p className='font-[gilroy]'>No appointments scheduled.</p>
          </div>
        </section>
      )}

      {activeSection === 'notifications' && (
        <section className="content-section mb-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Notifications</h2>
          <div className="notifications bg-gray-100 p-4 rounded shadow">
            <p className='font-[gilroy]'>No notifications available.</p>
          </div>
        </section>
      )}

      {activeSection === 'manage-profile' && (
        <section className="content-section mb-6 h-[100vh]">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Manage Profile</h2>
          <form id="profile-form" className="bg-gray-100 mb-10 p-4 rounded shadow">
            <label htmlFor="profile-name" className="block mb-2">
              Name:
            </label>
            <input type="text" id="profile-name" name="profile-name" className="w-full p-2 mb-4 border border-gray-300 rounded" />

            <label htmlFor="profile-email" className="block mb-2">
              Email:
            </label>
            <input type="email" id="profile-email" name="profile-email" className="w-full p-2 mb-4 border border-gray-300 rounded" />

            <label htmlFor="profile-password" className="block mb-2">
              Password:
            </label>
            <input type="password" id="profile-password" name="profile-password" className="w-full p-2 mb-4 border border-gray-300 rounded" />

            <label htmlFor="profile-theme" className="block mb-2">
              Theme:
            </label>
            <select id="profile-theme" name="profile-theme" className="w-full p-2 mb-4 border border-gray-300 rounded">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mr-2">
              Save Profile
            </button>
          </form>
          <button id="delete-profile" className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mr-2">
            Delete Profile
          </button>
          <button id="change-password" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mr-2">
            Change Password
          </button>
          <button id="change-theme" className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
            Change Theme
          </button>
        </section>
      )}
    </div>
  );
};

export default MainContent;
