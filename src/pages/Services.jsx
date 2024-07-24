import React from 'react'
import Navbar from '../components/Navbar'

function Services() {
  return (
    <>
    <div id="top" data-scroll-section className="w-full h-screen  absolute top-0 left-0 pointer-events-none">
    {/* The Content on the top Starts like the navbar and About Section Content */}
    <div id="workingarea" className="w-[80%] relative m-auto h-screen max-w-[1920px] z-[999]">
      {/* NavBar Component Starts */}
      <Navbar />
      {/* NavBar Component Ends */}
      {/* Services Section Starts */}
      <section className="bg-white text-gray-800 py-10 px-5 sm:px-10 md:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-8xl font-bold mb-4">Our Services</h1>
          <p className="text-4xl">Explore the comprehensive services offered by our AI-Based Healthcare Chatbot System.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInLeft">
            <img src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Medical Queries" className="w-full h-auto rounded shadow-md" />
            <h2 className="text-2xl font-semibold mt-4">Medical Queries</h2>
            <p className="text-lg font-[gilroy] mt-2">Users can ask medical questions and receive accurate information and advice from the chatbot using NLP algorithms.</p>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInRight">
            <img src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Appointment Scheduling" className="w-full h-auto rounded shadow-md" />
            <h2 className="text-2xl font-semibold mt-4">Appointment Scheduling</h2>
            <p className="text-lg font-[gilroy] mt-2">Schedule appointments with healthcare providers, check availability, select suitable time slots, and confirm appointments through the chatbot.</p>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInLeft">
            <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Medication Reminders" className="w-full h-auto rounded shadow-md" />
            <h2 className="text-2xl font-semibold mt-4">Medication Reminders</h2>
            <p className="text-lg font-[gilroy] mt-2">Set up medication reminders through the chatbot to ensure timely medication doses, with customizable reminder settings based on medication schedules.</p>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 shery" data-shery="fadeInRight">
            <img src="https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Symptom Checker" className="w-full h-auto rounded shadow-md" />
            <h2 className="text-2xl font-semibold mt-4">Symptom Checker</h2>
            <p className="text-lg font-[gilroy] mt-2">Describe symptoms to the chatbot to receive triage suggestions, including self-care measures or recommendations to seek medical attention.</p>
          </div>
        </div>
      </div>
    </section>
      </div>
      </div>
      </>
  )
}

export default Services