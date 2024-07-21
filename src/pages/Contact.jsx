import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or submit logic here
    console.log(contactData); // Replace with your submit logic
    // Optionally, clear the form after submission
    setContactData({
      fullName: '',
      email: '',
      message: ''
    });
  };
      
  return (
    <>
    <div id="top" className="w-full h-screen pointer-events-auto  absolute top-0 left-0 ">
    {/* The Content on the top Starts like the navbar and About Section Content */}
    <div id="workingarea" className="w-[80%] relative m-auto h-screen max-w-[1920px] z-[999]">
      {/* NavBar Component Starts */}
      <Navbar />
      {/* NavBar Component Ends */}
      {/* Contact Section Starts */}
      <div className=" min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white glass">
  <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
  <form onSubmit={handleContactSubmit}>
    <div className="mb-4">
      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
      <input type="text" id="fullName" name="fullName" value={contactData.fullName} onChange={handleContactChange} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your full name" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
      <input type="email" id="email" name="email" value={contactData.email} onChange={handleContactChange} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your email" />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
      <textarea id="message" name="message" rows="4" value={contactData.message} onChange={handleContactChange} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type your message"></textarea>
    </div>
    <div className="mt-6">
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
    </div>
  </form>
</div>

        </div>
      </div>
      </div>
      </>
  )
}

export default Contact