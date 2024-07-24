// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <span className="close-button absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <form id="change-password-form" className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="new-password" className="block">New Password:</label>
            <input type="password" id="new-password" name="new-password" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
